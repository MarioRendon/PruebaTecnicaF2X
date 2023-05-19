import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecaudosComponent } from './components/recaudos/recaudos.component';


const routes: Routes = [

  { path: 'recaudos', component: RecaudosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
