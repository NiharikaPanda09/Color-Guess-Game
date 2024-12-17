

function generateRandomColor(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`
}
let ran = document.querySelectorAll(".color-block");
let generateRandom = Math.floor(Math.random() * ran.length);
let status = document.getElementById("status");


let rgb = document.getElementById("rgb-color");
let randomColor = generateRandomColor();
rgb.textContent = randomColor

function setupGame() {
    ran.forEach((block, index) => {
        if (index === generateRandom) {
            block.style.backgroundColor = randomColor;
        } else {
            block.style.backgroundColor = generateRandomColor();
        }

        block.onclick = () => {
            const blockColor = window.getComputedStyle(block).backgroundColor;

            if (blockColor === randomColor) {
              status.textContent =  'Correct!';

                ran.forEach((a) =>
                    (a.style.backgroundColor = randomColor))
            } else {
                status.textContent = "Try Again!";
               block.style.display = "none";
            }
        }
    });
}
setupGame()

let restartBtn = document.getElementById('restart');

restartBtn.addEventListener("click",() =>{
     randomColor = generateRandomColor();
     rgb.textContent = randomColor;
     status.textContent = "Start Guessing!";
    generateRandom = Math.floor(Math.random() * ran.length);

    ran.forEach((block,index)=>{
        block.style.display = "inline-block";
        block.style.padding = "20px";
        block.style.borderRadius = '5px';
        block.style.margin = '10px';
        block.style.cursor = 'pointer';
        if (index === generateRandom) {
            block.style.backgroundColor = randomColor;
        } else {
            block.style.backgroundColor = generateRandomColor();
        }
    })
})

