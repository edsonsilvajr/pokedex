import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { PokemonService } from '../service/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  public pokemons;
  public allPokemons;
  public open = false;
  public position = 0;
  public searchParam;

  constructor(protected _pokemonService: PokemonService) { }

  ngOnInit(): void {
    this._pokemonService.getAllPokemons().subscribe(res => {this.allPokemons = res; this.pokemons = this._pokemonService.getPokemons(0,this.allPokemons);});
  }

  onScroll() {
    this.position++;
    let poke;
    if (this.position%20 === 0) {
      poke = this._pokemonService.getPokemons(this.position, this.allPokemons)
      this.pokemons.push(...poke);
    }
  }

  dynamicSearch() {
    this.pokemons = this._pokemonService.getPokemons(0,this.allPokemons, this.searchParam);
    this.position = 0;
  }
}
