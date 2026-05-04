const https = require('https');
const fs = require('fs');

const url = 'https://drive.google.com/uc?export=download&id=1qb43lAVFUEXWpojJ6CgdYu3SE0BWhvic';
const dest = './public/logo.png';

https.get(url, (res) => {
  if ([301, 302, 303, 307, 308].includes(res.statusCode)) {
    https.get(res.headers.location, (res2) => {
      const file = fs.createWriteStream(dest);
      res2.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log('Downloaded redirected');
      });
    });
  } else {
    const file = fs.createWriteStream(dest);
    res.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log('Downloaded direct');
    });
  }
}).on('error', (err) => {
  console.error(err);
});
