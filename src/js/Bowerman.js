import Character from './app';

class Bowerman extends Character {
  show() {
    console.log(this);
  }
}

const bowerman = new Bowerman('John', 'Bowman', 25, 25);
bowerman.show();
