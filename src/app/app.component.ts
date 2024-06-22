import { Component, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FifaService } from './services/fifa.service';
import { AsyncPipe, JsonPipe, NgIf } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NavigationComponent } from './navigation/navigation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NgIf,
    AsyncPipe,
    HttpClientModule,
    JsonPipe,
    NavigationComponent,
  ],
  providers: [FifaService, HttpClient],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private fifaService: FifaService) {}
  token$: any;
  registerUser() {
    this.token$ = this.fifaService.registerUser({
      email: '1angularUser@gmail.com',
      password: 'angularUserPassword',
    });
  }
  title = 'fifa-ang';
}
