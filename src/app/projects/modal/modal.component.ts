import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-modal',
  // templateUrl: './modal.component.html',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() title;
  @Input() body;
  @Input() imageUrl;
  @Input() linkUrl;

  constructor(private modalService: NgbModal, private activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  dismissModal() {
    this.activeModal.dismiss();
  }

}

