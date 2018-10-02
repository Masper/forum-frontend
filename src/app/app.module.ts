import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http' ;
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { DataretrieverComponent } from './dataretriever/dataretriever.component';

@NgModule({
  declarations: [
    AppComponent,
    DataretrieverComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
