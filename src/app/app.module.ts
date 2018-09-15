import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";


import {AppComponent} from './app.component';
import {FrontpageService} from "./frontpage.service";
import {HttpClientModule} from "@angular/common/http";
import { TermsComponent } from './terms/terms.component';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    TermsComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [FrontpageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
