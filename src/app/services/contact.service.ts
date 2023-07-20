import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(
    private http: HttpClient,
  ) { }

  sendContactForm(data: any)
  {
    const url: string = '';
    return this.http.post(url, data);
  }


}
