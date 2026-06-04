import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private router : Router;

  constructor (router : Router)
  {
    this.router = router;
  }

  ngOnInit() {
    this.router.events.subscribe(x => {
      if(x instanceof NavigationEnd)
      {
        window.scrollTo(0, 0);
      }
    });
  }
  title = 'pixelperfect';
}

