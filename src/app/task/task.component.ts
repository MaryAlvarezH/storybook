import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-task",
  templateUrl: "./task.component.html"
})
export class TaskComponent implements OnInit {
  title: string;
  @Input() task: any;
  @Output() onPinTask: EventEmitter<any> = new EventEmitter();
  @Output() onArchiveTask: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onPin(id) {
    console.log("task", this.task);
    console.log("on Pin id", id);
    this.onPinTask.emit(id);
  }

  onArchive(id) {
    console.log("task", this.task);
    console.log("onArchive id", id);
    this.onArchiveTask.emit(id);
  }
}
