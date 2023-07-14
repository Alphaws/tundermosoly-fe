import {Component, OnInit} from '@angular/core';
import {initFlowbite} from "flowbite";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string = 'Tündérmosoly';
  appLang: string = 'hu';

  constructor(
    private translate: TranslateService
  ) {}

  ngOnInit() {
    initFlowbite();
    console.log('Lang:', this.translate.currentLang);
  }

  translateLanguageTo(language: string) {
    this.translate.use(language);
    localStorage.setItem('app-locale', language);
    console.log('Lang:', this.translate.currentLang);
  }
}
