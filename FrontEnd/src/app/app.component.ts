import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { AuthLoginService } from './Services/auth-login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'IOT-project';
 /* constructor(private authService: AuthLoginService) {
    // check for existing session here
    const sessionExists = true; // replace with your session-checking logic
    if (sessionExists) {
      this.authService.state= true;
    }
  }*/
}
