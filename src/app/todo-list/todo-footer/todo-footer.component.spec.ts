import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatToolbarModule } from '@angular/material';

import { TodoFooterComponent } from './todo-footer.component';

describe('TodoFooterComponent', () => {
  let component: TodoFooterComponent;
  let fixture: ComponentFixture<TodoFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoFooterComponent ],
      imports: [ MatToolbarModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoFooterComponent);
    component = fixture.componentInstance;
    component.items = [];

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('hasCompletedItems() should return true if completed items exist', () => {
    component.items = [
      { name: 'test1', completed: true },
      { name: 'test1', completed: false}
    ];

    expect(component.hasCompletedItems()).toBe(true);
  });

  it('hasCompletedItems() should return false if there are no completed items', () => {
    component.items = [
      { name: 'test1', completed: false },
      { name: 'test1', completed: false}
    ];

    expect(component.hasCompletedItems()).toBe(false);
  });

  it('displayAllItems() should set showAllStatus to true', () => {
    component.showAllStatus = false;
    component.displayAllItems();

    expect(component.showAllStatus).toBe(true);
  })

  it('displayCompletedItems() should set showAllStatus to false', () => {
    component.showAllStatus = true;
    component.displayCompletedItems();

    expect(component.showAllStatus).toBe(false);
  })

});
