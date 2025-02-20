import { Component, OnInit,Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-view-all-emp-delail',
  templateUrl: './view-all-emp-delail.component.html',
  styleUrls: ['./view-all-emp-delail.component.scss']
})
export class ViewAllEmpDelailComponent implements OnInit {
  @Input() nic: number;
  @Input() firstname: string;

  myForm: FormGroup;

  constructor(public activeModal: NgbActiveModal,  private formBuilder: FormBuilder) {
    this.createForm();
   }


  ngOnInit() {
  }
  private createForm() {
    this.myForm = this.formBuilder.group({
      username: '',
      password: ''
    });
  }
  closeModal() {
    this.activeModal.close('Modal Closed');
  }

  private submitForm() {
    this.activeModal.close(this.myForm.value);
  }
  
}
