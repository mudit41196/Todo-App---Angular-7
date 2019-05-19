import { Component } from '@angular/core';

// decorator - includes meta data for component.
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', // template url pointing to html template.
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string = 'Mudit';

  constructor() {
    this.changeName('John');
  }

  changeName(name:string):void {
    this.name = name;
  }
}
