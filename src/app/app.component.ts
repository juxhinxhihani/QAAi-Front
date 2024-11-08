import { Component } from '@angular/core';
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    MatFormField,
    FormsModule,
    MatInputModule, MatButtonModule, MatFormFieldModule
  ],
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'QAAI';

  complaint: string = '';
  response: string = '';

  handleSubmit(): void {
    this.response = `We have received your complaint: ${this.complaint}`;
  }
}
