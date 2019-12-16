import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"]
})
export class AppComponent {
  title = "taskbox";

  task = {
    id: "1",
    title: "Test Task",
    state: "TASK_INBOX",
    value: true,
    updatedAt: new Date()
  };

  onPinTask() {
    console.log("onPinTask");
  }

  onArchiveTask() {
    console.log("onArchiveTask");
  }
}
