import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carosel',
  templateUrl: './carosel.component.html',
  styleUrls: ['./carosel.component.scss'],
})
export class CaroselComponent implements OnInit {
  isMobile = window.innerWidth < 450 ? true : false;

  constructor() {}

  ngOnInit(): void {}
}
