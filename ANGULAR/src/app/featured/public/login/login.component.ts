import { AfterViewInit, Component } from '@angular/core';
import { UserService } from '../../../shared/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements AfterViewInit {
  constructor(private UserService: UserService) {
    // setTimeout(() => {}, 2000);
  }
  ngAfterViewInit() {
    localStorage.clear();
  }

  onLoginSubmit(form: any) {
    this.UserService.login(form.value.email, form.value.password);
  }
}
