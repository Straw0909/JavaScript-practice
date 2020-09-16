const fs = require('fs');

async function run() {

  const readDir = () => new Promise((resolve, reject) => {
    fs.readdir('./newfiles/', (err, files) => {
      if (err) {
        console.log(err);
        reject();
      }
      resolve(files);
    });
  });

  const readStat = (filename) => new Promise((resolve, reject) => {
    fs.stat(`./newfiles/${filename}`, (err, stat) => {
      if (err) {
        console.log(err);
        reject();
      }
      resolve(stat);
    });
  });

  const fileRename = (filename, newName) => new Promise((resolve, reject) => {
    fs.rename(`./newfiles/${filename}`, `./notes/${newName}`, (err, stat) => {
      if (err) {
        console.log(err);
        reject();
      }
      resolve(stat);
    });
  });

  readDir()
    .then((files) => files.map((el) => readStat(el)
      .then((stat) => {
        const randomStr = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
        const newName = `${randomStr}-${stat.size}-${stat.ctime}`;
        fileRename(el, newName);
      })));

  const files = await readDir();

  files.map((el) => {
    const stat = await readStat(el);
    const randomStr = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
    const newName = `${randomStr}-${stat.size}-${stat.ctime}`;
    await fileRename(el, newName);
  });
}

run();
