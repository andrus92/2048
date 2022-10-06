function BaseModel() {
    PubSub.call(this);
}

BaseModel.prototype = Object.create(PubSub.prototype);
BaseModel.prototype.constructor = BaseModel;

BaseModel.prototype.test = function() {

}