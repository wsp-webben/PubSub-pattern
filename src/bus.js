export default class Bus {
  constructor() {
    this.rooms = [];
  }

  publish(room, data) {
    // Check if the room exist
    if (!this.rooms[room]) {
      this.rooms[room].forEach(sub => sub.getPublication());
    }
  }

  subscriber(room, sub) {
    // Create room, if it hasn't been created yet
    if (!this.rooms[room]) {
      this.rooms[room] = new Set();
    }

    this.rooms[room].add(sub);
  }
}