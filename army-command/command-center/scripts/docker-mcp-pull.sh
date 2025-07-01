#!/bin/bash

# Docker MCP Image Pre-pull Script
# This script pulls all required MCP Docker images to prevent timeout issues

echo "🐳 Docker MCP Image Pre-pull Script"
echo "===================================="
echo "This script will pull all required MCP Docker images."
echo "This may take several minutes depending on your internet connection."
echo ""

# Array of images to pull
IMAGES=(
    "mcp/fetch"
    "mcp/github-mcp-server"
    "mcp/google-maps"
    "mcp/puppeteer"
    "docker@sha256:d33eb93fe02683e984e6f8a93c0b3d85bb74f56ec83922bc39fb34ba23ab42bc"
)

# Counter for progress
TOTAL=${#IMAGES[@]}
CURRENT=0

# Function to pull image with retry
pull_image() {
    local image=$1
    local max_retries=3
    local retry_count=0
    
    while [ $retry_count -lt $max_retries ]; do
        echo "Pulling $image (Attempt $((retry_count + 1))/$max_retries)..."
        
        if docker pull "$image"; then
            echo "✅ Successfully pulled: $image"
            return 0
        else
            retry_count=$((retry_count + 1))
            if [ $retry_count -lt $max_retries ]; then
                echo "⚠️  Failed to pull $image. Retrying in 5 seconds..."
                sleep 5
            fi
        fi
    done
    
    echo "❌ Failed to pull $image after $max_retries attempts"
    return 1
}

# Pull each image
FAILED_IMAGES=()

for image in "${IMAGES[@]}"; do
    CURRENT=$((CURRENT + 1))
    echo ""
    echo "[$CURRENT/$TOTAL] Processing: $image"
    echo "----------------------------------------"
    
    if ! pull_image "$image"; then
        FAILED_IMAGES+=("$image")
    fi
done

# Summary
echo ""
echo "===================================="
echo "Summary:"
echo "===================================="
echo "Total images: $TOTAL"
echo "Successfully pulled: $((TOTAL - ${#FAILED_IMAGES[@]}))"
echo "Failed: ${#FAILED_IMAGES[@]}"

if [ ${#FAILED_IMAGES[@]} -gt 0 ]; then
    echo ""
    echo "Failed images:"
    for failed in "${FAILED_IMAGES[@]}"; do
        echo "  - $failed"
    done
    echo ""
    echo "You can retry pulling failed images manually with:"
    echo "  docker pull <image-name>"
    exit 1
else
    echo ""
    echo "✅ All images pulled successfully!"
    echo "You can now start Claude Desktop and the MCP Docker service should work."
fi