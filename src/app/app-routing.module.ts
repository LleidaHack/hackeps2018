import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {TermsComponent} from "./terms/terms.component";

@NgModule({
  exports: [RouterModule]
})
export class AppRoutingModule { }

const routes: Routes = [
  { path: 'terms', component: TermsComponent }
];
