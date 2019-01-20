import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  public toDoItems = [];
  public notCompletedItems = [];
  public newItem: string;
  public showAllItems = true;

  constructor() { }

  ngOnInit() {
  }

  /** this method will decide if we show all items or just completed ones */
  public displayItemsConditionally(e): void {
    this.showAllItems = e;
  }

  /** this will be executed when user presses Enter in the input field */
  public addItem(e): void {
    if (e.key === 'Enter') {
      this.toDoItems.push({ name: this.newItem, completed: false });
      this.newItem = null;
    }
  }

  public removeItem(index: number): void {
    this.toDoItems.splice(index, 1);
  }

  /** set item status to true or false based on checkbox value */
  public updateItemStatus(e, index): void {
    this.toDoItems[index].completed = e;
  }

  private clearCompletedItems(): void {
    this.toDoItems.forEach((el, i) => {
      if (el.completed) {
        this.toDoItems.splice(i, 1);
      }
    });
  }

}
