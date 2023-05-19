import { Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecaudosComponent } from './components/recaudos/recaudos.component';
import { ReporteComponent } from './components/reporte/reporte.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';

@Injectable()
export class CustomPaginatorIntl extends MatPaginatorIntl {
  override itemsPerPageLabel = 'Elementos por página';
  override nextPageLabel = 'Siguiente página';
  override previousPageLabel = 'Página anterior';
  override firstPageLabel = 'Primera página';
  override lastPageLabel = 'Última página';

  override getRangeLabel = (page: number, pageSize: number, length: number) => {
    if (length === 0 || pageSize === 0) {
      return `0 de ${length}`;
    }
    const startIndex = page * pageSize + 1;
    const endIndex = Math.min(startIndex + pageSize - 1, length);
    return `${startIndex} - ${endIndex} de ${length}`;
  };
}
@NgModule({
  declarations: [
    AppComponent,
    RecaudosComponent,
    ReporteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatTableModule,
    HttpClientModule,
    MatPaginatorModule
  ],
  providers: [
    { provide: MatPaginatorIntl, useClass: CustomPaginatorIntl }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
