import { Component, OnInit, HostListener } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

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
    if (window.pageYOffset > element.clientHeight)

    {
      // console.dir(element)
      element.classList.add('navbar2');
    } else {
      element.classList.remove('navbar2');
    }
  }




//handle all page scrolling
  // @HostListener('window:scroll', ['$event'])
  //   scrollHandler(event) {
  //     // console.debug("Scroll Event");
  //     // console.log("i am scrolling");
  //     if (event) {
  //         this.scroll = false;
  //         console.log('i am scrolling');
  //     } else {
  //       this.scroll =  true;
  //     }
  //   }

//handle only div scrolling
    // @HostListener('scroll', ['$event'])
    //     scrollHandler(event) {
    //       console.debug("Scroll Event");
    //     }





//   myNav = document.getElementById('mynav');
//   window.onscroll = function () {
//     "use strict";
//     if (document.body.scrollTop >= 200 ) {
//         myNav.classList.add("nav-colored");
//         myNav.classList.remove("nav-transparent");
//     }
//     else {
//         myNav.classList.add("nav-transparent");
//         myNav.classList.remove("nav-colored");
//     }
// };

}
