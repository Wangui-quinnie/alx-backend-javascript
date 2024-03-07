export default class HolbertonCourse {
  constructor(name, length, students) {
    // Validate input parameters
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }

    if (typeof length !== 'number' || length <= 0) {
      throw new TypeError('Length must be a number');
    }

    if (!Array.isArray(students) || !students.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }

    // Assign validated parameters to instance properties
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // Getter and setter for name
  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
  }

  // Getter and setter for length
  get length() {
    return this._length;
  }

  set length(value) {
    this._length = value;
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
  }

  // Getter and setter for students
  get students() {
    return this._students;
  }

  set students(students) {
    if (!Array.isArray(students) || !students.every((student) => typeof student === 'string')) {
      throw new TypeError('students must be an Array of Strings');
    }
    this._students = students;
  }
}
