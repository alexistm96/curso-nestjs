import axios from "axios";
import type {
  Move,
  PokeApiResponse,
} from "../interfaces/pokeapi-response.interface";

export class Pokemon {
  // Traditional syntax
  // public id: number;
  // public name: string;

  // constructor(id: number, name: string) {
  //   this.id = id;
  //   this.name = name;
  // }

  // Shorter syntax, same as above and only works if erasableSyntaxOnly option in typescript config is false
  constructor(public readonly id: number, public name: string) {}

  get imageurl(): string {
    return `https://pokemon.com/${this.id}.jpg`;
  }

  scream() {
    console.log(`${this.name.toUpperCase()}!!!`);
  }

  async getMoves(): Promise<Move[]> {
    // const moves = 10;
    const { data } = await axios.get<PokeApiResponse>(
      "https://pokeapi.co/api/v2/pokemon/4"
    );
    return data.moves;
  }
}

export const charmander = new Pokemon(4, "Charmander");
charmander.getMoves();
