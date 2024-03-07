export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Getter for code
  get code() {
    return this._code;
  }

  inspect() {
    return `Airport { _name: '${this._name}', _code: '${this._code}' }`;
  }

  // Default string description
  toString() {
    return `[object ${this._code}]`;
  }
}
