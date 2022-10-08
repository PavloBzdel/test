import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  onDownPage(){
    document.getElementById("contact-us")?.scrollIntoView({
      behavior: "smooth",
    })
  }
  constructor() { }

  ngOnInit(): void {
  }

}
