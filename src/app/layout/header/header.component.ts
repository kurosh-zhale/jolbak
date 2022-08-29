import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isMainPage = true;

  constructor(private readonly router: Router) {}

  navigateToLogin() {
    this.router.navigate(['aaa']);
  }

  ngOnInit(): void {}
}
