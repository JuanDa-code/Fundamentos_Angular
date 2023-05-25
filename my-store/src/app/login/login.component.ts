import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm = {
    email: '',
    password: '',
  }

  messageError = '';
  isInvalid = '';

  users = [
    {
      email: 'juan@email.com',
      password: 'juan123',
    },
    {
      email: 'david@email.com',
      password: 'david123',
    }
  ]

  onLogin() {
    this.users.forEach(user => {
      if (user.email === this.loginForm.email && user.password === this.loginForm.password) {
        console.log(this.loginForm);
      } else {
        this.messageError = 'Invalid email and password combination.';
        this.isInvalid = 'is-invalid';
      }
    })
  }
}
