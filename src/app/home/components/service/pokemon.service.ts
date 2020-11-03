import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemons(position, pokemons: any[], filter? : string){
    if (filter){
      let regex = new RegExp(filter);
      return pokemons.filter(pokemon => {
        return pokemon.name.match(regex);
      })
    }
    return pokemons.slice(position,position+20);
  }

  getAllPokemons() {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1050`).pipe(map((res: any) => res.results));
  }

  getPokemon(url): Observable<any>{
    return this.http.get(url)
  }
}
