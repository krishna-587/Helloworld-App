import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Helloworld';

  imgUrl = "https://www.a2nacademy.com/a2n_assets/img/hire-dev/hire-partners/bridge-labz.webp"
  url = "https://www.bridgelabz.com/"

  userName : string = "";
  nameError : string = "";

  ngOnInit() : void{
    this.title = "Hello from BridgeLabz."
  }

  onClick($event: any){
    console.log("Save button is clicked!", $event);
    window.open(this.url , "_blank");
  }

  onInput($event : any){
    console.log("Change Event Occurred!", $event.data);
    const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    if(nameRegex.test(this.userName)){
      this.nameError = "";
      return;
    }
    this.nameError = "Name is Incorrect!";
  }
}
