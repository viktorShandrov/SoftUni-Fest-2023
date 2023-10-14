import { Component } from '@angular/core';
import { UserService } from '../../../shared/services/user.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private UserService: UserService,
    private ToastrService: ToastrService
  ) {
    localStorage.clear();
    setTimeout(() => {}, 2000);
  }
  onLoginSubmit(form: any) {
    this.UserService.login(form.value.email, form.value.password);
  }
  onRegisterSubmit(form: any) {
    this.UserService.register(
      form.form.value.username,
      form.form.value.email,
      form.form.value.password,
      form.form.value.repeatedPassword
    );
  }
}
