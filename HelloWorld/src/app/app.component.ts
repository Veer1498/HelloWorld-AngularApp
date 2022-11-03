import { Component } from '@angular/core';
  /** 
  Purpose : To Create Hello World App and Use Property,Event Bindings
  Author  : Veer
  Date    : 3/11/2022
  */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  /**
   * Required Components Passing like String
   * Using Image Path,Website URL, username
   */
  title = 'HelloWorld';
  imageUrl="../assets/download.jpg";
  url = "https://www.bridgelabz.com";
  userName:string = ""
  nameError:string = ""

  /**
   * Here, We are Changing title with other Name
   * this functions runs after Page Loads
   */
  ngOnInit(): void{
    this.title = "Hello From Bridgelabz";
  }
  /**
   * Here,
   * This is for Event Binding
   * This Function runs after Click Action Performed once.
   * This Automatically redirects to the website url we have provided
   * @param $event 
   */
  onClick($event: any){
    console.log("Save button is clicked!", $event);
    window.open(this.url, "_blank");
  } 
  /**
   * Here,
   * This is for Event Binding
   * This Function runs after Input Action Performed once.
   * @param $event 
   * @returns 
   * 
   * It reflects the Changes in Website directly using twoway Binding
   */
  onInput($event:any)
  {
    console.log("change event occured!",$event.data);
    const nameRegex=RegExp('[A-Z]{1}[a-z]{2}');
    if(nameRegex.test(this.userName))
    {
      this.nameError="";
      this.title=this.userName;
      return;
    }
    this.nameError="Name Is Incorrect";
  }
}
