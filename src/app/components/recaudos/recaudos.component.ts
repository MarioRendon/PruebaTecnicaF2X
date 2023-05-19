import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { RecaudoService } from './../../service/recaudo.service';
import { ConsultaModel } from './../../model/consulta.model';

@Component({
  selector: 'app-recaudos',
  templateUrl: './recaudos.component.html',
  styleUrls: ['./recaudos.component.css']
})
export class RecaudosComponent implements AfterViewInit {
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(private recaudoService: RecaudoService) { }

  displayedColumns: string[] = ['estacion', 'sentido', 'hora', 'categoria', 'valorTabulado', 'cantidad'];
  dataSource = new MatTableDataSource<ConsultaModel>();

  ngOnInit(): void {
    this.recaudoService.getRecaudos().subscribe((result: { Datos: ConsultaModel[] | undefined; }) => {
      console.log(result);
      this.dataSource = new MatTableDataSource<ConsultaModel>(result.Datos);
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}