class NewPokemon {
  constructor(public readonly id: number, public name: string) {}

  scream() {
    console.log(`No quiero!!!`);
  }

  speak() {
    console.log(`No quiero hablar!`);
  }
}

const MyDecorator = () => {
  return (target: Function) => {
    return NewPokemon;
  };
};

@MyDecorator() // Un decorador es una funcion que tiene acceso a la definicion de la clase y se ejecuta cuando se crea la clase
export class Pokemon {
  constructor(public readonly id: number, public name: string) {}

  scream() {
    console.log(`${this.name.toUpperCase()}!!!`);
  }

  speak() {
    console.log(`${this.name}, ${this.name}!`);
  }
}

export const charmander = new Pokemon(4, "Charmander");

charmander.scream();
charmander.speak();
