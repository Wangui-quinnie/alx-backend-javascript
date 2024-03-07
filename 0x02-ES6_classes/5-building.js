const evacuationWarningMessageSymbol = Symbol('evacuationWarningMessage');

export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    if (this.constructor !== Building && !this[evacuationWarningMessageSymbol]) {
      throw new Error('Class extending Building must implement evacuationWarningMessage');
    }
  }

  get sqft() {
    return this._sqft;
  }
}
