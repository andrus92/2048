function Controller() {
    this.matrixModel = new MatrixModel();
    this.summaryModel = new SummaryModel();
    this.modalModel = new ModalModel();
}

Controller.prototype.onClickNewGame = function() {
    this.matrixModel.startNewGame();
    this.summaryModel.startNewGame();
    this.modalModel.startNewGame();
}

Controller.prototype.onKeyPress = function(event) {
    const points = this.matrixModel.playGame(event.code);
    this.summaryModel.addPoints(points);
    this.modalModel.setTotalScore(this.summaryModel.getTotalScore());

    if (isGameOver(this.matrixModel.attributes.grid)) {
        this.modalModel.setActive();
    }
}
