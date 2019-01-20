import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent {
  @Input() items;
  @Output() clearCompleted = new EventEmitter();
  @Output() showAll = new EventEmitter();

  public showAllStatus = true;

  private clearCompletedBtnClicked(): void {
    this.clearCompleted.emit();
  }

  public hasCompletedItems(): boolean {
    let hasCompletedItems = false;

    this.items.forEach(el => {
      if (el['completed']) {
        hasCompletedItems = true;
      }
    });

    return hasCompletedItems;
  }

  public displayAllItems(): void {
    this.showAllStatus = true;
    this.showAll.emit(this.showAllStatus);
  }

  public displayCompletedItems(): void {
    this.showAllStatus = false;
    this.showAll.emit(this.showAllStatus);
  }

}
