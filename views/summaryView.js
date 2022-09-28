function SummaryView() {
    this.template = document.querySelector('#summaryTemplate').innerHTML;
}

SummaryView.prototype.render = function() {
    var el = document.createElement('div');
    el.innerHTML = this.template;
    return el;
}