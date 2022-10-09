function MatrixModel () {
    BaseModel.call(this);
    console.log('constr matrmodel')
    this.attributes = {
        grid: [
            ['', '', '', ''],
            ['', '', '', ''],
            ['', '', '', ''],
            ['', '', '', '']
        ]
    }

    var instance = this;
    MatrixModel = function () {
        return instance;
    }
    
}

MatrixModel.prototype = Object.create(BaseModel.prototype);
MatrixModel.prototype.contructor = MatrixModel;

MatrixModel.prototype.startNewGame = function() {
    // zeroize the matrix
    this.attributes.grid = [
        ['', '', '', ''],
        ['', '', '', ''],
        ['', '', '', ''],
        ['', '', '', '']
    ];

    // Generate the first number
    generateNewNumber(this.attributes.grid);

    // Generate the second number
    generateNewNumber(this.attributes.grid);

    // publish the changes
    this.publish('changeData');
}

MatrixModel.prototype.playGame = function(key) {

    switch(key) {
        case 'ArrowUp':
        case 'ArrowDown':
        case 'ArrowRight':
        case 'ArrowLeft':
            handleArrowPush(this.attributes.grid, key);
            break;
        default:
            return;
    }

    if (generateNewNumber(this.attributes.grid) === true) {
        this.publish('changeData');
    } else if (isGameOver(this.attributes.grid) === true) {
        alert('The end of the game');
    }
}
