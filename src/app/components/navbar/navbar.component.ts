import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone: true,
})
export class NavbarComponent {
  constructor(readonly themeService: ThemeService) {}

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
