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

  private showAllStatus: boolean = true;

  private clearCompletedBtnClicked(): void {
    this.clearCompleted.emit();
  }

  public hasActiveItems(): boolean {
    let hasActiveItems = false;

    this.items.forEach(el => {
      if (el['active']) {
        hasActiveItems = true;
      }
    });

    return hasActiveItems;
  }

  public displayAllItems(): void {
    this.showAllStatus = true;
    this.showAll.emit(this.showAllStatus);
  }

  public displayActiveItems(): void {
    this.showAllStatus = false;
    this.showAll.emit(this.showAllStatus);
  }

}
