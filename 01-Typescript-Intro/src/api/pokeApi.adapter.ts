import axios from "axios";

// Definimos una interfaz para el adaptador HTTP
export interface HttpAdapter {
  get<T>(url: string): Promise<T>;
}

// Implementación del adaptador usando Fetch API
export class PokeApiFetchAdapter implements HttpAdapter {
  async get<T>(url: string): Promise<T> {
    const response = await fetch(url);
    const data: T = await response.json();
    console.log("get con fetch");
    return data;
  }
}

// Implementación del adaptador usando Axios
export class PokeApiAdapter implements HttpAdapter {
  private readonly axios = axios;

  async get<T>(url: string): Promise<T> {
    const { data } = await this.axios.get<T>(url);
    console.log("get con axios");
    return data;
  }
}
