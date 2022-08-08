import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  showTextAntcorp: boolean;
  showTextDiamond: boolean;
  showTextYelpCamp: boolean;
  showTextBlogApp: boolean;
  showDexter: boolean;
  showskillconnect: boolean;
  showCovid: boolean;
  antcorpAdmin: boolean;
  reactPortFolio: boolean;
  hookie: boolean;
  royalOak: boolean;

  showAllPage = true;
  showFlutterFirebase = false;
  showPageAngular = false;
  showPageNode = false;
  showPageReact = false;
  showPageIonicFirebase = false;

  activeTool = 'ALL';

  tools = [
    'ALL',
    // 'VANNILA JS',
    'FLUTTER',
    // 'NODE',
    'ANGULAR',
    'REACT',
  ];

  constructor(private modalService: NgbModal,) {
    this.showTextAntcorp = false;
    this.showTextDiamond = false;
    this.showTextYelpCamp = false;
    this.showTextBlogApp = false;
    this.showDexter = false;
    this.showskillconnect = false;
    this.showCovid = false;
    this.antcorpAdmin = false;
    this.reactPortFolio = false;
    this.hookie = false;
    this.royalOak = false;
   }

  ngOnInit() {
  }


  openAntCorp() {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.title = 'Antcorp';
    modalRef.componentInstance.imageUrl = '../../../assets/Antcorp 3.PNG';
    modalRef.componentInstance.linkUrl = 'https://antcorp.com.ng';
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
    modalRef.componentInstance.linkUrl = 'https://diamondbtc.services';
    modalRef.componentInstance.body = 'Diamond BTC is a crytocurrency website that makes buying and selling of bitcoin, etherium etc very easy.';
  }

  openYelpCamp() {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.title = 'YelpCamp';
    modalRef.componentInstance.imageUrl = '../../assets/YelpCamp.PNG';
    modalRef.componentInstance.linkUrl = 'https://floating-sands-38542.herokuapp.com/';
    modalRef.componentInstance.body = `Diamond BTC is a campground website,
                                       where users can easy look for their favourite camp-site
                                       and also comments on them.`;
  }

  openBlogApp() {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.title = 'BlogApp';
    modalRef.componentInstance.imageUrl = '../../assets/Blog App.PNG';
    modalRef.componentInstance.linkUrl = 'https://pacific-shelf-39954.herokuapp.com/blogs';
    modalRef.componentInstance.body = 'A Blog-App where discussion or information are been published regularly.';
  }

  openCovidLiveUpdate() {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.title = 'Covid Live Updade';
    modalRef.componentInstance.imageUrl = '../../assets/covidliveupdate.PNG';
    modalRef.componentInstance.linkUrl = 'https://covidliveupdates.netlify.app/';
    modalRef.componentInstance.body = 'A website that gives users live update of worldwide cases of covid19 aka corona virus.';
  }

  openBitnob() {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.title = 'Dexter';
    modalRef.componentInstance.imageUrl = '../../assets/bitnob.png';
    modalRef.componentInstance.linkUrl = 'https://play.google.com/store/apps/details?id=com.app.bitnob&hl=en&gl=US';
    modalRef.componentInstance.body = 'Imagine a safe, instant, cheap and modern way to pay and get paid globally. This is Bitnob, a gem in your pocket. Join the fastest growing Bitcoin app in Africa today.';
  }

  openSkillConnect() {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.title = 'Skill Connect';
    modalRef.componentInstance.imageUrl = '../../assets/skill-connect.jpg';
    modalRef.componentInstance.linkUrl = '#';
    modalRef.componentInstance.body = 'A mobile platform for skilled and talented people who are willing to monetize their skills; to work and earn money by providing professional services to its customers on demand.';
  }

  openHookie() {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.title = 'Mzaka';
    modalRef.componentInstance.imageUrl = '../../assets/mzaka.png';
    modalRef.componentInstance.linkUrl = 'https://play.google.com/store/apps/details?id=com.abraham.mzaka';
    modalRef.componentInstance.body = 'A mobile platform for constructing your building remotely, Mzaka helps you track your building projects and gives you live updates on general happenings';
  }

  openAntAdmin() {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.title = 'AntCorp Admin Dashboard';
    modalRef.componentInstance.imageUrl = '../../assets/Antcorp admin 3.PNG';
    modalRef.componentInstance.linkUrl = 'https://admin-pan.antcorp.com.ng/';
    modalRef.componentInstance.body = `An Admin Dashboard for monitoring antcorp website platform,
                                      An admin can also perform all crud operation from this dashboard`;
  }

  openReactPortFolio() {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.title = 'React Port-Folio';
    modalRef.componentInstance.imageUrl = '../../assets/react.PNG';
    modalRef.componentInstance.linkUrl = 'https://davoucii.netlify.com/';
    modalRef.componentInstance.body = `My first port-folio page built with reactJs`;
  }

  openhookie() {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.title = 'RGB Game';
    modalRef.componentInstance.imageUrl = '../../assets/newnew.PNG';
    modalRef.componentInstance.linkUrl = 'https://codepen.io/dav4thevid/full/YdqBNx';
    modalRef.componentInstance.body = `This is an app that helps you master RGB color code`;
  }

  openRoyalOak() {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.title = 'The Royal Oak Hotel';
    modalRef.componentInstance.imageUrl = '../../assets//The Royal Oak.PNG';
    modalRef.componentInstance.linkUrl = 'https://crownwell.github.io/';
    modalRef.componentInstance.body = 'A landing page for Royal Oak Hotel, where users check for rooms price and book online.';
  }


  setTools(tool: any) {
    this.activeTool = tool;
    console.log(tool);
    if (tool === 'ALL') {
      this.showAllPage = true;
      this.showFlutterFirebase = false;
      this.showPageNode = false;
      this.showPageReact = false;
      this.showPageAngular = false;
    } else if ( tool === 'FLUTTER') {
      this.showFlutterFirebase = true;
      this.showPageNode = false;
      this.showAllPage = false;
      this.showPageReact = false;
      this.showPageAngular = false;
    } else if (tool === 'NODE') {
      this.showPageNode = true;
      this.showFlutterFirebase = false;
      this.showAllPage = false;
      this.showPageReact = false;
      this.showPageAngular = false;
    } else if (tool === 'ANGULAR') {
      this.showPageAngular = true;
      this.showAllPage = false;
      this.showFlutterFirebase = false;
      this.showPageNode = false;
      this.showPageReact = false;
    } else if (tool === 'REACT') {
      this.showPageReact = true;
      this.showPageAngular = false;
      this.showFlutterFirebase = false;
      this.showAllPage = false;
      this.showPageNode = false;
    }
  }

}
