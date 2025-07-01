# Docker MCP Troubleshooting Guide

## Issue: Docker Image Pulling Timeouts

### Problem Description
The MCP Docker service fails to start because it times out while pulling Docker images. The default timeout of 1 minute is insufficient for pulling multiple large Docker images.

### Symptoms
- MCP server initializes successfully
- Image pulling begins for multiple Docker images
- After 1 minute, connection times out with "Request timed out" and "context canceled"
- Claude Desktop shows disconnection error

### Required Docker Images
The MCP Docker service requires these images:
- `mcp/fetch`
- `mcp/github-mcp-server`
- `mcp/google-maps`
- `mcp/puppeteer`
- `docker@sha256:d33eb93fe02683e984e6f8a93c0b3d85bb74f56ec83922bc39fb34ba23ab42bc`

## Solutions

### Solution 1: Pre-pull Images Using Script (Recommended)

We've created an automated script to handle this:

```bash
# Navigate to the scripts directory
cd /workspaces/madanzo/scripts

# Run the pre-pull script
./docker-mcp-pull.sh
```

The script will:
- Pull all required MCP Docker images
- Retry failed pulls up to 3 times
- Show progress for each image
- Provide a summary of successful/failed pulls

### Solution 2: Manual Image Pulling

If you prefer to pull images manually:

```bash
# Pull each image individually
docker pull mcp/fetch
docker pull mcp/github-mcp-server
docker pull mcp/google-maps
docker pull mcp/puppeteer
docker pull docker@sha256:d33eb93fe02683e984e6f8a93c0b3d85bb74f56ec83922bc39fb34ba23ab42bc
```

### Solution 3: Check Network Configuration

1. **Test Docker connectivity:**
   ```bash
   docker pull hello-world
   ```

2. **Check Docker Hub status:**
   - Visit https://status.docker.com/

3. **Corporate Network Issues:**
   - Check if you're behind a corporate firewall
   - Configure Docker proxy settings if needed:
     ```bash
     # In Docker Desktop: Settings > Resources > Proxies
     ```

### Solution 4: Reduce Concurrent Image Pulls

Temporarily disable some MCP services in your Claude Desktop configuration:

1. Open Claude Desktop settings
2. Navigate to MCP configuration
3. Comment out or remove some Docker-based services
4. Start with essential services only
5. Add services back one by one

### Solution 5: Increase Docker Resources

1. Open Docker Desktop
2. Go to Settings > Resources
3. Increase:
   - CPU limit
   - Memory limit
   - Disk image size

## Verification

After pulling images, verify they're available:

```bash
# List Docker images
docker images | grep mcp

# Check specific image
docker inspect mcp/fetch
```

## Prevention

1. **Keep images updated:** Regularly pull latest versions
2. **Use the pre-pull script:** Run before starting Claude Desktop
3. **Monitor disk space:** Docker images can consume significant space

## Troubleshooting Commands

```bash
# Check Docker daemon status
docker info

# View Docker logs
docker logs -f

# Clean up unused images (if disk space is an issue)
docker image prune -a

# Reset Docker to factory defaults (last resort)
# Docker Desktop > Settings > Reset > Reset to factory defaults
```

## Additional Resources

- [Docker Documentation](https://docs.docker.com/)
- [MCP Documentation](https://github.com/modelcontextprotocol)
- [Claude Desktop MCP Guide](https://docs.anthropic.com/claude/docs/mcp)