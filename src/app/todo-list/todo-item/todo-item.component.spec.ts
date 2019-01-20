import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCheckboxModule, MatIconModule, MatCardModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

import { TodoItemComponent } from './todo-item.component';

describe('TodoItemComponent', () => {
  let component: TodoItemComponent;
  let fixture: ComponentFixture<TodoItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoItemComponent ],
      imports: [
        MatCheckboxModule,
        FormsModule,
        MatIconModule,
        MatCardModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('itemStatusChanges() should emit an event', () => {
    component.isItemCompleted = true;
    spyOn(component.itemStatusChanged, 'emit');
    component.itemStatusChanges();

    expect(component.itemStatusChanged.emit).toHaveBeenCalledWith(true);
  });

});
