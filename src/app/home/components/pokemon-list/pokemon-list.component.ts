import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../service/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  public pokemons;
  public open = false;
  public position = 0;

  constructor(protected _pokemonService: PokemonService) { }

  ngOnInit(): void {
    this._pokemonService.getPokemons(this.position).subscribe(res => this.pokemons = res);
  }

  onScroll() {
    this.position++;
    if (this.position%20 === 0) {
      this._pokemonService.getPokemons(this.position).subscribe(res => {this.pokemons.push(...res); console.log(this.pokemons);});
    }
  }
}
