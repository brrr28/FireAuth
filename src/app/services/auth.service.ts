import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  LoggedIn = false;
  authState: any = null;
  user: any;

  constructor(public firebaseAuth: AngularFireAuth, private router: Router){
    this.firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        this.LoggedIn = true;
      } else {
        this.LoggedIn = false;
      }
    });    
  }

  async signIn(email: string, password: string): Promise<void> {
    try {
      const userObj = await this.firebaseAuth.signInWithEmailAndPassword(email, password);
      this.router.navigate(['/new']);
      this.authState = userObj.user;
      console.log('You are in acc', userObj.user?.email);
    } catch (error) {
      console.log(error.message);
    }
    } 
  
  
  async signUp(email: string, password: string): Promise<void> {
    try {
      const userObj = await this.firebaseAuth.createUserWithEmailAndPassword(email, password);
      this.user = userObj.user;
      console.log('Registered', userObj.user?.email);
      } catch (error) {
      console.log(error);
      throw error;
    }
  }

  signOut(): void {
    this.firebaseAuth.signOut();
    this.authState = null;
  }

  isLoggedIn(): boolean{
    return !!this.authState;
  }

}
