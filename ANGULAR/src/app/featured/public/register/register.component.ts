import { Component } from '@angular/core';
import { UserService } from '../../../shared/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private UserService: UserService, private Router: Router) {}

  ngAfterViewInit() {
    localStorage.clear();
  }

  onRegisterSubmit(form: any) {
    console.log(form.form.value);
      this.UserService.register(
        form.form.value.email,
        form.form.value.password,
        form.form.value.repeatedPassword,
        form.form.value.company,
        form.form.value.firstName,
        form.form.value.lastName,
        form.form.value.selectUserType,
      );


  }
}
