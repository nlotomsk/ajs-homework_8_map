export default class ErrorRepository {
  constructor() {
    this.errors = new Map();
    this.errors.set(100, 'Continue');
    this.errors.set(200, 'OK');
    this.errors.set(300, 'Multiple Choices');
    this.errors.set(400, 'Bad Request');
    this.errors.set(500, 'Internal Server Error');
  }

  translate(code) {
    if (this.errors.has(code)) {
      return this.errors.get(code);
    }
    return 'Unknown error';
  }
}
