import { Routes } from '@angular/router';
import {HeroCardsComponent} from "./components/hero-cards/hero-cards.component";
import {RulesComponent} from "./components/rules/rules.component";
import {BystandersCardsComponent} from "./components/bystanders-cards/bystanders-cards.component";
import {HomeComponent} from "./components/home/home.component";


export const routes: Routes = [
  { path: 'hero-cards', component: HeroCardsComponent },
  { path: 'rules', component: RulesComponent },
  { path: 'bystander-cards', component: BystandersCardsComponent },
  { path: 'home', component: HomeComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }
];
