const fs = require('fs');
const { execSync } = require('child_process');

// Get the repository name from the Git remote URL
const repoName = execSync('basename -s .git `git config --get remote.origin.url`').toString().trim();

// Read the current package.json
const packageJsonPath = './package.json';
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

// Update the "name" field
packageJson.name = repoName;

// Write the updated package.json back to the file
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2), 'utf8');

console.log(`Updated package name to "${repoName}" in package.json.`);