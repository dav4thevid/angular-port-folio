import { Component, OnInit } from '@angular/core';
import {faFighterJet} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  showAllPage = true;
  showPageJavascript = false;
  showPageAngular = false;
  constructor() { }

  ngOnInit() {
  }

  showPageAll() {
    this.showAllPage = true;
    this.showPageJavascript = false;
    this.showPageAngular = false;
  }

  showJavascriptPage() {
    this.showPageJavascript = true;
    this.showAllPage = false;
    this.showPageAngular = false;
  }

  showAngularPage() {
    this.showPageJavascript = false;
    this.showAllPage = false;
    this.showPageAngular = true;
  }





}
