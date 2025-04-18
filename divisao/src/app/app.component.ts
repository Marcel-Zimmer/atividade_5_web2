import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DivisaoComponent } from './pages/divisao';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [CommonModule,RouterOutlet,DivisaoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'divisao';
}
