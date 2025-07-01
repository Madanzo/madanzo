# Desktop Commander MCP Server Setup Guide

## Overview
Desktop Commander is an MCP server that provides desktop control capabilities through Claude Desktop.

## Installation Status
- ✅ Node.js v20.19.0
- ✅ npm v10.8.2
- ✅ npx available at `/home/codespace/nvm/current/bin/npx`
- ✅ @wonderwhy-er/desktop-commander@0.2.3 installed globally

## Configuration for Claude Desktop

### Option 1: Using npx (Recommended)
```json
{
  "desktop-commander": {
    "command": "npx",
    "args": [
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

### Option 2: Using full paths
```json
{
  "desktop-commander": {
    "command": "/home/codespace/nvm/current/bin/npx",
    "args": [
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

### Option 3: Direct execution (if installed globally)
```json
{
  "desktop-commander": {
    "command": "desktop-commander",
    "args": [
      "--key",
      "772180de-b91e-4b7e-a65c-5f38caa2c06f"
    ]
  }
}
```

## Testing the Setup

1. **Manual test command:**
   ```bash
   npx -y @smithery/cli@latest run @wonderwhy-er/desktop-commander --key 772180de-b91e-4b7e-a65c-5f38caa2c06f
   ```

2. **Check if the server starts:**
   The server should output MCP protocol messages when started correctly.

## Troubleshooting

### If the server fails to start:

1. **Check environment variables:**
   ```bash
   echo $PATH
   which node
   which npx
   ```

2. **Try with verbose output:**
   Add `--verbose` to the args array for more detailed logs.

3. **Check Claude Desktop logs:**
   - On macOS: `~/Library/Logs/Claude/`
   - On Windows: `%APPDATA%\Claude\logs\`
   - On Linux: `~/.config/Claude/logs/`

4. **Common issues:**
   - PATH not accessible to Claude Desktop
   - Permissions issues
   - Network connectivity (for downloading packages)

## Alternative Simple Test

To verify Claude Desktop can execute commands, try this minimal config:
```json
{
  "test-node": {
    "command": "node",
    "args": ["--version"]
  }
}
```

This should output the Node.js version in Claude Desktop's MCP logs.