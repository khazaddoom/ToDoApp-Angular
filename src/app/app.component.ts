import { Component, Renderer2, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoList: any;
  itemText = '';

  @ViewChild('inlineEditControl', { static: false}) inlineEditControl: ElementRef; // input DOM element
  
  constructor() {
    this.todoList = [];
  }

  addToDo() {

    let newItem = {
      'text' : this.itemText,
      'checked': false
    }

    this.todoList.push(newItem);

    this.itemText = '';
    this.inlineEditControl.nativeElement.focus();

  }

}