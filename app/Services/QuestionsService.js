import store from "../store.js";

const _api = axios.create({
    baseURL: 'http://jservice.io/api/', 
    timeout: 15000
})


class QuestionsService {


    getQuestions(){
        _api
            .get('random')
            .then(res => {
                console.log(res);
            })
            .catch(error => {
                console.log(error)
            })
    }
}

const service = new QuestionsService();
export default service;
