const { promisify } = require("util");
const fs = require("fs");
const convert = require("heic-convert");

(async (name) => {
  const inputBuffer = await promisify(fs.readFile)(`./heic/${name}.HEIC`);
  const outputBuffer = await convert({
    buffer: inputBuffer,
    format: "JPEG",
    quality: 1
  });

  await promisify(fs.writeFile)(`./jpg/${name}.jpg`, outputBuffer);
})("tulips");