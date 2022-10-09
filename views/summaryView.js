function SummaryView() {
    this.controller = new Controller();
    this.summaryModel = new SummaryModel();
    this.template = document.getElementById('summaryTemplate').innerHTML;
    this.className = 'summary';
    BaseView.call(this);
}

SummaryView.prototype = Object.create(BaseView.prototype);
SummaryView.prototype.constructor = SummaryView;

SummaryView.prototype.beforeRender = function() {
    this.summaryModel.subscribe('changeScore', this.reRender, this);
}

SummaryView.prototype.render = function () {
    return templateStr(this.template, this.summaryModel.attributes);
}

SummaryView.prototype.afterRender = function () {
    var newGameBtn = document.getElementById('newGameBtn');
    newGameBtn.addEventListener('click', this.controller.onClickNewGame.bind(this.controller));
}