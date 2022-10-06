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

    if (possibleCoordinates.length !== 0) {
        const random = Math.floor(Math.random() * possibleCoordinates.length);
        return {x: possibleCoordinates[random].x, y: possibleCoordinates[random].y};
    }

    return undefined
}
