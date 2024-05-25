var current_question = 0;

function load_question(id) {
    console.log('Load Question', id);
    var title = document.getElementById('title');
    title.innerHTML = questions_bank[id].title;

    var question = document.getElementById('question-text');
    question.innerHTML = questions_bank[id].question;

    const options = questions_bank[id].options;
    for (let i = 1; i <= options.length; i++) {
        var o = document.getElementById('answerOption' + i);
        o.innerHTML = options[i - 1].text;
        if (options[i - 1].text == '') {
            o.style.visibility = 'hidden';
        } else {
            o.style.visibility = 'block';
        }
    }

    reset_options();
}

function setup_answers_buttons() {
    const answerButtons = document.querySelectorAll('.btn-group button');

    answerButtons.forEach(button => {
        button.addEventListener('click', () => {
            answerButtons.forEach(otherButton => otherButton.classList.remove('active'));
            button.classList.add('active');
        });
    });
}

function submit_answer() {
    current_question++;

    load_question(current_question);
}

function reset_options() {
    const answerButtons = document.querySelectorAll('.btn-group button');

    answerButtons.forEach(button => {
        button.classList.remove('active')
    });
}