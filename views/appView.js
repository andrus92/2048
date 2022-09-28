function AppView() {
    var summaryView = new SummaryView();
    var matrixView = new MatrixView();
    this.render = function (selector) {
        const element = document.querySelector(selector);
        element.appendChild(summaryView.render());
        element.appendChild(matrixView.render());
    }
}

var appView = new AppView();
appView.render('#root');