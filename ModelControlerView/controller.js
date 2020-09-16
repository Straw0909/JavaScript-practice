const { View } = require("./view.js");
const { Model } = require("./model.js");
const readlineSync = require("readline-sync");

class Controller{
  constructor(filename) {
    this.filename = filename;
    this.view = new View();
    this.model = new Model();
    this.table = [
      { topic: 'Nighthawk' },
      { topic: 'Racoon' },
      { topic: 'Otter' },
    ];
    this.filenames = [
      './nighthawk_flashcard_data.txt',
      './raccoon_flashcard_data.txt',
      './otter_flashcard_data.txt'
    ];
    this.true = 0;
    this.false = 0;
  }

  startGame() {
    console.table(this.table);
    const input = Number(readlineSync.question("Please, choose topic number: "));
    this.filename = this.filenames[input];
    this.model = new Model(this.filename);
    this.start();
  }

  start() {
    this.true = 0;
    this.false = 0;
    const array = this.model.parseFile();
    for (let i = 0; i < array.length; i+=2) {
      const answer = this.view.printQuestion(array[i]);
      this.view.printAnswer(this.model.isAnswerTrue(array[i], answer));
      if (this.model.isAnswerTrue(array[i], answer)) {
        this.true += 1;
      } else {
        this.false += 1;
      }
    }
  }
}

module.exports = { Controller };
