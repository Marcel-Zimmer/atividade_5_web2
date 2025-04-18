import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SubtracaoComponent } from './pages/subtracao';

@Component({
  selector: 'app-root',
  standalone:true, 
  imports: [CommonModule,RouterOutlet,SubtracaoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'subtracao';
}
