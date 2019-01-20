import { browser, by, element, protractor } from 'protractor';

export class ToDoListPage {
  navigateTo() {
    return browser.get('/');
  }

  getItemsCount() {
    return element(by.css('.items-counter')).getText();
  }

  typeNewItemName() {
    element(by.css('input')).sendKeys('New Item');
    browser.actions().sendKeys(protractor.Key.ENTER).perform();
  }

  getAddedItemName() {
    return element(by.css('app-todo-item p')).getText();
  }

  removeItem() {
    return element(by.css('app-todo-item button')).click();
  }

  findToDoItem() {
    return element(by.css('app-todo-item'));
  }
}
