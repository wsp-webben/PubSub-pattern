export default class Subscriber {
  constructor(name) {
    this.name = name;
  }

  getPublication() {
    console.log(`${this.name}'s read his letter`);
  }
}