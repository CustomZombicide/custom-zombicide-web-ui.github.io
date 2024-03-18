import {Component, OnInit} from '@angular/core';
import {Players} from "../../constant/players";
import {HeroModel} from "../../model/hero.model";
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-bystanders-cards',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
    NgForOf,
    FormsModule
  ],
  templateUrl: './bystanders-cards.component.html',
  styleUrl: './bystanders-cards.component.scss'
})
export class BystandersCardsComponent  implements OnInit {
  searchTextControl = new FormControl('');
  zombiePlayers: HeroModel[] = [];
  filteredZombiePlayers: HeroModel[] = [];
  showFiltersMobile: boolean = false;
  showXBtn = false;
  constructor() { }

  ngOnInit(): void {
    // Simulated data
    this.zombiePlayers = Players;
    this.filteredZombiePlayers = this.zombiePlayers;

    // Subscribe to changes in searchTextControl
    this.searchTextControl.valueChanges.subscribe((value) => {
      if(value!==null) {
        this.showXBtn = value !== '';
        this.filterZombiePlayers(value);
      }
    });
  }

  filterZombiePlayers(searchText: string): void {
    this.filteredZombiePlayers = this.zombiePlayers.filter(player =>
      player.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }

  toggleFiltersMobile(): void {
    this.showFiltersMobile = !this.showFiltersMobile;
  }

  onInputChange(): void {
    // Se ejecuta cada vez que el valor del input cambia
  }

  clearInput(): void {
    this.searchTextControl.setValue('');
  }
}
