import QuestionsService from "../Services/QuestionsService.js";
import store from "../store.js";

//Private
function _draw() {
  let questions = store.State.questions;
  let template = '';
  questions.forEach(q => {
    template += q.Template;
  })
  document.getElementById('questions-view').innerHTML = template;
  console.log(questions);
}

//Public
export default class QuestionsController {
  constructor() {
    store.subscribe("questions", _draw);
  }

  getQuestions(){
    QuestionsService.getQuestions();
  }
}
