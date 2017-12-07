import { AuthService } from 'shared/services/auth.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
//   @ViewChild('f') slForm: NgForm;
  constructor(private auth: AuthService) {
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
      }

  onSignin(form: NgForm) {
      const email = form.value.email;
      const password = form.value.password;
      this.auth.signinUser(email, password);
  }
  // clear() {
  //   this.slForm.reset();
  // }
  login() {
    this.auth.login();
  }

}
