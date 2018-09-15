import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";


import {AppComponent} from './app.component';
import {FrontpageService} from "./frontpage/frontpage.service";
import {HttpClientModule} from "@angular/common/http";
import { TermsComponent } from './terms/terms.component';
import {RouterModule} from "@angular/router";
import {routes} from "../app.routing";
import { FrontpageComponent } from './frontpage/frontpage.component';


@NgModule({
  declarations: [
    AppComponent,
    TermsComponent,
    FrontpageComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [FrontpageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
