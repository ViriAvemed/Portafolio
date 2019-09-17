import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HeaderComponents} from "./header/header.components";
import {ProjectsComponents} from "./header/projects/projects.components";
import { ProjectorsComponent } from './header/proyectos/projectors.component';
import { ContactoComponent } from './header/contacto/contacto.component';


const routes: Routes = [
  {path: '', component: HeaderComponents},
  {path: 'header', component: HeaderComponents, children: [
      {path: 'projects', component: ProjectsComponents},
      {path: 'proyectos', component: ProjectorsComponent},
      {path: 'contacto', component: ContactoComponent}
]},

]

@NgModule({
  imports: [RouterModule.forRoot
  (routes
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
