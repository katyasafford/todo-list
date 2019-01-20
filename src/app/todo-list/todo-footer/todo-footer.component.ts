import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent {
  @Input() items: string[];
  @Output() clearCompleted = new EventEmitter();

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

}
