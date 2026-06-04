import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  
  constructor(
    private scroller: ViewportScroller, 
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  goTop(){
    this.scroller.scrollToAnchor('backHome');
  }
  goDown2() {
    //this.scroller.scrollToAnchor("targetGreen");
    document.getElementById('targetGreen')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
}


