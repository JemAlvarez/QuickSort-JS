let values = []
// Array.from({length: 100}, () => Math.floor(Math.random() * 100))

const linesContainer = document.querySelector('.lines')
const sortButton = document.querySelector('.btn__sort')
const newButton = document.querySelector('.btn__new')
const loader = document.querySelector('.loader')
const numInput = document.querySelector('.num__input')

let maxVal
let numsVal = 100
let completed = false

const createLineEl = (height) => {
    const lineInnerEl = document.createElement('div')
    lineInnerEl.classList.add('line__inner')
    lineInnerEl.style.height = `${height}%`
    const lineEl = document.createElement('div')
    lineEl.classList.add('line')
    lineEl.appendChild(lineInnerEl)
    return lineEl
}

const renderLines = (arr, max) => {
    arr.forEach(element => {
        linesContainer.appendChild(createLineEl((element / max) * 100))
    })
}

const colorLines = (a, b) => {
    const lines = document.querySelectorAll('.line__inner')
    lines[a].classList.add('switching')
    lines[b].classList.add('switching')
}

const colorCompleted = () => {
    const lines = document.querySelectorAll('.line__inner')
    lines.forEach(element => {
        element.classList.add('completed')
    });
}

const generateLines = (max) => {
    values = Array.from({length: max}, () => Math.floor(Math.random() * max))
    maxVal = Math.max(...values)
    completed = false
    linesContainer.innerHTML = ''
    renderLines(values, maxVal)
}

generateLines(numsVal)
numInput.value = numsVal

sortButton.addEventListener('click', () => {
    if (completed) {
        generateLines(numsVal)
    } else {
        loader.style.display = 'block'
        quickSort(values, 0, values.length - 1).then(newArr => {
            loader.style.display = 'none'
            completed = true
            linesContainer.innerHTML = ''
            renderLines(newArr, maxVal)
            colorCompleted()
        })
    }
})

newButton.addEventListener('click', () => {
    generateLines(numsVal)
}) 

numInput.addEventListener('change', () => {
    numsVal = numInput.value
    generateLines(numsVal)
})