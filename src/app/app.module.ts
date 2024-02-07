import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GadgetsComponent } from './gadgets/gadgets.component';
import { EditGadgetsComponent } from './edit-gadgets/edit-gadgets.component';
import { AddGadgetsComponent } from './add-gadgets/add-gadgets.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GadgetsComponent,
    EditGadgetsComponent,
    AddGadgetsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
