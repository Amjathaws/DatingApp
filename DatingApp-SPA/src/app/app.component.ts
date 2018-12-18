import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


   myNumber: any;
  title = 'DatingApp-SPA';

  ngOnInit() {
    this.number();
  }
number() {
  for (let i = 0; i < 10; i++) {
      this.myNumber = i;
  }
}

}
