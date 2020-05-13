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
  showPageNode = false;
  showPageReact = false;
  showPageIonicFirebase = false;
  constructor() { }

  ngOnInit() {
  }

  showPageAll() {
    this.showAllPage = true;
    this.showPageJavascript = false;
    this.showPageAngular = false;
    this.showPageAngular = false;
    this.showPageReact = false;
    this.showPageNode = false;
  }

  showJavascriptPage() {
    this.showPageJavascript = true;
    this.showAllPage = false;
    this.showPageAngular = false;
    this.showPageAngular = false;
    this.showPageReact = false;
    this.showPageNode = false;
  }

  showAngularPage() {
    this.showPageJavascript = false;
    this.showAllPage = false;
    this.showPageAngular = true;
    this.showPageIonicFirebase = false;
    this.showPageReact = false;
    this.showPageNode = false;
  }

  showNodePage() {
    this.showPageJavascript = false;
    this.showAllPage = false;
    this.showPageAngular = false;
    this.showPageIonicFirebase = false;
    this.showPageReact = false;
    this.showPageNode = true;
  }

  showReactPage() {
    this.showPageJavascript = false;
    this.showAllPage = false;
    this.showPageAngular = false;
    this.showPageIonicFirebase = false;
    this.showPageReact = true;
    this.showPageNode = false;
  }

  showIonicFirebasePage() {
    this.showPageIonicFirebase = true;
    this.showPageJavascript = false;
    this.showAllPage = false;
    this.showPageAngular = false;
    this.showPageReact = false;
    this.showPageNode = false;
  }





}
