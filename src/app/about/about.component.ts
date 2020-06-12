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
  showPataTapApp: boolean;
  antcorpAdmin: boolean;
  reactPortFolio: boolean;
  rgbGame: boolean;
  antcorpUser: boolean;

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


    constructor(
      private modalService: NgbModal,
    ) {
    this.showTextAntcorp = false;
    this.showTextDiamond = false;
    this.showTextYelpCamp = false;
    this.showTextBlogApp = false;
    this.showPataTapApp = false;
    this.antcorpAdmin = false;
    this.reactPortFolio = false;
    this.rgbGame = false;
    this.antcorpUser = false;
   }

  ngOnInit() {
  }

  openAntCorp() {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.title = 'Antcorp';
    modalRef.componentInstance.imageUrl = '../../../assets/Antcorp 3.PNG';
    modalRef.componentInstance.body = `Antcorp is a financial expertise
                                       and cutting-edge technology that help groups, cooperatives,
                                       and communities achieve their goals by planning,
                                       saving and investing their money in a convenient,
                                       reliable and highly rewarding manner.`;
  }

  openDiamond() {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.title = 'DiamondBtc';
    modalRef.componentInstance.imageUrl = '../../assets/diamond.PNG';
    modalRef.componentInstance.body = 'Diamond BTC is a crytocurrency website that makes buying of bitcoin, etherium etc very easy.';
  }

  openYelpCamp() {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.title = 'YelpCamp';
    modalRef.componentInstance.imageUrl = '../../assets/YelpCamp.PNG';
    modalRef.componentInstance.body = 'Diamond BTC is a campground website, where users can easy look for their favourite camp-site. and also comments on them.';
  }

  openBlogApp() {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.title = 'BlogApp';
    modalRef.componentInstance.imageUrl = '../../assets/Blog App.PNG';
    modalRef.componentInstance.body = 'A Blog-App where discussion or information are been published regularly.';
  }


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
