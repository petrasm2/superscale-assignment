import { Component } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Task} from '../../models/task.model';

@Component({
  selector: 'app-confirm-delete-task',
  templateUrl: './confirm-delete-task.component.html',
  styleUrls: ['./confirm-delete-task.component.scss']
})
export class ConfirmDeleteTaskComponent {

  task?: Task;

  constructor(public modal: NgbActiveModal) {
  }

}
