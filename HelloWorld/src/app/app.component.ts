import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HelloWorld';

  ngOnInit(): void{
    this.title = "Hello From Bridgelabz";
  } //using interpolation data binding
}
