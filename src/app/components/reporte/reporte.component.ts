
import { RecaudoService } from './../../service/recaudo.service';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit {
  @ViewChild('myDiv', { static: true }) myDiv!: ElementRef;

  constructor(private recaudoService: RecaudoService,private renderer: Renderer2) { }
 
  ngOnInit(): void {
    this.recaudoService.getReporte().subscribe((result:any) => {
      console.log(result);
      const element = this.renderer.createElement('div');
    element.innerHTML = result.reporte
    this.renderer.appendChild(this.myDiv.nativeElement, element);
    });
  }
}
