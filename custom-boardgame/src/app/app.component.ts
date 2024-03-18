import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {NgbCollapse} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NgOptimizedImage, NgbCollapse, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'custom-boardgame';
  isCollapsed = false;
  isMobileView: boolean = false;
  isWebView: boolean = false;
  isMenuOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.checkIfView();
    window.addEventListener('resize', () => {
      this.checkIfView();
    });
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  checkIfView(): void {
    this.isMobileView = window.innerWidth <= 768; // Example breakpoint for mobile view
    this.isWebView = window.innerWidth > 768;
  }
}
