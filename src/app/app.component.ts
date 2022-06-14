import { Component } from '@angular/core';
import { delay, map, withLatestFrom } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-pfe';



  showDefaultCookiesNotifier: boolean = false;
  cookieMessage = "hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh";
  cookieDismiss: any;
  cookieLinkText: any;

  constructor( ) {}

  ngOnInit() {
    this.showDefaultCookiesNotifier= true;
    let cc = window as any;
       cc.cookieconsent.initialise({
         palette: {
           popup: {
             background: "#164969"
           },
           button: {
             background: "#ffe000",
             text: "#164969"
           }
         },
         theme: "classic",
         content: {
           message: this.cookieMessage,
           dismiss: this.cookieDismiss,
           link: this.cookieLinkText,
         }
       });
  }
}
