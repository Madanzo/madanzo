# MCP Debugging Guide - Codespaces/Linux Edition

## Overview
This guide covers debugging Model Context Protocol (MCP) integrations in GitHub Codespaces and Linux environments, with specific focus on troubleshooting Claude Desktop MCP connections.

## Quick Diagnostic Commands

```bash
# 1. Check your environment
echo "Node: $(node --version)"
echo "NPM: $(npm --version)"
echo "NPX: $(which npx)"
echo "PATH: $PATH"

# 2. Test MCP server manually
npx -y @smithery/cli@latest run @wonderwhy-er/desktop-commander --key 772180de-b91e-4b7e-a65c-5f38caa2c06f

# 3. Check Claude logs (Linux paths)
tail -n 50 -F ~/.config/Claude/logs/mcp*.log 2>/dev/null || \
tail -n 50 -F ~/.local/share/Claude/logs/mcp*.log 2>/dev/null || \
echo "Claude logs not found in standard locations"
```

## Debugging Tools

### 1. MCP Inspector
```bash
# Install and run MCP Inspector
npx @modelcontextprotocol/inspector

# Test your server directly
npx @modelcontextprotocol/inspector npx -y @smithery/cli@latest run @wonderwhy-er/desktop-commander --key YOUR_KEY
```

### 2. Claude Desktop Developer Tools
```bash
# Enable DevTools on Linux
mkdir -p ~/.config/Claude
echo '{"allowDevTools": true}' > ~/.config/Claude/developer_settings.json

# Alternative location
mkdir -p ~/.local/share/Claude
echo '{"allowDevTools": true}' > ~/.local/share/Claude/developer_settings.json
```

Then use `Ctrl+Shift+I` to open DevTools in Claude Desktop.

### 3. Server-Side Logging
```bash
# Create a debug wrapper script
cat > /workspaces/madanzo/scripts/mcp-debug-wrapper.sh << 'EOF'
#!/bin/bash
echo "[MCP Debug] Starting at $(date)" >&2
echo "[MCP Debug] PATH: $PATH" >&2
echo "[MCP Debug] Working Directory: $(pwd)" >&2
echo "[MCP Debug] Command: $@" >&2

# Export NVM paths
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Or use direct paths for Codespaces
export PATH="/home/codespace/nvm/current/bin:$PATH"

# Execute the actual command
exec "$@"
EOF

chmod +x /workspaces/madanzo/scripts/mcp-debug-wrapper.sh
```

## Common Issues & Solutions

### Issue 1: "Command not found" errors

**Symptom**: MCP servers fail with "npx: command not found"

**Solution**: Use absolute paths
```json
{
  "desktop-commander": {
    "command": "/home/codespace/nvm/current/bin/npx",
    "args": ["-y", "@smithery/cli@latest", "run", "@wonderwhy-er/desktop-commander", "--key", "YOUR_KEY"],
    "env": {
      "PATH": "/home/codespace/nvm/current/bin:/usr/local/bin:/usr/bin:/bin",
      "NODE_PATH": "/home/codespace/nvm/current/lib/node_modules"
    }
  }
}
```

### Issue 2: Working Directory Issues

**Symptom**: Servers can't find files or have permission errors

**Solution**: Always use absolute paths
```json
{
  "filesystem": {
    "command": "npx",
    "args": ["@modelcontextprotocol/server-filesystem"],
    "env": {
      "ALLOWED_DIRECTORIES": ["/workspaces/madanzo"]  // Absolute path
    }
  }
}
```

### Issue 3: Environment Variables Not Available

**Symptom**: Servers missing required environment variables

**Solution**: Explicitly set all needed variables
```json
{
  "github": {
    "command": "npx",
    "args": ["@modelcontextprotocol/server-github"],
    "env": {
      "GITHUB_PERSONAL_ACCESS_TOKEN": "your_token",
      "HOME": "/home/codespace",
      "USER": "codespace"
    }
  }
}
```

### Issue 4: Docker MCP Timeout

**Symptom**: Docker images timeout during pull

**Solution**: Pre-pull images
```bash
# Run our pre-pull script
/workspaces/madanzo/scripts/docker-mcp-pull.sh
```

## Step-by-Step Debugging Process

### 1. Start with Minimal Configuration
```json
{
  "mcpServers": {
    "test": {
      "command": "echo",
      "args": ["test"]
    }
  }
}
```

### 2. Check Claude Logs
```bash
# Find Claude log location
find ~ -name "mcp*.log" -type f 2>/dev/null

# Monitor logs in real-time
tail -F ~/.config/Claude/logs/mcp*.log
```

### 3. Test Server Standalone
```bash
# Test filesystem server
npx @modelcontextprotocol/server-filesystem /workspaces/madanzo

# Test with Inspector
npx @modelcontextprotocol/inspector npx @modelcontextprotocol/server-filesystem /workspaces/madanzo
```

