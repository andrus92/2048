function BaseView() {
    this.rootElement = document.createElement('div');
}



BaseView.prototype.show = function(element) {
    this.beforeRender();
    this.rootElement.innerHTML = this.render();
    this.rootElement.classList.add(this.className);
    element.appendChild(this.rootElement);
    this.afterRender();
}

BaseView.prototype.beforeRender = function() {
    throw new Error('beforeRender must be redefined !!!');
}
BaseView.prototype.render = function() {
    throw new Error('beforeRender must be redefined !!!');
}
BaseView.prototype.afterRender = function() {
    throw new Error('afterRender must be redefined !!!');
}

BaseView.prototype.beforeUpdate = function() {}
BaseView.prototype.reRender = function() {
    this.beforeUpdate();
    this.rootElement.innerHTML = this.render();
    this.afterUpdate();
}
BaseView.prototype.afterUpdate = function() {}

