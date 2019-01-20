import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() itemName: string;
  @Input() isItemActive: boolean;

  @Output() itemRemoved = new EventEmitter();
  @Output() itemStatusChanged = new EventEmitter();

  // private itemName: string;
  // private isItemActive: boolean;

  constructor() { }

  ngOnInit() {}

  public removeButtonClicked(): void {
    this.itemRemoved.emit();
  }

  public itemStatusChanges(): void {
    this.itemStatusChanged.emit(this.isItemActive);
  }

}
