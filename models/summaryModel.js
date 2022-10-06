function SummaryModel () {
    BaseModel.call(this);
    this.attributes = {
        totalScore: 0,
        bestScore: 0
    }
}