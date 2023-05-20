import Typed from 'typed.js';

export default function initTyped() {
    const typed = new Typed('#job_typed', {
        strings: ['Computer Engineering Student', 'Web Developer', 'Software Developer', 'Programmer', 'Problem Solver', 'Learner'],
        typeSpeed: 50,
        showCursor: false,
        loop: true,
        typeSpeed: 20,
        backSpeed: 20,
        startDelay: 1000,
        backDelay: 2000,
    });
}