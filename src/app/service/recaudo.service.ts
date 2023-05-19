import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConsultaModel } from '../model/consulta.model';
@Injectable({
  providedIn: 'root'
})
export class RecaudoService {
  private endpoint = "https://localhost:44382/api/Consultas";
  constructor(private http: HttpClient) { }

  getRecaudos(queryParam:string) {
   return this.http.get(`${this.endpoint}/ConsultaRecaudos${queryParam}`)
     .pipe(
       map((result: any) => {
         return result;

       }),
     );
 }

 getReporte() {
 return this.http.get(`${this.endpoint}/Reporte`)
   .pipe(
     map((result: any) => {
       return result;

     }),
   );
}
}
