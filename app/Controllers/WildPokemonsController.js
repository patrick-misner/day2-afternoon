import { ProxyState } from "../AppState.js"
import { WildPokemon } from "../Models/WildPokemon.js"
import { wildPokemonsService } from "../Services/WildPokemonsService.js"
import { Pop } from "../Utils/Pop.js"


function _drawWildPokemons(){
  console.log('drawing pokemons')
  let wildpokemons = ProxyState.wildpokemons
  console.log('wildpokemons', ProxyState.wildpokemons);
  let template = ''
  wildpokemons.forEach( p => template += WildPokemon.ListTemplate(p))
  console.log('draw pokemons template', template)
  document.getElementById('wild-pokemons').innerHTML = template
}


export class WildPokemonsController {
  constructor(){
    ProxyState.on('wildpokemons', _drawWildPokemons)
    this.getWildPokemons()
    _drawWildPokemons()
  }

  async getWildPokemons(){
    // console.log('getwildpokemons function')
    try {
      await wildPokemonsService.getWildPokemons()
    } catch (error) {
      console.error(error)
      Pop.toast(error.message, 'error')
    }
  }

}


