// One 
// const quickSort = (arr) => {
//     if (arr.length <= 1) {return arr}

//     let pivot = arr[arr.length - 1]
//     let left = []
//     let right = []

//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i] < pivot) {
//             left.push(arr[i])
//         } else {
//             right.push(arr[i])
//         }
//     }

//     return [...quickSort(left), pivot, ...quickSort(right)]
// }

// Two
async function quickSort(arr, start, end) {
    if (start >= end) {
        return;
    }
    let index = await partition(arr, start, end);

    await Promise.all([
        quickSort(arr, start, index - 1),
        quickSort(arr, index + 1, end)
        
    ]);

    return arr
}

async function partition(arr, start, end) {
    for (let i = start; i < end; i++) {
    }

    let pivotValue = arr[end];
    let pivotIndex = start;
    for (let i = start; i < end; i++) {
        if (arr[i] < pivotValue) {
        await swap(arr, i, pivotIndex);
        pivotIndex++;
        }
    }

    await swap(arr, pivotIndex, end);

    for (let i = start; i < end; i++) {
        if (i != pivotIndex) {
        }
    }

    return pivotIndex;
}

async function swap(arr, a, b) {
    await sleep(50);
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
    values = arr
    linesContainer.innerHTML = ''
    renderLines(values, maxVal)
    colorLines(a, b)
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}