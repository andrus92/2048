function MatrixModel () {
    BaseModel.call(this);
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
    let res = 0;
    
    switch(key) {
        case 'ArrowUp':
        case 'ArrowDown':
        case 'ArrowRight':
        case 'ArrowLeft':
            res = handleArrowPush(this.attributes.grid, key);
            break;
        default:
            return 0;
    }

    if (generateNewNumber(this.attributes.grid)) {
        this.publish('changeData');
    }

    return res;
}
