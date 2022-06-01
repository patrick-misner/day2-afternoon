import { ProxyState } from "../AppState.js"


const wpApi = axios.create({
  baseURL : 'https://pokeapi.co/api/v2/pokemon?limit=50/',
  timeout : 5000
})

class WildPokemonsService{
  async getWildPokemons(){
    const res = await wpApi.get()
    // console.log(res.data.results)
    ProxyState.wildpokemons = res.data.results.map(p => p)
    // console.log('wild pokemons service, appstate', ProxyState.wildpokemons)
  }
}

export const wildPokemonsService = new WildPokemonsService()