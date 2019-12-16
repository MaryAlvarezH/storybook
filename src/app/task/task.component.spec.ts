import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { TaskComponent } from "./task.component";
import { action } from "@storybook/addon-actions";
import { storiesOf, moduleMetadata } from "@storybook/angular";

describe("TaskComponent", () => {
  let component: TaskComponent;
  let fixture: ComponentFixture<TaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TaskComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

// export const task = {
//   id: "1",
//   title: "Test Task",
//   state: "TASK_INBOX",
//   updatedAt: new Date(2018, 0, 1, 9, 0)
// };

// export const actions = {
//   onPinTask: action("onPinTask"),
//   onArchiveTask: action("onArchiveTask")
// };

// storiesOf("Task", module)
//   .addDecorator(
//     moduleMetadata({
//       declarations: [TaskComponent]
//     })
//   )
//   .add("default", () => {
//     return {
//       template: `<app-task [task]="task" (onPinTask)="onPinTask($event)" (onArchiveTask)="onArchiveTask($event)" ></app-task>`,
//       props: {
//         task,
//         onPinTask: actions.onPinTask,
//         onArchiveTask: actions.onArchiveTask
//       }
//     };
//   })
//   .add("pinned", () => {
//     return {
//       template: `<app-task [task]="task" (onPinTask)="onPinTask($event)" (onArchiveTask)="onArchiveTask($event)" ></app-task>`,
//       props: {
//         task: { ...task, state: "TASK_PINNED" },
//         onPinTask: actions.onPinTask,
//         onArchiveTask: actions.onArchiveTask
//       }
//     };
//   })
//   .add("archived", () => {
//     return {
//       template: `<app-task [task]="task" (onPinTask)="onPinTask($event)" (onArchiveTask)="onArchiveTask($event)" ></app-task>`,
//       props: {
//         task: { ...task, state: "TASK_ARCHIVED" },
//         onPinTask: actions.onPinTask,
//         onArchiveTask: actions.onArchiveTask
//       }
//     };
//   });
