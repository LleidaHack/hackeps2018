import { Component } from '@angular/core';
import {FrontpageService} from "./frontpage.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  email = '';
  submitted = false;

  constructor(private frontpageService: FrontpageService){

  }

  subscribe(){
    if(this.email.match(/^\S+@\w+.\w+$/))
      this.frontpageService.sendMail(this.email).subscribe(() => this.submitted = true, (e) => alert(e));
    else
      alert("El formato del email no es correcto.");
  }
}
