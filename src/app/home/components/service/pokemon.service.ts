import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemons(): Observable<any[]>{
    return this.http.get('https://pokeapi.co/api/v2/pokemon/').pipe(map((res: any) => res.results));
  }

  getPokemon(url): Observable<any>{
    return this.http.get(url)
  }
}
