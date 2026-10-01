"use strict";
const questions = [
    {
        'ques' : 'Which of the following is a markup language ?',
        'a' : 'HTML',
        'b' : 'CSS',
        'c' : 'Javascript',
        'd' : 'C++',
        'correctans' : 'a'
    },
    {
        'ques' : 'Which CSS property is used to change the text color of an element ?',
        'a' : 'font-color',
        'b' : 'color',
        'c' : 'text-style',
        'd' : 'foreground',
        'correctans' : 'b'
    },
    {
        'ques' : 'Which keyword declares a block-scoped variable in JavaScript ?',
        'a' : 'var',
        'b' : 'let',
        'c' : 'int',
        'd' : 'define',
        'correctans' : 'b'
    },
    {
        'ques' : 'What does the typeof operator return for null in JavaScript ?',
        'a' : 'null',
        'b' : 'undefined',
        'c' : 'object',
        'd' : 'number',
        'correctans' : 'c'
    },
    {
        'ques' : 'Which method adds an element to the end of an array in JavaScript ?',
        'a' : 'push()',
        'b' : 'pop()',
        'c' : 'shift()',
        'd' : 'unshift()',
        'correctans' : 'a'
    },
    {
        'ques' : 'What does DOM stand for ?',
        'a' : 'Data Object Model',
        'b' : 'Document Object Model',
        'c' : 'Digital Output Mode',
        'd' : 'Document Order Method',
        'correctans' : 'b'
    },
    {
        'ques' : 'Which HTML tag is used to create a hyperlink ?',
        'a' : '<link>',
        'b' : '<href>',
        'c' : '<a>',
        'd' : '<url>',
        'correctans' : 'c'
    },
    {
        'ques' : 'Which of these is NOT a JavaScript data type ?',
        'a' : 'String',
        'b' : 'Boolean',
        'c' : 'Float',
        'd' : 'Symbol',
        'correctans' : 'c'
    },
    {
        'ques' : 'What is the time complexity of binary search on a sorted array ?',
        'a' : 'O(n)',
        'b' : 'O(log n)',
        'c' : 'O(n log n)',
        'd' : 'O(1)',
        'correctans' : 'b'
    },
    {
        'ques' : 'Which data structure follows the LIFO principle ?',
        'a' : 'Queue',
        'b' : 'Stack',
        'c' : 'Linked List',
        'd' : 'Tree',
        'correctans' : 'b'
    },
    {
        'ques' : 'Which HTTP method is typically used to send data to create a new resource ?',
        'a' : 'GET',
        'b' : 'DELETE',
        'c' : 'POST',
        'd' : 'HEAD',
        'correctans' : 'c'
    },
    {
        'ques' : 'Which SQL command is used to retrieve data from a table ?',
        'a' : 'SELECT',
        'b' : 'INSERT',
        'c' : 'UPDATE',
        'd' : 'FETCH',
        'correctans' : 'a'
    }
]

const quesBox = document.getElementById('quesBox');
const submitBtn = document.getElementById('submitBtn');
const box = document.getElementById('box');
const radios = document.querySelectorAll('input[name="option"]');

let index = 0;
let score = 0;

    const loadQuestion = () => {
    const data = questions[index];
    quesBox.innerText=`${index+1} ${data.ques}`;
    ['a','b','c','d'].forEach((key)=>{
        document.getElementById(`label-${key}`).innerText= data[key];
    })

    // clear previous selected answer of that particular question
    radios.forEach((radio) => (radio.checked = false));
};

    const getSelected = ()=>{
        const checked = document.querySelector('input[name="option"]:checked');
        return checked ? checked.value : null;
    }

    const showResult = ()=>{
        box.innerHTML = `
        <h2>Quiz finished </h2>
        <p style="margin 2rem 0; font-size : 20px; ">
        Your score : ${score}/${questions.length}
        </p>
        <button class="btn" onclick="location.reload()">Restart</button>
        `;
    };

    submitBtn.addEventListener('click',()=>{
        const answer = getSelected();
        if(answer==null) {
            alert('Please select an option first !! ');
            return;
        }
        if(answer==questions[index].correctans) {
            score++;
        }
        index++;
        if(index==questions.length) {
            showResult();
        }
        else {
            loadQuestion();
        }
    })

    loadQuestion();






