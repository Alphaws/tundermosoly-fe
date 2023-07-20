import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup = new FormGroup<any>({
    lastName: new FormControl('', [Validators.required]),
    firstName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required]),
  });

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {}

}
