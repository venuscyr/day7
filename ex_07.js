const title = document.querySelector('h1');
let words = ["LET'S", "HAVE", "SOME", "FUN","!"];
let intervalId;
let isFrozen = false;
function shuffleWords() {
    if (!isFrozen) {
        words = words.sort(() => Math.random() - 0.5);
        title.textContent = words.join(' ');}}
function start() {
    intervalId = setInterval(shuffleWords, 2000);}
function stop() {
    clearInterval(intervalId);}
title.addEventListener('mouseenter', () => {
    isFrozen = true;});
title.addEventListener('mouseleave', () => {
    isFrozen = false;});
title.addEventListener('click', () => {
    stop();
    navigator.clipboard.writeText(title.textContent).then(() => {
        console.log('Text copied to clipboard');});});
document.addEventListener('click', (event) => {
    if (!title.contains(event.target)) {
        debut();}});
document.addEventListener('keydown', (event) => {
    if (event.key === '!') {
        setTimeout(() => {
            alert('42!');
        }, 42000);}});
start();
