import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { PokemonService } from '../../pokemon.service';
import { DatePipe } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-pokemon-profile',
  standalone: true,
  imports: [DatePipe, RouterLink],
  templateUrl: './pokemon-profile.component.html',
  styles: ``,
})
export class PokemonProfileComponent {
  private readonly route = inject(ActivatedRoute);
  readonly router = inject(Router);
  private readonly pokemonService = inject(PokemonService);
  private readonly pokemonId = Number(this.route.snapshot.paramMap.get('id'));

  readonly pokemon = toSignal(
    this.pokemonService.getPokemonById(this.pokemonId)
  );

  deletePokemon(pokemonId: number) {
    this.pokemonService.deletePokemon(pokemonId).subscribe(() => {
      this.router.navigate(['/pokemons']);
    });
  }
}
