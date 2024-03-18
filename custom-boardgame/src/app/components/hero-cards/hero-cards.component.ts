import {Component, inject, OnInit, TemplateRef} from '@angular/core';
import {Players} from "../../constant/players";
import {CommonModule} from "@angular/common";
import {NgbActiveModal, NgbInputDatepicker, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {HeroModel} from "../../model/hero.model";
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RoleEnum} from "../../enum/role.enum";
import {AffiliationEnum} from "../../enum/affiliation.enum";
import {SideEnum} from "../../enum/side.enum";
import {AttackRangeEnum} from "../../enum/attackRange.enum";
import {HeroTypeEnum} from "../../enum/hero-type.enum";
import {NumberOfDiceEnum} from "../../enum/number-of-dice.enum";
import {ThrowsEnum} from "../../enum/throws.enum";

@Component({
  selector: 'app-hero-cards',
  standalone: true,
  imports: [CommonModule, NgbInputDatepicker, ReactiveFormsModule, FormsModule],
  providers: [NgbActiveModal],
  templateUrl: './hero-cards.component.html',
  styleUrl: './hero-cards.component.scss'
})
export class HeroCardsComponent   implements OnInit {
  searchTextControl = new FormControl('');
  zombiePlayers: HeroModel[] = [];
  filteredZombiePlayers: HeroModel[] = [];
  showFiltersMobile: boolean = false;
  showXBtn = false;
  protected readonly ZombiePlayers = Players;
  hero: HeroModel | undefined;
  role = Object.keys(RoleEnum)
    .map(key => RoleEnum[key as keyof typeof RoleEnum]);
  affiliation = Object.keys(AffiliationEnum)
    .map(key => AffiliationEnum[key as keyof typeof AffiliationEnum]);
  atkRange = Object.keys(AttackRangeEnum)
    .map(key => AttackRangeEnum[key as keyof typeof AttackRangeEnum]);
  heroType = Object.keys(HeroTypeEnum)
    .map(key => HeroTypeEnum[key as keyof typeof HeroTypeEnum]);
  numDice = Object.keys(NumberOfDiceEnum)
    .map(key => NumberOfDiceEnum[key as keyof typeof NumberOfDiceEnum]);
  side = Object.keys(SideEnum)
    .map(key => SideEnum[key as keyof typeof SideEnum]);
  throws = Object.keys(ThrowsEnum)
    .map(key => ThrowsEnum[key as keyof typeof ThrowsEnum]);
  selectedOptionsRole: { [key: string]: boolean } = {};
  selectedOptionsAffiliation: { [key: string]: boolean } = {};
  selectedOptionsNumDice: { [key: string]: boolean } = {};
  selectedOptionsHeroType: { [key: string]: boolean } = {};
  selectedOptionsThrows: { [key: string]: boolean } = {};
  selectedOptionsAtkRange: { [key: string]: boolean } = {};
  selectedOptionsSide: { [key: string]: boolean } = {};


  private modalService = inject(NgbModal);


  constructor() {
    this.role.forEach(option => {
      this.selectedOptionsRole[option] = true;
    });
    this.affiliation.forEach(option => {
      this.selectedOptionsAffiliation[option] = true;
    });
    this.atkRange.forEach(option => {
      this.selectedOptionsAtkRange[option] = true;
    });
    this.heroType.forEach(option => {
      this.selectedOptionsHeroType[option] = true;
    });
    this.numDice.forEach(option => {
      this.selectedOptionsNumDice[option] = true;
    });
    this.side.forEach(option => {
      this.selectedOptionsSide[option] = true;
    });
    this.throws.forEach(option => {
      this.selectedOptionsThrows[option] = true;
    });
  }

  ngOnInit(): void {
    // Simulated data
    this.zombiePlayers = Players;
    this.filteredZombiePlayers = this.zombiePlayers;
    this.zombiePlayers.sort((a, b) => a.name.localeCompare(b.name));
    this.zombiePlayers.sort((a, b) => a.heroType.localeCompare(b.heroType));

    // Subscribe to changes in searchTextControl
    this.searchTextControl.valueChanges.subscribe((value) => {
      if(value!==null) {
        this.showXBtn = value !== '';
        this.filterZombiePlayers(value);

      }
    });
  }

  openFullscreen(content: TemplateRef<any>, hero: HeroModel) {
    this.hero = hero;
    this.modalService.open(content, { size: "xl" });
  }

  filterZombiePlayers(searchText: string): void {
    this.filteredZombiePlayers = this.zombiePlayers.filter(player =>
      player.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }

  toggleFiltersMobile(): void {
    this.showFiltersMobile = !this.showFiltersMobile;
  }

  clearInput(): void {
    this.searchTextControl.setValue('');
  }

  selected(selectedOptions: { [key: string]: boolean }): string[] {
    return Object.keys(selectedOptions).filter(option => selectedOptions[option]);
  }



  test() {
    this.showFiltersMobile = !this.showFiltersMobile;
    const roleSelected = this.selected(this.selectedOptionsRole);
    const affiliationSelected = this.selected(this.selectedOptionsAffiliation);
    const atkRangeSelected = this.selected(this.selectedOptionsAtkRange);
    const heroTypeSelected = this.selected(this.selectedOptionsHeroType);
    const numDiceSelected = this.selected(this.selectedOptionsNumDice);
    const sideSelected = this.selected(this.selectedOptionsSide);
    const throwsSelected = this.selected(this.selectedOptionsThrows);
    this.filteredZombiePlayers = this.zombiePlayers.filter(player =>
      roleSelected.some(roleSelected =>
        player.role.includes(roleSelected as RoleEnum)
      )
    ).filter(player =>
      affiliationSelected.some(affiliationSelected =>
        player.affiliation.includes(affiliationSelected as AffiliationEnum)
      )
    ).filter(player =>
      atkRangeSelected.some(atkRangeSelected =>
        player.attackRange.includes(atkRangeSelected as AttackRangeEnum)
      )
    ).filter(player =>
      heroTypeSelected.some(heroTypeSelected =>
        player.heroType.includes(heroTypeSelected as HeroTypeEnum)
      )
    ).filter(player =>
      numDiceSelected.some(numDiceSelected =>
        player.numberOfDice.includes(numDiceSelected as NumberOfDiceEnum)
      )
    ).filter(player =>
      sideSelected.some(sideSelected =>
        player.side.includes(sideSelected as SideEnum)
      )
    ).filter(player =>
      throwsSelected.some(throwsSelected =>
        player.throws.includes(throwsSelected as ThrowsEnum)
      )
    );
  }
  toggleOption(selectedOptions: { [key: string]: boolean },option: string): void {
    selectedOptions[option] = !selectedOptions[option];
  }

}

