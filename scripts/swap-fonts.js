const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'App.jsx');
let content = fs.readFileSync(filePath, 'utf8');

// Replace font class references
content = content.split("font-['Syne']").join("font-['Barlow_Semi_Condensed']");
content = content.split("font-['Plus_Jakarta_Sans']").join('font-sans');

fs.writeFileSync(filePath, content, 'utf8');
console.log('Font references updated successfully.');
console.log('Occurrences of Barlow_Semi_Condensed:', (content.match(/Barlow_Semi_Condensed/g) || []).length);
console.log('Occurrences of font-sans (body):', (content.match(/font-sans/g) || []).length);
