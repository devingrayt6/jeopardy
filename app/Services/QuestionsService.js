import store from "../store.js";
import Question from "../Models/Question.js";

const _api = axios.create({
    baseURL: 'http://jservice.io/api/', 
    timeout: 15000
})


class QuestionsService {
    getQuestions(){
        _api
            .get('random')
            .then(res => {
                let questions = res.data.map(q => new Question(q));
                store.commit("questions", questions)
                console.log(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    }
}

const service = new QuestionsService();
export default service;
