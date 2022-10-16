function ModalView() {
    this.controller = new Controller();
    this.modalModel = new ModalModel();
    this.template = document.getElementById('modalTemplate').innerHTML;
    this.className = 'inactive';
    BaseView.call(this);
}

ModalView.prototype = Object.create(BaseView.prototype);
ModalView.prototype.constructor = ModalView;

ModalView.prototype.beforeRender = function() {
    this.modalModel.subscribe('changeModal', this.reRender, this);
}

ModalView.prototype.render = function () {
    return templateStr(this.template, this.modalModel.attributes);
}

ModalView.prototype.afterRender = function () {}

ModalView.prototype.afterUpdate = function() {
    var newGameBtn = document.getElementById('modal_newGameBtn');
    newGameBtn.addEventListener('click', this.controller.onClickNewGame.bind(this.controller));
}