import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  activeNavItem = signal<string>('routines');

  constructor(
    public authService: AuthService,
    private router: Router
  ) {}

  setActiveNavItem(item: string): void {
    this.activeNavItem.set(item);
    
    // Navigate to the respective page
    if (item === 'routines') {
      this.router.navigate(['/routines']);
    }
  }

  onStartTraining(): void {
    this.router.navigate(['/routines']);
  }

  onLogout(): void {
    this.authService.logout();
  }
}
