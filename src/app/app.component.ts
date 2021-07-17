import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  auth = false;

    email = new FormControl('', [Validators.required, Validators.email]);
    password = new FormControl('', [Validators.required]);
    name = new FormControl('', [Validators.required]);
  
  ngOnInit(): void{
    console.log('hello');
  }

  login(): void {
    console.log(this.email.value, this.password.value);
    this.auth = true;
  }
}
