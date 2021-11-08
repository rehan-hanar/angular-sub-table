import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DemoMaterialModule } from './material.module';
import { SubTableComponent } from './sub-table/sub-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    DemoMaterialModule,
    BrowserAnimationsModule,
  ],
  declarations: [AppComponent, HelloComponent, SubTableComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
