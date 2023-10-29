import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CadastroHeroisComponent } from './herois/cadastro-herois/cadastro-herois.component';
import { ListarHeroisComponent } from './herois/listar-herois/listar-herois.component';
import { EditarHeroisComponent } from './herois/editar-herois/editar-herois.component';

const routes: Routes = [
  { path: '', component: ListarHeroisComponent },
  { path: 'listar-herois', component: ListarHeroisComponent },
  { path: 'cadastro-herois', component: CadastroHeroisComponent },
  { path: 'editar-herois', component: EditarHeroisComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
