

export class WildPokemon {
  constructor(wildData){
    this.id = wildData.name
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
    <b class="selectable" onclick="app.dndSpellsController.getSpellDetails('${wildPokemon.id}')"> ${wildPokemon.name} </b>
    `
  }
}