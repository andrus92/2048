function Controller() {
    this.matrixModel = new MatrixModel();
}

Controller.prototype.onClickNewGame = function() {
    console.log('this.onClickNewGame')
    this.matrixModel.startNewGame();
}

Controller.prototype.onKeyPress = function(event) {
    console.log('onkeypress')
    console.log(event.code)
    this.matrixModel.playGame(event.code);
}
