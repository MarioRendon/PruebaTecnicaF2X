import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecaudosComponent } from './recaudos.component';
import { ConsultaModel } from 'src/app/model/consulta.model';
import { of } from 'rxjs/internal/observable/of';
import { MatTableDataSource } from '@angular/material/table';
import { RecaudoService } from 'src/app/service/recaudo.service';

describe('RecaudosComponent', () => {
  let component: RecaudosComponent;
  let fixture: ComponentFixture<RecaudosComponent>;
  let recaudoService: RecaudoService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecaudosComponent]
    });
    fixture = TestBed.createComponent(RecaudosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Pruebas donde trae registros para llegar el dataSource', () => {
    const queryParam = '?Registro=1000';
    const mockData: ConsultaModel[] = [
      { Cantidad:1,Categoria:"VI",Estacion:"ANDES",Hora:"1",Sentido: "BOG-CHI",ValorTabulado: 1255800},
      { Cantidad:100,Categoria:"I",Estacion:"ANDES",Hora:"11",Sentido: "BOG-CHI",ValorTabulado: 2255800 }
    ];
    const mockResult = { Datos: mockData };

    spyOn(recaudoService, 'getRecaudos').and.returnValue(of(mockResult));

    component.consultaRecaudos(queryParam);

    expect(recaudoService.getRecaudos).toHaveBeenCalledWith(queryParam);
    expect(component.dataSource).toEqual(new MatTableDataSource(mockData));
  });
});
