import {Routes} from '@angular/router';
import {TermsComponent} from './app/terms/terms.component';
import {FrontpageComponent} from "./app/frontpage/frontpage.component";

export const routes: Routes = [
  {path:'', redirectTo: 'welcome', pathMatch: 'full'},
  {path: 'welcome', component: FrontpageComponent},
  {path: 'terms', component: TermsComponent}
];
