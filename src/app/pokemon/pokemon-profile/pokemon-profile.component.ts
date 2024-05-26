import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../../pokemon.service';

@Component({
  selector: 'app-pokemon-profile',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-profile.component.html',
  styles: ``,
})
export class PokemonProfileComponent {
  readonly route = inject(ActivatedRoute);
  readonly pokemonService = inject(PokemonService);
  readonly pokemonId = signal(
    Number(this.route.snapshot.paramMap.get('id'))
  ).asReadonly();
  readonly pokemon = signal(
    this.pokemonService.getPokemonById(this.pokemonId())
  ).asReadonly();
}
