import { Component } from '@angular/core';
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {ComplaintModel} from "./Model/complaint.model";
import {ModelResponse} from "./Model/complaintResponse.model";
import {CommonModule} from "@angular/common";


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    MatFormField,
    FormsModule, CommonModule,
    MatInputModule, MatButtonModule, MatFormFieldModule,
    HttpClientModule
  ],
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AiQa';
  loading: boolean = false;
  complaint: string = '';
  response: ModelResponse | null = null;

  constructor(private http: HttpClient) {}

  handleSubmit(): void {
    this.loading = true;
    const complaintModel = {
      text: this.complaint
    };

    console.log(this.complaint);
    this.http.post<ModelResponse>('http://localhost:5269/TextClassification/Claude', complaintModel).subscribe(
      (res: ModelResponse) => {
        this.response = res;
        this.loading = false;
        console.log(this.complaint)
      },
      (error) => {
        console.error('API Error:', error);
        this.loading = false;
        // Optionally, set response to null or handle error display
        this.response = null;
      }
    );
  }
}
