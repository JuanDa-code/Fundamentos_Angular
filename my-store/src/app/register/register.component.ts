import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm = {
    name: '',
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

  onRegister() {
    this.users.forEach(user => {
      if (user.email === this.registerForm.email && user.password === this.registerForm.password) {
        if (this.messageError != '' || this.isInvalid != '') {
          console.log(this.registerForm);
        }
      } else {
        this.messageError = 'Invalid email and password combination.';
        this.isInvalid = 'is-invalid';
      }
    })
  }
}
