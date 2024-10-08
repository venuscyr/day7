let clickEyeCount = 0;

function robotClick()
{
    const speechBubble = document.getElementById('speech-bubble');
    speechBubble.textContent = "Ooch, that hurts!";

    setTimeout(() =>
    {
        speechBubble.textContent = "Hello !";
    }, 2000);
}

function display(event)
{
    const displayScreen = document.getElementById("screen-text");
    const x = event.clientX;
    const y = event.clientY;
    displayScreen.textContent = "X: " + x + ", Y: " + y;
}

function messageInput()
{
    const screenText = document.getElementById("screen-text");
    screenText.textContent = "Don’t worry, I’ll take care of it!";
    setTimeout(() =>
    {
        screenText.textContent = "Bip bip bip !";
    }, 2000);
}

function eyeClick()
{
    clickEyeCount += 1;
    if(clickEyeCount >= 10)
    {
        const left = document.querySelector(".eye-left-iris");
        const right = document.querySelector(".eye-right-iris");

        left.style.fill = randomColor();
        right.style.fill = randomColor();

        clickEyeCount = 0;
    }
}

function randomColor()
{
    const letters = "123456789ABCDEF";
    let color = "#";
    for(let i = 0; i < 6; i++)
    {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

document.getElementById("robot").addEventListener("click", robotClick);
document.getElementById("robot").addEventListener("mousemove", display);
document.getElementById("robot-input").addEventListener("input", messageInput);

document.querySelectorAll(".eye-left-iris, .eye-right-iris").forEach(eye =>
{
    eye.addEventListener("click", eyeClick);
});
