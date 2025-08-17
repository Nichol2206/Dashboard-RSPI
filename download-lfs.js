// download-lfs.js
const { execSync } = require("child_process");

// daftar file besar yang perlu diunduh (edit kalau perlu)
const files = [
  "maps/data/PETARSPIDESA_4.js",
  "maps/data/PETARSPIKECAMATAN_3.js",
  "maps/data/PETARSPIKABUPATEN_2.js",
  "maps/data/PETAKEMISKINANKABUPATEN_1.js"
];

// info repo kamu
const owner = "Nichol2206";
const repo  = "Dashboard-RSPI";
const sha   = "5163579"; // ← pakai SHA yang kamu kirim

for (const p of files) {
  const url = `https://media.githubusercontent.com/media/${owner}/${repo}/${sha}/${p}`;
  console.log("Downloading", p);
  const dir = p.substring(0, p.lastIndexOf("/"));
  execSync(`mkdir -p "${dir}" && curl -L -o "${p}" "${url}"`, { stdio: "inherit" });
}
console.log("Done.");
