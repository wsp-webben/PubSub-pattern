export default class Subscriber {
  constructor(name) {
    this.name = name;
  }

  getPublication(data) {
    console.log(`${this.name} has got letter: ${data}`);
  }
}