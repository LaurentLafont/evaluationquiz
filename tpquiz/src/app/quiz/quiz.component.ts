import { Component, OnInit } from '@angular/core';
import { Question } from 'src/Question';
import { QuizService } from '../quiz.service';
import { timer } from 'rxjs';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  questions: Question[];
  iQuestion = 0;
  currentQuestion: Question;
  answer: String;
  found: boolean;
  hasNext = true;



  constructor(private quizService: QuizService){}

  ngOnInit() {

  }

  newGame() {

    this.quizService.buildNewQuiz(10).subscribe(

    (questions: Question[]) => {

      this.questions = questions;

      this.loadNextQuestion();

    },

    error => console.log(error));
  }

  loadNextQuestion() {
    this.currentQuestion= this.questions[this.iQuestion]
    this.iQuestion++
    this.hasNext=(this.iQuestion<this.questions.length)
  } 

  timeSpent() {
    

  } 

  answerGiven(answer: string) {

  } 

  showAnswer() {

  } 
}
