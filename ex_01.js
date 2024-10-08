const square =  document.getElementById('square');

function reduceOpacity() {
    const currentOpacity = parseFloat(getComputedStyle(square).opacity);
    square.style.opacity = currentOpacity * 0.5;
                         }
                         
function resetOpacity() {
    square.style.opacity = 1;
}
square.addEventListener('mouseover', reduceOpacity)
square.addEventListener('mouseout', resetOpacity)
