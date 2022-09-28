function MatrixView() {
    this.template = document.querySelector('#matrixTemplate').innerHTML;
}

MatrixView.prototype.render = function() {
    var el = document.createElement('div');
    el.innerHTML = this.template;
    return el;
}