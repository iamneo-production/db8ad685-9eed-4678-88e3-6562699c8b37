import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-homepage',
  templateUrl: './footer-homepage.component.html',
  styleUrls: ['./footer-homepage.component.css']
})
export class FooterHomepageComponent implements OnInit {

  year: number = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
  }

}