import { Component, Input, OnInit } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  template: `
  <div class="modal-header">

    <p>{{ title }}</p>
    <h3>teste</h3>
  </div>
  <div class="modal-body">
    <button (click)="activeModal.close('resultado')"></button>
  </div>
  `
})
export class ModalContentTeste implements OnInit {
  constructor(public activeModal: NgbActiveModal) {}
  

  title: string;
  ngOnInit(): void {
  }
}
