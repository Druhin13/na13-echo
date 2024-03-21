const fs = require('fs');
const path = require('path');

// Function to extract the repository name from package.json
function getRepoName() {
  const packageJsonPath = path.join(__dirname, 'package.json');
  try {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    return packageJson.name;
  } catch (error) {
    console.error('Error reading package.json:', error.message);
    return 'your-default-repo-name';
  }
}

// List JavaScript and CSS files in src/js and src/css (excluding index.js and index.css)
const jsFiles = fs.readdirSync('src/js').filter(file => file.endsWith('.js') && file !== 'index.js');
const cssFiles = fs.readdirSync('src/css').filter(file => file.endsWith('.css') && file !== 'index.css');

// Generate script and link tags for src/js and src/css
const scriptTags = jsFiles.map(file => `\`\`\`
<script src="https://${getRepoName()}.vercel.app/src/js/${file}"></script>
\`\`\``);
const linkTags = cssFiles.map(file => `\`\`\`
<link rel="stylesheet" href="https://${getRepoName()}.vercel.app/dist/${file.replace('.css', '.js')}">
\`\`\``);

// Generate script and link tags for dist/index.js and dist/index.css
const distScriptTag = `\`\`\`
<script src="https://${getRepoName()}.vercel.app/dist/index.js"></script>
\`\`\``;
const distLinkTag = `\`\`\`
<link rel="stylesheet" href="https://${getRepoName()}.vercel.app/dist/index.css">
\`\`\``;

// Combine all tags and organize them by section
const allTags = [
  '## All embed links',
  ...scriptTags,
  ...linkTags,
  '',
  '## Bundled embeds',
  distScriptTag,
  distLinkTag,
].join('\n\n');

// Update the README file with the generated tags
const readmePath = 'README.md';
const updatedReadme = `\n${allTags}\n`;
fs.writeFileSync(readmePath, updatedReadme);

console.log('README file updated with script and link tags.');
