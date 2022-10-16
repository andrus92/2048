function SummaryModel () {
    BaseModel.call(this);
    this.attributes = {
        totalScore: 0,
        bestScore: localStorage.getItem('2048_bestScore') || 0,
    }

    var instance = this;
    SummaryModel = function () {
        return instance;
    }
}

SummaryModel.prototype = Object.create(BaseModel.prototype);
SummaryModel.prototype.contructor = SummaryModel;

SummaryModel.prototype.startNewGame = function() {
    // zeroize the score
    this.attributes.totalScore = 0;

    // publish the changes
    this.publish('changeScore');
}

SummaryModel.prototype.getTotalScore = function() {
    return this.attributes.totalScore;
}

SummaryModel.prototype.addPoints = function(numPoints) {
    if (numPoints !== 0) {
        this.attributes.totalScore += numPoints;
        if (this.attributes.totalScore > this.attributes.bestScore) {
            this.attributes.bestScore = this.attributes.totalScore;
            localStorage.setItem('2048_bestScore', this.attributes.bestScore);
        }

        this.publish('changeScore');
    }
}