### 4. Progressive Configuration
Add servers one at a time:
1. Echo test
2. Filesystem
3. Git
4. Complex servers (desktop-commander, Docker-based)

## Codespaces-Specific Considerations

### NVM Path Issues
```bash
# Check NVM installation
echo $NVM_DIR
ls -la ~/.nvm/

# Get correct Node path
which node  # Should show /home/codespace/nvm/current/bin/node
```

### Port Forwarding
If MCP servers use network ports:
```bash
# Check forwarded ports in Codespaces
gh codespace ports

# Forward a port if needed
gh codespace ports forward 3000:3000
```

### File Permissions
```bash
# Check file permissions
ls -la ~/.config/Claude/
ls -la /workspaces/madanzo/

# Fix permissions if needed
chmod 755 /workspaces/madanzo/scripts/*.sh
```

## Advanced Debugging Techniques

### 1. Strace for System Calls
```bash
# Trace MCP server execution
strace -f -e trace=file,process,network -o mcp-trace.log npx @modelcontextprotocol/server-filesystem
```

### 2. Node.js Debugging
```bash
# Run with Node debugger
node --inspect-brk $(which npx) @modelcontextprotocol/server-filesystem

# Then connect with Chrome DevTools at chrome://inspect
```

### 3. Environment Diagnostics Script
```bash
cat > /workspaces/madanzo/scripts/mcp-diagnostics.sh << 'EOF'
#!/bin/bash
echo "=== MCP Environment Diagnostics ==="
echo "Date: $(date)"
echo "User: $(whoami)"
echo "Home: $HOME"
echo "PWD: $(pwd)"
echo "PATH: $PATH"
echo ""
echo "=== Node.js Environment ==="
echo "Node: $(node --version 2>/dev/null || echo 'Not found')"
echo "NPM: $(npm --version 2>/dev/null || echo 'Not found')"
echo "NPX: $(npx --version 2>/dev/null || echo 'Not found')"
echo ""
echo "=== Which Commands ==="
echo "which node: $(which node 2>/dev/null || echo 'Not found')"
echo "which npm: $(which npm 2>/dev/null || echo 'Not found')"
echo "which npx: $(which npx 2>/dev/null || echo 'Not found')"
echo ""
echo "=== Docker Environment ==="
echo "Docker: $(docker --version 2>/dev/null || echo 'Not found')"
echo "Docker images: $(docker images | grep -c mcp)"
echo ""
echo "=== Claude Directories ==="
ls -la ~/.config/Claude/ 2>/dev/null || echo "~/.config/Claude/ not found"
ls -la ~/.local/share/Claude/ 2>/dev/null || echo "~/.local/share/Claude/ not found"
EOF

chmod +x /workspaces/madanzo/scripts/mcp-diagnostics.sh
```

## Best Practices

### 1. Logging Strategy
- Log to stderr, not stdout
- Include timestamps
- Use structured logging
- Sanitize sensitive data

### 2. Error Handling
```javascript
// Example error handling in MCP server
server.onerror = (error) => {
  console.error(`[${new Date().toISOString()}] MCP Error:`, {
    message: error.message,
    stack: error.stack,
    type: error.constructor.name
  });
};
```

### 3. Configuration Testing
```bash
# Validate JSON configuration
jq . ~/.config/Claude/claude_desktop_config.json

# Test configuration parsing
node -e "console.log(JSON.parse(require('fs').readFileSync(process.argv[1], 'utf8')))" ~/.config/Claude/claude_desktop_config.json
```

## Getting Help

### Information to Provide
When seeking help, include:

1. **Environment Details**
   ```bash
   /workspaces/madanzo/scripts/mcp-diagnostics.sh > diagnostics.txt
   ```

2. **Configuration File**
   ```bash
   cat ~/.config/Claude/claude_desktop_config.json
   ```

3. **Error Logs**
   ```bash
   tail -n 100 ~/.config/Claude/logs/mcp*.log > error-logs.txt
   ```

4. **Steps to Reproduce**
   - Exact configuration used
   - Commands run
   - Expected vs actual behavior

### Support Channels
- GitHub Issues: For bugs
- GitHub Discussions: For questions
- MCP Discord: For real-time help

## Quick Reference Card

```bash
# Test basic connectivity
echo "test" | npx @modelcontextprotocol/server-filesystem

# Check if server starts
timeout 5 npx -y @smithery/cli@latest run @wonderwhy-er/desktop-commander --key YOUR_KEY

# Find Claude config
find ~ -name "claude_desktop_config.json" 2>/dev/null

# Monitor all Claude logs
find ~ -name "*.log" -path "*/Claude/*" -exec tail -F {} \;

# Test with full environment
env PATH="/home/codespace/nvm/current/bin:$PATH" npx @modelcontextprotocol/server-filesystem
```

Remember: In Codespaces, always use absolute paths and explicitly set environment variables!