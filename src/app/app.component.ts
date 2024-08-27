import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TodoComponent} from "./pages/todo/todo.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TodoComponent //Se agrego este componente
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Angular-17-Course';
}
