import { Component, OnInit, HostListener } from '@angular/core';
import { faArrowRight, faWindowRestore } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  faArrowRight = faArrowRight;
  scroll = true;
  constructor() { }

  ngOnInit() {

  }

  @HostListener('window:scroll', ['$event'])

onWindowScroll(e) {
    let element = document.querySelector('.navbar');
    // if (window.pageYOffset > element.clientHeight)
    if (window.scrollY > 500) {
      element.classList.add('navbar2');
    } else {
      element.classList.remove('navbar2');
    }
  }


}
