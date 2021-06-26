const { promisify } = require("util");
const fs = require("fs");
const convert = require("heic-convert");

(async () => {
  const dir = "./heic/";
  const dirArray = await promisify(fs.readdir)(dir);

  for (let i of dirArray) {
    const inputBuffer = await promisify(fs.readFile)(`${dir}${i}`);
    const outputBuffer = await convert({
      buffer: inputBuffer,
      format: "JPEG",
      quality: 1
    });

    const fileName = i.split(".")[0];

    await promisify(fs.writeFile)(`./jpg/${fileName}.jpg`, outputBuffer);
  }

})();