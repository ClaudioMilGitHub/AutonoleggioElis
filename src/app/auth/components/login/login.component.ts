import {Component, OnDestroy, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";
import {User} from "../../../shared/models/User";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy{

  loginForm: FormGroup;
  loginSub: Subscription;
  hide: boolean;
  showError: boolean;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    })
  }

  get username(): AbstractControl {
    return this.loginForm.get('username');
  }

  get password(): AbstractControl {
    return this.loginForm.get('password');
  }

  login(): void {
    if(this.loginForm.invalid) {return;}
    const user: User = {
      username: this.username.value,
      password: this.password.value
    }
    this.loginSub = this.authService.login(user).subscribe(
      {
        next: (esito => {
          if(esito.code == 200) {
            const userLogged: User = this.authService.userDecoded;
            if(userLogged.ruolo == 0) {
              this.router.navigateByUrl('/admin');
            } else {
              this.router.navigateByUrl('/utente/dashboardUtente');
            }
          } else {
            this.showError = true;
            this.router.navigateByUrl('/login');
          }
        })
      }
    )
  }

  ngOnDestroy() {}


  getErrorEmailMessage() {
    return "Inserisci email valida";
  }

  getErrorPasswordMessage() {
    return "Inserisci password valida";
  }

  redirectToRegistra() {
    this.router.navigateByUrl('registra').then(
      (success) => {
        if (success) {
          console.log(success);
        } else {
          console.log('Navigazione fallita!');
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
