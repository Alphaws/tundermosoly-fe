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
  appLang: string = localStorage.getItem('app-locale') || 'hu';

  constructor(
    public translate: TranslateService
  ) {
    translate.addLangs(['hu', 'en']);
  }

  ngOnInit() {
    initFlowbite();
  }

  translateLanguageTo(language: string) {
    this.translate.use(language);
    this.appLang = language;
    localStorage.setItem('app-locale', language);
  }
}
