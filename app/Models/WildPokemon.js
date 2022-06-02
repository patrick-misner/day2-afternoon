

export class WildPokemon {
  constructor(wildData){
    this.id = wildData.index || wildData.id
    this.abilities = wildData.abilities
    this.base_experience = wildData.base_experience
    this.height = wildData.height
    this.moves = wildData.moves
    this.name = wildData.name
    this.species = wildData.species
    this.sprites = wildData.sprites
    this.stats = wildData.stats
    this.types = wildData.types
    this.weight = wildData.weight
  }

  static ListTemplate(wildPokemon){
    return `
    <div class="col-12 text-center p-1">
    <b class="selectable" onclick="app.wildPokemonsController.getPokemonDetails('${wildPokemon.name}')"> ${wildPokemon.name} </b>
    </div>
    `
  }

  get DetailsTemplate(){
    return `
    ${this.name}
    ${this.weight}
    `
  }
}