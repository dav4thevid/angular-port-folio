import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-modal',
  // templateUrl: './modal.component.html',
  template: `
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title ">{{title}}</h3>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close" (click) = "dismissModal()">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>

      <div class = "modal-image">

        <img class = "img-fluid img-responsive" [src] = "imageUrl">
      </div>
      <div class="modal-body">
        <p>{{body}}</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary">View Website</button>
      </div>
    </div>`
,
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() title;

  constructor(private modalService: NgbModal, private activeModal : NgbActiveModal) { }

  ngOnInit() {
  }

  dismissModal() {
    this.modalService.dismissAll();
  }

}

// Antcorp is a financial expertise and cutting-edge technology that help groups, cooperatives, and communities achieve their goals by planning, saving and investing their money in a convenient, reliable and highly rewarding manner.
