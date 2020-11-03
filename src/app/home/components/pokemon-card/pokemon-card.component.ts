import { Component, Input, OnInit } from '@angular/core';
import { PokemonService} from '../service/pokemon.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {

  public pokemon;
  public open = false;
  @Input() public url;

  constructor(protected _pokemonService: PokemonService) { }

  ngOnInit(): void {
    if (this.url) {
      this._pokemonService.getPokemon(this.url).subscribe(res => this.pokemon = res);
    }
  }

}
