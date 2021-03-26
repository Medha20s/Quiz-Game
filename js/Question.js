
  
class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Your Name");
    this.input2 = createInput("Enter Your Option No..");
    this.button = createButton('Confirmed & Submit');
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
  }

  display(){
    this.title.html("Quiz Game");
    this.title.position(350, 0);

    this.question.html("Question:- What always grows more but never grows less ? " );
    this.question.position(200, 55);
    this.option1.html("1: Weight " );
    this.option1.position(200, 100);
    this.option2.html("2: Height" );
    this.option2.position(200, 120);
    this.option3.html("3: Area " );
    this.option3.position(200, 140);
    this.option4.html("4: Laughter" );
    this.option4.position(200, 160);

    this.input1.position(150, 230);
    this.input2.position(350, 230);
    this.button.position(290, 300);

    this.button.mousePressed(()=>{
      this.title.hide();
      this.input1.hide();
      this.input2.hide();
      this.button.hide();
      contestant.name = this.input1.value();
      contestant.answer = this.input2.value();
      contestantCount+=1;
      contestant.index = contestantCount;
      contestant.update();
      contestant.updateCount(contestantCount);
    });
  }
}