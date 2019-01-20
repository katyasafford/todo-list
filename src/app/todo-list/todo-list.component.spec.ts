import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatFormFieldModule,
  MatCheckboxModule,
  MatIconModule,
  MatCardModule,
  MatToolbarModule,
  MatInputModule
} from '@angular/material';

import { TodoListComponent } from './todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoFooterComponent } from './todo-footer/todo-footer.component';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TodoListComponent,
        TodoItemComponent,
        TodoFooterComponent
      ],
      imports: [
        BrowserAnimationsModule,
        FormsModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatIconModule,
        MatCardModule,
        MatToolbarModule,
        MatInputModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('displayItemsConditionally() should set showAllItems', () => {
    component.showAllItems = undefined;
    component.displayItemsConditionally(false);

    expect(component.showAllItems).toBe(false);
  });

  it('addItem() should add new item to array of items if pressed key is Enter', () => {
    component.toDoItems = [];
    component.newItem = 'Test Item';

    const fakeEvent = { key: 'Enter' };
    component.addItem(fakeEvent);

    expect(component.toDoItems).toEqual([{ name: 'Test Item', completed: false }]);
  });

  it('addItem() should not add new item to array of items if pressed key was not Enter', () => {
    component.toDoItems = [];
    component.newItem = 'Test Item';

    const fakeEvent = { key: 'Tab' };
    component.addItem(fakeEvent);

    expect(component.toDoItems).toEqual([]);
  });

  it('removeItem() should remove an item from array of items at a given index', () => {
    component.toDoItems = [
      { name: 'test1', completed: false },
      { name: 'test2', completed: false },
      { name: 'test3', completed: false }
    ];

    const expectedResult = [
      { name: 'test1', completed: false },
      { name: 'test3', completed: false }
    ];

    component.removeItem(1);

    expect(component.toDoItems).toEqual(expectedResult);
  });

  it('updateItemStatus() should update status of an item at a given index', () => {
    component.toDoItems = [
      { name: 'test1', completed: false },
      { name: 'test2', completed: false },
      { name: 'test3', completed: false }
    ];

    component.updateItemStatus(true, 0);

    expect(component.toDoItems[0].completed).toBe(true);
  })

  it('clearCompletedItems() should remove completed items', () => {
    component.toDoItems = [
      { name: 'test1', completed: true },
      { name: 'test2', completed: false },
      { name: 'test3', completed: true }
    ];

    const expectedResult = [{ name: 'test2', completed: false }];

    component.clearCompletedItems();

    expect(component.toDoItems).toEqual(expectedResult);
  });

});
