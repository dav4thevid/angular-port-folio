import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  dismissModal() {
    this.modalService.dismissAll;
  }

}
