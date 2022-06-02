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
  // console.log('draw pokemons template', template)
  document.getElementById('wild-pokemons').innerHTML = template
}

function _drawDetails(){
let wildpokemon = ProxyState.activePokemon
document.getElementById('details').innerHTML = wildpokemon.DetailsTemplate
console.log(wildpokemon);
}

export class WildPokemonsController {
  constructor(){
    ProxyState.on('wildpokemons', _drawWildPokemons)
    ProxyState.on('activePokemon', _drawDetails)
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

 

  async getPokemonDetails(name){
    try {
      await wildPokemonsService.getPokemonDetails(name)
    } catch (error) {
      console.error(error)
      Pop.toast(error.message, 'error')
    }
  }
}


