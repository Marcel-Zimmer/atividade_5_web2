import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MultiplicaoComponent } from './pages/multiplicao';

@Component({
  selector: 'app-root',
  standalone:true, 
  imports: [CommonModule, RouterOutlet, MultiplicaoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'multiplicacao';
}
