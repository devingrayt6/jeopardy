export default class Question {
    constructor(data) {
        this.id = data.id;
        this.question = data.question;
        this.answer = data.answer;
        this.value = data.value;
        this.category = data.category;
    }

    get Template() {
        return `
            <div>
                <p>${this.id}</p>
                <p>${this.question}</p>
                <p>${this.answer}</p>
                <p>${this.value}</p>
                <p>${this.category.title}</p>
            </div>
        `
    }
}