# MCP Troubleshooting Guide - Complete Diagnostics

## System Information
- **OS**: Linux (Codespaces environment)
- **Node.js**: v20.19.0
- **npm**: v10.8.2
- **npx**: v10.8.2
- **Docker**: v27.5.1-1
- **Node/npm/npx Path**: `/home/codespace/nvm/current/bin/`

## Diagnostic Results

### ✅ Working Components
1. **Node.js Environment**: All tools properly installed and accessible
2. **Docker**: Running and accessible
3. **Basic Commands**: Echo and npx execute correctly
4. **Desktop Commander**: Installed globally (v0.2.3)

### 🔍 Key Findings

1. **Environment**: You're running in GitHub Codespaces (Linux), not macOS
   - Claude Desktop cache locations are different
   - No macOS permission issues to worry about

2. **Smithery CLI**: The `--version` flag isn't supported by the Smithery CLI
   - This is normal behavior, not an error

3. **Path Setup**: All Node.js tools are in the NVM-managed path
   - This might not be visible to Claude Desktop if it doesn't inherit the shell environment

## Recommended MCP Configuration Order

### Step 1: Start with Minimal Test
```json
{
  "mcpServers": {
    "test-echo": {
      "command": "echo",
      "args": ["MCP Test Success"]
    }
  }
}
```

### Step 2: Add Filesystem (Most Reliable)
```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["@modelcontextprotocol/server-filesystem"],
      "env": {
        "ALLOWED_DIRECTORIES": ["/workspaces/madanzo"]
      }
    }
  }
}
```

### Step 3: Add Git
```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["@modelcontextprotocol/server-filesystem"],
      "env": {
        "ALLOWED_DIRECTORIES": ["/workspaces/madanzo"]
      }
    },
    "git": {
      "command": "npx",
      "args": ["@modelcontextprotocol/server-git"]
    }
  }
}
```

### Step 4: Add Desktop Commander with Full Path
```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["@modelcontextprotocol/server-filesystem"],
      "env": {
        "ALLOWED_DIRECTORIES": ["/workspaces/madanzo"]
      }
    },
    "desktop-commander": {
      "command": "/home/codespace/nvm/current/bin/npx",
      "args": [
        "-y",
        "@smithery/cli@latest",
        "run",
        "@wonderwhy-er/desktop-commander",
        "--key",
        "772180de-b91e-4b7e-a65c-5f38caa2c06f"
      ],
      "env": {
        "PATH": "/home/codespace/nvm/current/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"
      }
    }
  }
}
```

## Alternative Approaches

### Option 1: Use Shell Wrapper
Create a wrapper script:
```bash
#!/bin/bash
export PATH="/home/codespace/nvm/current/bin:$PATH"
exec npx -y @smithery/cli@latest run @wonderwhy-er/desktop-commander --key 772180de-b91e-4b7e-a65c-5f38caa2c06f "$@"
```

Then reference it in MCP config:
```json
{
  "desktop-commander": {
    "command": "/workspaces/madanzo/scripts/desktop-commander-wrapper.sh"
  }
}
```

### Option 2: Use Node Directly
```json
{
  "desktop-commander": {
    "command": "/home/codespace/nvm/current/bin/node",
    "args": [
      "/home/codespace/nvm/current/bin/npx",
      "-y",
      "@smithery/cli@latest",
      "run",
      "@wonderwhy-er/desktop-commander",
      "--key",
      "772180de-b91e-4b7e-a65c-5f38caa2c06f"
    ]
  }
}
```

## Debugging Steps

1. **Check Claude Desktop Logs**
   - Linux: `~/.config/Claude/logs/` or `~/.local/share/Claude/logs/`
   
2. **Test Manual Execution**
   ```bash
   # This should start the MCP server and output protocol messages
   npx -y @smithery/cli@latest run @wonderwhy-er/desktop-commander --key 772180de-b91e-4b7e-a65c-5f38caa2c06f
   ```

3. **Environment Variable Test**
   ```bash
   # Check what environment Claude Desktop might see
   env | grep -E "(PATH|NODE|NPM)"
   ```

## Common Issues in Codespaces

1. **Path Visibility**: NVM paths might not be visible to GUI applications
2. **Permission Differences**: Codespaces has different permission model than local development
3. **Network**: Some MCP servers might have issues with Codespaces networking

## Next Steps

1. Start with the echo test to confirm MCP execution works
2. Add servers one by one
3. Use full paths for Node.js binaries
4. Check Claude Desktop logs for specific error messages
5. Consider creating wrapper scripts if path issues persist