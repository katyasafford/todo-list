import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  public toDoItems = [];
  public notCompletedItems = [];
  public newItem: string;
  public showAllItems = true;

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

  public clearCompletedItems(): void {
    const activeItemsLeft = [];

    this.toDoItems.forEach(el => {
      if (!el.completed) {
        activeItemsLeft.push(el);
      }
    });

    this.toDoItems = activeItemsLeft;
  }

  shouldShowMessage(): boolean {
    let hasOnlyCompletedItemsLeft = true;

    for (let i = 0; i < this.toDoItems.length; i++) {
      if (!this.toDoItems[i].completed) {
        hasOnlyCompletedItemsLeft = false
        break;
      }
    }
    
    return hasOnlyCompletedItemsLeft && !this.showAllItems;
  }

}
