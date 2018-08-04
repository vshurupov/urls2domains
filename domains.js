const fs   = require('fs');
const path = require('path');
const filename = process.argv[2];

switch (fs.existsSync(filename)) {
  case false:
    console.log (`Can't find file :(`);
    break;

  default:
    let contents = fs.readFileSync(filename, 'utf8');
    let domains = contents.replace(/(?:https?:\/\/)(.*?)(?:\/.+|:.+|\/|$)/gm, '$1');
    fs.writeFile(`${filename}_domains.txt`, domains, function (err) {
    if (err) throw err;
    console.log(`Saved to ${filename}_domains.txt`);
  });
}

switch(filename) {
  case undefined:
    console.log(`Usage: node ${path.basename(__filename)} [inputFile]`);
    break;
}