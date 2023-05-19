import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PruebaTecnicaF2X';

  constructor(private router: Router) { }
  redirigir() {
    this.router.navigateByUrl('/recaudos');
  }
}
