import { ModalComponent } from './modal/modal.component';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {faFighterJet} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  showTextAntcorp: boolean;
  showTextDiamond: boolean;
  showTextYelpCamp: boolean;
  showTextBlogApp: boolean;
  showPataApp: boolean;
  antcorpAdmin: boolean;
  reactPortFolio: boolean;
  rgbGame: boolean;
  antcorpUser: boolean;

    constructor(
      private modalService: NgbModal,
    ) {
    this.showTextAntcorp = false;
    this.showTextDiamond = false;
    this.showTextYelpCamp = false;
    this.showTextBlogApp = false;
    this.showPataApp = false;
    this.antcorpAdmin = false;
    this.reactPortFolio = false;
    this.rgbGame = false;
    this.antcorpUser = false;
   }

  ngOnInit() {
  }

  openModal() {
    this.modalService.open(ModalComponent);
  }

  showAllPage = true;
  showPageJavascript = false;
  showPageAngular = false;
  showPageNode = false;
  showPageReact = false;
  showPageIonicFirebase = false;

  activeTool = 'ALL';

  tools = [
    'ALL',
    'VANNILA JS',
    'NODE',
    'ANGULAR',
    'REACT',
  ];


  setTools(tool) {
    this.activeTool = tool;
    console.log(tool);
    if (tool === 'ALL') {
      this.showAllPage = true;
      this.showPageJavascript = false;
      this.showPageNode = false;
      this.showPageReact = false;
      this.showPageAngular = false;
    } else if ( tool === 'VANNILA JS') {
      this.showPageJavascript = true;
      this.showPageNode = false;
      this.showAllPage = false;
      this.showPageReact = false;
      this.showPageAngular = false;
    } else if (tool === 'NODE') {
      this.showPageNode = true;
      this.showPageJavascript = false;
      this.showAllPage = false;
      this.showPageReact = false;
      this.showPageAngular = false;
    } else if (tool === 'ANGULAR') {
      this.showPageAngular = true;
      this.showAllPage = false;
      this.showPageJavascript = false;
      this.showPageNode = false;
      this.showPageReact = false;
    } else if (tool === 'REACT') {
      this.showPageReact = true;
      this.showPageAngular = false;
      this.showPageJavascript = false;
      this.showAllPage = false;
      this.showPageNode = false;
    }
  }
}
