import { Component } from '@angular/core';
import { UserService } from '../../../shared/services/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private UserService: UserService,
    private ToastrService: ToastrService,
    private Router: Router
  ) {
    localStorage.clear();
    setTimeout(() => {}, 2000);
  }
  onLoginSubmit(form: any) {
    this.UserService.login(form.value.email, form.value.password);
    this.Router.navigate(['/catalog']);
  }
  onRegisterSubmit(form: any) {
    this.UserService.register(
      form.form.value.email,
      form.form.value.password,
      form.form.value.repeatedPassword,
      form.form.value.company
    );
    this.Router.navigate(['/catalog']);
  }
}
