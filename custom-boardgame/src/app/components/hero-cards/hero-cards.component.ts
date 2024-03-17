import {Component, inject, OnInit, TemplateRef} from '@angular/core';
import {ZombiePlayers} from "../../constant/zombie-players";
import {CommonModule} from "@angular/common";
import {NgbActiveModal, NgbInputDatepicker, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {HeroModel} from "../../model/hero.model";

@Component({
  selector: 'app-hero-cards',
  standalone: true,
  imports: [CommonModule, NgbInputDatepicker],
  providers: [NgbActiveModal],
  templateUrl: './hero-cards.component.html',
  styleUrl: './hero-cards.component.scss'
})
export class HeroCardsComponent {
  protected readonly ZombiePlayers = ZombiePlayers;
  hero: HeroModel | undefined;
  imgUrl= "";

  private modalService = inject(NgbModal);
  closeResult = '';

  openFullscreen(content: TemplateRef<any>, hero: HeroModel) {
    this.hero = hero;
    this.modalService.open(content, { size: "xl" });
  }
}

