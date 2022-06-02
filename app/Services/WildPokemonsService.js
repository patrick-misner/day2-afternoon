import { ProxyState } from "../AppState.js"
import { WildPokemon } from "../Models/WildPokemon.js"


const wpApi = axios.create({
  baseURL : 'https://pokeapi.co/api/v2/pokemon',
  timeout : 5000
})

class WildPokemonsService{
  async getWildPokemons(){
    const res = await wpApi.get()
    // console.log(res.data.results)
    ProxyState.wildpokemons = res.data.results.map(p => p)
    // console.log('wild pokemons service, appstate', ProxyState.wildpokemons)
  }

  async getPokemonDetails(name){
    const res = await wpApi.get(name)
    // console.log('getpokemondetails', res.data)
    ProxyState.activePokemon = new WildPokemon(res.data)
  }
}

export const wildPokemonsService = new WildPokemonsService()