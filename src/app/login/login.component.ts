import { Component, Inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FifaService } from '../service/fifa.service';
import { Login } from '../models/user.model';
import { AsyncPipe, JsonPipe, NgIf } from '@angular/common';
import { UserService } from '../service/user.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe, NgIf, AsyncPipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(
    private fifaService: FifaService,
    private userService: UserService
  ) {}
  submitted = false;
  loginForm = new FormGroup({
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    password: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  isSuccess: any;

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    this.userService.login(this.loginForm.value as Login).pipe(first())
      subscribe( data => this.router.navigate(['/']),
  }
}
