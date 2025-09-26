'use strict';

class Animal {
  health = 100;
  hidden = false;
  static alive = [];

  constructor(name) {
    this.name = name;

    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(herb) {
    if (herb instanceof Carnivore || herb.hidden) {
      return;
    }

    herb.health -= 50;

    if (herb.health <= 0) {
      Animal.alive = Animal.alive.filter((animal) => animal !== herb);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
