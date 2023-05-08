import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
}

// The component class code, written in TypeScript.
// The page you see is the application shell. The shell is controlled by an Angular component named AppComponent.
// Components are the fundamental building blocks of Angular applications. 
// They display data on the screen, listen for user input, and take action based on that input.

// You always import the Component symbol from the Angular core library and annotate the component class with @Component.
// @Component is a decorator function that specifies the Angular metadata for the component.

// ng generate created three metadata properties:

// selector	The component's CSS element selector.
// templateUrl	The location of the component's template file.
// styleUrls	The location of the component's private CSS styles.