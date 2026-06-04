import { ViewportScroller } from '@angular/common';
import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from "jquery";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    
  isSticky: boolean = false;

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 250;
  }
  constructor(
    private scroller: ViewportScroller, 
    private router: Router,
    
  ) { }

  ngOnInit(): void {
    $(document).ready(function(){

      $('.navbar-nav .nav-link').click(function(){
        $('.navbar-nav .nav-link').removeClass("active");
        $(this).addClass("active");
    });
  });
  }
  
  goHome(){
    this.scroller.scrollToAnchor('backHome');
  }
  goAbout(){
    this.scroller.scrollToAnchor('about');
  }
  goService(){
    
    this.scroller.scrollToAnchor('service');
  }
  goTesti(){
    this.scroller.scrollToAnchor('testmon');
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




