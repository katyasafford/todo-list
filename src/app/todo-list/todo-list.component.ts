import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  public toDoItems: string[] = [];
  public newItem: string;

  constructor() { }

  ngOnInit() {
  }

  /** this will be executed when user presses Enter in the input field */
  public addItem(e): void {
    if (e.key === 'Enter') {
      this.toDoItems.push(this.newItem);
      this.newItem = null;
    }
  }

  public removeItem(index: number): void {
    this.toDoItems.splice(index, 1);
  }

}
