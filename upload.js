var fs = require('fs');
fs.appendFile('.gitignore', '', function (err)
{
if (err) throw err;
console.log('Updated!');
});
