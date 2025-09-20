import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone:false,
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  showFooter = false;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        const url = event.urlAfterRedirects;
        this.showFooter = url === '/' || url.startsWith('/#');
        
        
        const fragment = url.split('#')[1];
        if (fragment) {
          setTimeout(() => {
            const el = document.getElementById(fragment);
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 100);
        }
      });
  }
}
