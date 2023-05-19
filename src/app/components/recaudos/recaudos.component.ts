import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { RecaudoService } from './../../service/recaudo.service';
import { ConsultaModel } from './../../model/consulta.model';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-recaudos',
  templateUrl: './recaudos.component.html',
  styleUrls: ['./recaudos.component.css']
})
export class RecaudosComponent implements AfterViewInit {

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(private recaudoService: RecaudoService) { }
  data: ConsultaModel[]=[];
  displayedColumns: string[] = ['estacion', 'sentido', 'hora', 'categoria', 'valorTabulado', 'cantidad'];
  dataSource = new MatTableDataSource<ConsultaModel>();
  filteredData = [...this.data];
  estacion: string = '';
  categoria: string = '';
  sentido: string = '';
  hora: string = '';

  ngOnInit(): void {
    this.consultaRecaudos('');
  }
  consultaRecaudos(queryParam:string){
  this.recaudoService.getRecaudos(queryParam).subscribe((result: { Datos: ConsultaModel[] | undefined; }) => {
    console.log(result);
    this.dataSource = new MatTableDataSource<ConsultaModel>(result.Datos);
  });
}
 
  filterData(event: any) {
    let inputValue: any = event.target; 
    this.asignarValores(inputValue.id,inputValue.value)
    this.consultaRecaudos(this.organizarFiltro())
    
  }

  organizarFiltro(){
    let queryParam:string="";
    queryParam=(this.isNullOrEmpty(this.estacion)?'':`${'Estacion='}${this.estacion}${'&'}`)
    queryParam+=(this.isNullOrEmpty(this.categoria)?'':`${'Categoria='}${this.categoria}${'&'}`)
    queryParam+=(this.isNullOrEmpty(this.sentido)?'':`${'Sentido='}${this.sentido}${'&'}`)
    queryParam+=(this.isNullOrEmpty(this.hora)?'':`${'Hora='}${this.hora}${'&'}`)
    if(queryParam.length>0)
    queryParam=`${'?'}${queryParam.substring(0,queryParam.length-1)}`
    return queryParam
  }
  asignarValores(id:string,value:string){
   
      switch(id)
      {
        case"estacion":
            this.estacion=value.toLocaleUpperCase();
         break;
         case"categoria":
            this.categoria=value.toLocaleUpperCase();
         break;
         case"sentido":
            this.sentido=value.toLocaleUpperCase();
         break;
         case"hora":
            this.hora=value.toLocaleUpperCase();
         break;
    
      }
    
  }

  isNullOrEmpty(str: string): boolean {
    return str === null || str === undefined || str.trim() === "";
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
