function generateNumber() {
    if (Math.floor(Math.random() * 10) == 9) {
        return 4;
    }
    return 2;
}

function generateCoordinates(grid) {
    const possibleCoordinates = [];

    grid.forEach((arr, xIdx) => {
        const yArr = arr.map((e, yIdx) => e === '' ? yIdx : undefined).filter(y => y !== undefined);
        yArr.forEach((el) => {
            possibleCoordinates.push({x: xIdx, y: el});
        })

    });

    const len = possibleCoordinates.length;

    if (len !== 0) {
        const random = Math.floor(Math.random() * len);
        return {x: possibleCoordinates[random].x, y: possibleCoordinates[random].y};
    }

    return undefined
}

function shiftDown(grid) {
    const len = grid.length;
    let i = 0;
    let j = 0;
    let k = 0;

    for (j = 0; j < len; j += 1) {
        const col = [];
        
        // Getting a j-th column
        for (i = 0; i < len; i += 1) {
            col.push(grid[i][j]);
        }

        // Getting non-'' values 
        const colFilter = col.filter(x => x !== '');
        const colFilterLen = colFilter.length;

        // Changing the column
        if (colFilterLen < len) {
            const colNew = Array(len - colFilterLen).fill('');
            colNew.push(...colFilter);

            for (k = 0; k < len; k += 1) {
                grid[k][j] = colNew[k];
            } 
        }
    } 
}


function shiftUp(grid) {
    const len = grid.length;
    let i = 0;
    let j = 0;
    let k = 0;

    for (j = 0; j < len; j += 1) {
        const col = [];
        
        // Getting a j-th column
        for (i = 0; i < len; i += 1) {
            col.push(grid[i][j]);
        }

        // Getting non-'' values 
        const colFilter = col.filter(x => x !== '');
        const colFilterLen = colFilter.length;

        // Changing the column
        if (colFilterLen < len) {
            const colNew = Array(len - colFilterLen).fill('');
            colNew.unshift(...colFilter);

            for (k = 0; k < len; k += 1) {
                grid[k][j] = colNew[k];
            } 
        }
    }
}

function shiftRight(grid) {
    const len = grid.length;
    let i = 0;
    let j = 0;
    let k = 0;

    for (i = 0; i < len; i += 1) {

        // Getting non-'' values 
        const rowFilter = grid[i].filter(x => x !== '');
        const rowFilterLen = rowFilter.length;

        // Changing the row
        if (rowFilterLen < len) {
            const rowNew = Array(len - rowFilterLen).fill('');
            rowNew.push(...rowFilter);

            for (k = 0; k < len; k += 1) {
                grid[i][k] = rowNew[k];
            } 
        }

    }
}

function shiftLeft(grid) {
    const len = grid.length;
    let i = 0;
    let j = 0;
    let k = 0;

    for (i = 0; i < len; i += 1) {
        // Getting non-'' values 
        const rowFilter = grid[i].filter(x => x !== '');
        const rowFilterLen = rowFilter.length;

        // Changing the row
        if (rowFilterLen < len) {
            const rowNew = Array(len - rowFilterLen).fill('');
            rowNew.unshift(...rowFilter);

            for (k = 0; k < len; k += 1) {
                grid[i][k] = rowNew[k];
            } 
        }
    }
}


function downMerge(grid) {
    let res = 0;
    let i = 0;
    let j = 0;
    const len = grid.length;

    // Comparison of the neighboring values from the bottom in each column and merging them if needed
    for (j = 0; j < len; j += 1) {
        for (i = len - 1; i > 0; i -= 1) {
            if (grid[i][j] !== '') {
                if (grid[i][j] === grid[i - 1][j]) {
                    grid[i][j] *= 2;
                    grid[i - 1][j] = '';
                    res += grid[i][j];
                }
            }
        }
    }
    return res;
}

function upMerge(grid) {
    let res = 0;
    let i = 0;
    let j = 0;
    const len = grid.length;

    // Comparison of the neighboring values from the top in each column and merging them if needed
    for (j = 0; j < len; j += 1) {
        for (i = 0; i < len - 1; i += 1) {
            if (grid[i][j] !== '') {
                if (grid[i][j] === grid[i + 1][j]) {
                    grid[i][j] *= 2;
                    grid[i + 1][j] = '';
                    res += grid[i][j];
                }
            }
        }
    }
    return res;
}

function rightMerge(grid) {
    let res = 0;
    let i = 0;
    let j = 0;
    const len = grid.length;

    //Comparison of the neighboring values from the right to the left in each row and merging them if needed
    for (i = 0; i < len; i += 1) {
        for (j = len - 1; j > 0; j -= 1) {
            if (grid[i][j] !== '') {
                if (grid[i][j] === grid[i][j - 1]) {
                    grid[i][j] *= 2;
                    grid[i][j - 1] = '';
                    res += grid[i][j];
                }
            }
        }
    }
    return res;
}

function leftMerge(grid) {
    let res = 0;
    let i = 0;
    let j = 0;
    const len = grid.length;

    // Comparison of the neighboring values from the left to the right in each row and merging them if needed
    for (i = 0; i < len; i += 1) {
        for (j = 0; j < len - 1; j += 1) {
            if (grid[i][j] !== '') {
                if (grid[i][j] === grid[i][j + 1]) {
                    grid[i][j] *= 2;
                    grid[i][j + 1] = '';
                    res += grid[i][j];
                }
            }
        }
    }
    return res;
}

function handleArrowPush(grid, keyCode) {
    let res = 0;

    switch(keyCode) {
        case 'ArrowUp':
            shiftUp(grid);
            res = upMerge(grid);
            shiftUp(grid);
            break;
        case 'ArrowDown':
            shiftDown(grid);
            res = downMerge(grid);
            shiftDown(grid);
            break;
        case 'ArrowRight':
            shiftRight(grid);
            res = rightMerge(grid);
            shiftRight(grid);
            break;
        case 'ArrowLeft':
            shiftLeft(grid);
            res = leftMerge(grid);
            shiftLeft(grid);
            break;
        default:
            return 0;
    }
    return res;
}

function isGameOver(grid) {
    const flatGridFilter = grid.flat().filter(x => x === '');

    if (flatGridFilter.length > 0) {
        return false;
    }

    const keyCodes = ['ArrowUp', 'ArrowDown', 'ArrowRight', 'ArrowLeft'];
    let gridCopy = [];
    for (i = 0; i < grid.length; i += 1) {
        gridCopy[i] = [...grid[i]];
    }

    for (i = 0; i < keyCodes.length; i += 1) {
        handleArrowPush(gridCopy, keyCodes[i]);
        if (gridCopy.toString() !== grid.toString()) {
            return false;
        }
    }

    return true;
}

function generateNewNumber(grid) {
    let coordinates = generateCoordinates(grid);
    
    if (coordinates === undefined) { 
        return false;
    }

    let num = generateNumber();
    grid[coordinates.x][coordinates.y] = num;
    return true;
}