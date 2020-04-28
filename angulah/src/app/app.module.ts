import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CamelCasePipe } from './pipes/camel-case.pipe';

@NgModule({
  declarations: [ // componenten, pipes, directives
    AppComponent,
    CamelCasePipe
  ],
  imports: [ // modules
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [], // services (dependency injection) & globale instellingen
  bootstrap: [AppComponent]
})
export class AppModule { }
