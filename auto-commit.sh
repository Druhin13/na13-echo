#!/bin/bash

# Perform an automated commit
git add -A
git commit -m "Automated build and bundling"  # Commit with a fixed message
git push origin main

# Get the repository name from the remote URL
repo_name=$(git config --get remote.origin.url | sed 's/.*\///;s/.git$//')

# Print the script and link tags
echo "<script src=\"https://${repo_name}.vercel.app/dist/index.js\"></script>"
echo "<link rel=\"stylesheet\" href=\"https://${repo_name}.vercel.app/dist/index.css\"></link>"