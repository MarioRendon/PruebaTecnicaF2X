import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RecaudoService {
  private endpoint = "https://localhost:44382/api/Consultas";
  constructor(private http: HttpClient) { }

  getRecaudos() {
    console.log("getRecaudos");
   return this.http.get(`${this.endpoint}/ConsultaRecaudos`)
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
