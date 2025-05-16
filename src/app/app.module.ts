import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // If you use routing

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    // other components here
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]), // Add your routes here if any
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
