import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OSCompComponent } from './oscomp/oscomp.component';
import { PLCompComponent } from './plcomp/plcomp.component';
import { DBCompComponent } from './dbcomp/dbcomp.component';

@NgModule({
  declarations: [
    AppComponent,
    OSCompComponent,
    PLCompComponent,
    DBCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
