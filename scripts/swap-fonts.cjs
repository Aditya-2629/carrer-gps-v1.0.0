const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'App.jsx');
let content = fs.readFileSync(filePath, 'utf8');

content = content.split("font-['Syne']").join("font-['Barlow_Semi_Condensed']");
content = content.split("font-['Plus_Jakarta_Sans']").join('font-sans');

fs.writeFileSync(filePath, content, 'utf8');
console.log('Done. Barlow hits:', (content.match(/Barlow_Semi_Condensed/g) || []).length);
