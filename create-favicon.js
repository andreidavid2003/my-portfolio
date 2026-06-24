const fs = require("fs");
const path = require("path");

// Create a simple SVG with a black circle and convert to PNG using Node
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192">
  <rect width="192" height="192" fill="white"/>
  <circle cx="96" cy="96" r="76" fill="black"/>
</svg>`;

const publicDir = path.join(__dirname, "public");
const faviconPath = path.join(publicDir, "favicon.svg");

fs.writeFileSync(faviconPath, svgContent);
console.log("Favicon SVG created at", faviconPath);

// Also create PNG version
const sharp = require("sharp");

sharp(Buffer.from(svgContent))
  .png()
  .toFile(path.join(publicDir, "favicon.png"))
  .then(() => {
    console.log("Favicon PNG created");
  })
  .catch((err) => {
    console.log(
      "Note: PNG creation skipped (sharp not available, SVG will be used)",
      err.message,
    );
  });
