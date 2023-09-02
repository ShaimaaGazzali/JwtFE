import { Component, OnInit } from '@angular/core';
import { Task } from '../../Models/task';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  public taskList: Task[] = [];

  constructor(private service: AppService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(){
    this.service.geTaskList().subscribe((res: any) => {
    this.taskList = res;
    });
  }

}
