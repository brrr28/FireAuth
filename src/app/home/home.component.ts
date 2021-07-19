import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  form!: FormGroup;
  add = false;
  user = '';
  message = '';

  constructor(public authFire: AuthService) {}
  
  ngOnInit(): void{
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  signup(): void {
    if (this.form.invalid)
            return;

    this.authFire.signUp(this.form.value.email, this.form.value.password)
    .then(() => {

      this.add = true;
      this.form.reset();
    })
    .catch((error) => {
      this.message = error.message;
    });
  }

  signin(): void {
    if (this.form.invalid)
            return;

    this.authFire.signIn(this.form.value.email, this.form.value.password)
    .then(() => {
    this.user = this.authFire.authState.email;
    this.message = '';
    this.form.reset();
    })
    .catch((error) => {
      this.message = error.message;
    });
  }

  signout(): void {
    this.authFire.signOut();
  }
}

