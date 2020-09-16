const fs = require('fs');

class Model {
  constructor(filename, array = []) {
    this.filename = filename;
    this.array = array;
  }

  parseFile() {
    const parse = fs.readFileSync(this.filename, "utf-8");
    const array = parse.split("\n");
    for (let i = 2; i < array.length; i += 2) {
      array.splice(i, 1);
    }
    this.array = array;
    return array;
  }

  isAnswerTrue(question, answer) {
    for (let i = 0; i < array.length; i += 2) {
      if (answer.toLowerCase() === this.array[i + 1].toLowerCase()) {
        return true;
      }
    } return false;
  }
}

module.exports = { Model };
