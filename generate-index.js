const fs = require('fs');
const path = require('path');

const generateIndexFile = (dir, extension) => {
  const files = fs.readdirSync(dir).filter(file => file !== `index.${extension}` && file.endsWith(`.${extension}`));
  const imports = files.map(file => {
    if (extension === 'css') {
      return `@import './${file}';`;
    } else if (extension === 'js') {
      return `import './${file}';`;
    }
  }).join('\n');
  
  fs.writeFileSync(path.join(dir, `index.${extension}`), imports);
};

generateIndexFile(path.join(__dirname, 'src', 'js'), 'js');
generateIndexFile(path.join(__dirname, 'src', 'css'), 'css');
