import { ToDoListPage } from './todo-list.po';

describe('ToDoListPage', () => {
  let page: ToDoListPage;

  beforeEach(() => {
    page = new ToDoListPage();
  });

  it('items count should be 0 by default', () => {
    page.navigateTo();
    expect(page.getItemsCount()).toEqual('Total items: 0');
  });

  it('user should be able to add new item', () => {
    page.navigateTo();
    page.typeNewItemName();

    expect(page.getAddedItemName()).toEqual('New Item');
    expect(page.getItemsCount()).toEqual('Total items: 1');
  });

  it('user should be able to remove added item', () => {
    page.navigateTo();
    expect(page.getItemsCount()).toEqual('Total items: 0');
    page.typeNewItemName();

    expect(page.getAddedItemName()).toEqual('New Item');
    expect(page.getItemsCount()).toEqual('Total items: 1');
    expect(page.findToDoItem().isPresent()).toBe(true);

    page.removeItem();

    expect(page.getItemsCount()).toEqual('Total items: 0');
    expect(page.findToDoItem().isPresent()).toBe(false);
  });

});
