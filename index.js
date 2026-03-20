let squares = window.prompt("Input a square number");
const sqrtOfSquares = Math.sqrt(squares)

function createDivGrid() {

    const gridContainer = document.querySelector("#gridContainer")
    
    for (let i = 0; i < sqrtOfSquares; i++) {
        const gridDiv = document.createElement("div");
        gridDiv.classList.add('gridDiv')
        gridContainer.appendChild(gridDiv)
    
        for (let j = 0; j < sqrtOfSquares; j++) {
            const cellDiv = document.createElement("div");
            cellDiv.classList.add('cellDiv')
            cellDiv.addEventListener("mouseenter", () => {
                cellDiv.classList.add('cellDivHover')
            })
            cellDiv.addEventListener("mouseleave", () =>{
                setTimeout(() => {cellDiv.classList.remove('cellDivHover')}, 2000)
            })

            
            gridDiv.appendChild(cellDiv)
        }
     }
}

function renderDivGrid() {
    if (sqrtOfSquares % 1 > 0) {
        alert("Input needs to be square number")
    }

    createDivGrid()
}

renderDivGrid()