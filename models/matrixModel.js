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
    this.attributes.grid[0][0] = 2;
    this.publish('changeData');
}

MatrixModel.prototype.playGame = function(key) {
    // console.log(key)
    switch(key) {
        case 'ArrowUp':
            this.attributes.grid[1][1] = 2;
            break;
        case 'ArrowDown':
            this.attributes.grid[2][2] = 2;
            break;
        case 'ArrowRight':
            this.attributes.grid[3][3] = 2;
            break;
        case 'ArrowLeft':
            this.attributes.grid[3][2] = 2;
            break;
        default:
            return;
    }
    
    this.publish('changeData');
}