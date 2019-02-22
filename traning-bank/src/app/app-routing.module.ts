import { HomeLogadaComponent } from './home-logada/home-logada.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { CadastroClientesComponent } from './cadastro-clientes/cadastro-clientes.component';



const routes: Routes = [
  { path: '', component: ContentComponent },
  { path: 'cadastro-clientes', component: CadastroClientesComponent },
  { path: 'home-logada', component: HomeLogadaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
