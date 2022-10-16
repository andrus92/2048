function AppView() {
    var summaryView = new SummaryView();
    var matrixView = new MatrixView();
    var modalView = new ModalView();

    this.render = function (selector) {
        var element = document.querySelector(selector);
        summaryView.show(element);
        matrixView.show(element);
        modalView.show(element);
    }
}

var appView = new AppView();
appView.render('#root');