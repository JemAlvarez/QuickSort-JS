let values = Array.from({length: 40}, () => Math.floor(Math.random() * 40))

const linesContainer = document.querySelector('.lines')
const sortButton = document.querySelector('.btn__sort')
const newButton = document.querySelector('.btn__new')
const loader = document.querySelector('.loader')

const maxVal = Math.max(...values)

const createLineEl = (height) => {
    const lineInnerEl = document.createElement('div')
    lineInnerEl.classList.add('line__inner')
    lineInnerEl.style.height = `${height}%`
    const lineEl = document.createElement('div')
    lineEl.classList.add('line')
    lineEl.appendChild(lineInnerEl)
    return lineEl
}

const renderLines = (arr) => {
    arr.forEach(element => {
        linesContainer.appendChild(createLineEl((element / maxVal) * 100))
    })
}

renderLines(values)

sortButton.addEventListener('click', () => {
    loader.style.display = 'block'
    quickSort(values, 0, values.length - 1).then(newArr => {
        loader.style.display = 'none'
        linesContainer.innerHTML = ''
        renderLines(newArr)
    })
})

newButton.addEventListener('click', () => {
    values = Array.from({length: 40}, () => Math.floor(Math.random() * 40))
    linesContainer.innerHTML = ''
    renderLines(values)
})