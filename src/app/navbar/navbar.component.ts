import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  @HostListener('window:scroll', ['$event'])

  onWindowScroll(e:any) {
      let element = document.querySelector('.navbar');
      // if (window.pageYOffset > element.clientHeight)
      if (window.scrollY > 500) {
        element?.classList.add('navbar2');
        console.log('scrolled');
      } else {
        element?.classList.remove('navbar2');

    }  console.log('scrolled');
      }



}
