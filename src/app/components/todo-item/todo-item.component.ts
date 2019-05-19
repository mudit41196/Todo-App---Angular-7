import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from "../../models/Todo";
import { TodoService } from "../../services/todo.service";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() today: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();


  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  setClasses() {
    let classes = {
      todo: true,
      'is-complete': this.today.completed
    }
    return classes;
  }

  onToggle(today) {
    // Toggle in UI
    today.completed = !today.completed;
    // Toggle in Server
    this.todoService.toggleCompleted(today).subscribe(todo => {
      console.log("todo: ", todo);
    });
  }

  onDelete(today) {
    this.deleteTodo.emit(today);
  }
}
