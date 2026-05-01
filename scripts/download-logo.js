import fs from 'fs';
import https from 'https';

const url = "https://raw.githubusercontent.com/BrunoBassir/Nubo-Landing-V.3/main/public/Logo%20Nubo%20Blanco%20Sin%20Fondo.png";
const dest = "./public/logo-nubo-blanco.png";

https.get(url, (res) => {
  const file = fs.createWriteStream(dest);
  res.pipe(file);
  file.on('finish', () => {
    file.close();
    console.log("Download complete.");
  });
}).on('error', (err) => {
  fs.unlink(dest, () => {});
  console.error("Error downloading file: ", err.message);
});
