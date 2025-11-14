import type {
  Move,
  PokeApiResponse,
} from "../interfaces/pokeapi-response.interface";
import {
  PokeApiAdapter,
  PokeApiFetchAdapter,
  type HttpAdapter,
} from "../api/pokeApi.adapter";

export class Pokemon {
  get imageUrl(): string {
    return `https://pokemon.com/${this.id}.jpg`;
  }

  constructor(
    public readonly id: number,
    public name: string,
    private readonly http: HttpAdapter // La interfaz se usa aqui para esperar solo clases que la implementen y sean compatibles.
  ) {}

  scream() {
    console.log(`${this.name.toUpperCase()}!!!`);
  }

  speak() {
    console.log(`${this.name}, ${this.name}`);
  }

  async getMoves(): Promise<Move[]> {
    // const { data } = await axios.get<PokeApiResponse>(
    //   "https://pokeapi.co/api/v2/pokemon/4"
    // );
    const data = await this.http.get<PokeApiResponse>(
      "https://pokeapi.co/api/v2/pokemon/4"
    );
    console.log(data.moves);

    return data.moves;
  }
}

const pokeApiAdapter = new PokeApiAdapter();
const pokeApiFetchAdapter = new PokeApiFetchAdapter();

export const charmander = new Pokemon(4, "Charmander", pokeApiAdapter);

charmander.getMoves();
