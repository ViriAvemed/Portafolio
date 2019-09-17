import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponents } from './header/header.components';
import { ProjectsComponents } from './header/projects/projects.components';
import { ProjectorsComponent } from './header/proyectos/projectors.component';
import { ContactoComponent } from './header/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent, HeaderComponents,ProjectsComponents,ProjectorsComponent, ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

