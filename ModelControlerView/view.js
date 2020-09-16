const readlineSync = require("readline-sync");
const cowsay = require("cowsay");

class View {
  printHello() {	  
    console.clear(); 
    console.log('Hello! Let`s start!');
  }
  printQuestion(question) {
    const askQuestion = readlineSync.question(`\n${question}\n`);
    return askQuestion;
  }
  printAnswer(answer) {
    getAnswer ? console.log(`Congratulation!!! Your answer is correct.\n`) :
      console.log('Sorry, your answer is wrong.\n');
    }
  
  printResult(tr, fls) {
    console.log(`--------------------------\nTotal question: ${this.controller.true + this.controller.false}`);
    console.log(`You answered correctly to ${this.controller.printResult}`);
    let fork = (!this.controller.false) ? 'Wooooooooow!' : 'Lets try again';
    console.log(cowsay.say({
      text: fork,	      
      e: "oO",	      
      T: "U "	      
    }));	    
  }
}

module.exports = { View };
