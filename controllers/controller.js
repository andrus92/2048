function Controller() {
    this.matrixModel = new MatrixModel();
    this.summaryModel = new SummaryModel();
}

Controller.prototype.onClickNewGame = function() {
    this.matrixModel.startNewGame();
    this.summaryModel.startNewGame();
}

Controller.prototype.onKeyPress = function(event) {
    const points = this.matrixModel.playGame(event.code);
    this.summaryModel.addPoints(points);
}
