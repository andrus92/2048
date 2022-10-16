function ModalModel () {
    BaseModel.call(this);
    this.attributes = {
        totalScore: 0,
        //active: false,
        display: 'none',
    }

    var instance = this;
    ModalModel = function () {
        return instance;
    }
}

ModalModel.prototype = Object.create(BaseModel.prototype);
ModalModel.prototype.contructor = ModalModel;

ModalModel.prototype.startNewGame = function() {
    // zeroize the score and make it invisible
    this.attributes.totalScore = 0;
    this.attributes.display = 'none';

    // publish the changes
    this.publish('changeModal');
}

ModalModel.prototype.setTotalScore = function(score) {
    this.attributes.totalScore = score;
}

ModalModel.prototype.setActive = function() {
    this.attributes.display = 'flex';
    // publish the changes
    this.publish('changeModal');
}
