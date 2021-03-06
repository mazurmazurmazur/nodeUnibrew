import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-flags',
  templateUrl: './flags.component.html',
  styleUrls: ['./flags.component.css']
})
export class FlagsComponent {
  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'dk', 'de', 'pl', 'ro', 'bg']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|dk|de|pl|ro|bg/) ? browserLang : 'en');
  }
  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
