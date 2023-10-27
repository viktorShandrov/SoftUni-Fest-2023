import {AfterViewInit, Component} from '@angular/core';
import { UserService } from '../../../shared/services/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements AfterViewInit{
  constructor(
    private UserService: UserService,
    private ToastrService: ToastrService,
    private Router: Router
  ) {
    // setTimeout(() => {}, 2000);
  }
  ngAfterViewInit() {
    localStorage.clear();

  }

  onLoginSubmit(form: any) {
    this.UserService.login(form.value.email, form.value.password);

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
