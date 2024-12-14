import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {User} from "../../../shared/models/User";

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.css']
})
export class RegistrazioneComponent implements OnInit {

  registrazioneForm: FormGroup;
  registrazioneSub: Subscription;
  passwordMismatch: boolean = false;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.registrazioneForm = new FormGroup({
      nome: new FormControl ('', Validators.required),
      cognome: new FormControl ('', Validators.required),
      username: new FormControl ('', [Validators.required, Validators.email]),
      password: new FormControl ('', Validators.required),
      confermaPassword: new FormControl ('',Validators.required),
    })
  }

  get nome(): AbstractControl {
    return this.registrazioneForm.get('nome');
  }

  get cognome(): AbstractControl {
    return this.registrazioneForm.get('cognome');
  }

  get username(): AbstractControl {
    return this.registrazioneForm.get('username');
  }

  get password(): AbstractControl {
    return this.registrazioneForm.get('password');
  }

  get confermaPassword(): AbstractControl {
    return this.registrazioneForm.get('confermaPassword');
  }

  registraUtente() {
    if(this.registrazioneForm.invalid){ return;}

    const user: User = {
      nome: this.nome.value,
      cognome: this.cognome.value,
      email: this.username.value,
      password: this.password.value,
      passwordConfirm: this.confermaPassword.value
    }

    this.registrazioneSub = this.authService.registra(user).subscribe({
      next: (response) => {
        if(response.code == 200) {
          this.router.navigateByUrl('/login');
        }
      },
      error: (err) => {
        console.error(err);
      }
    })

  }

  getErrorNomeMessage() {
    return "Inserisci nome valido";
  }

  getErrorCognomeMessage() {
    return "Inserisci cognome valido";
  }

  getErrorusernameMessage() {
    return "Inserisci email valida";
  }

  getErrorPasswordMessage() {
    return "Inserisci password valida";
  }

  getErrorConfermaPasswordMessage() {
    return "La password di conferma non coincide con la password inserita";
  }

  redirectToHome() {
    this.router.navigateByUrl('home');
  }
}
