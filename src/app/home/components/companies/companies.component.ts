import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss'],
})
export class CompaniesComponent implements OnInit {
  constructor(private readonly router: Router) {}

  ngOnInit(): void {}

  routeToList(
    type:
      | 'production'
      | 'exportation'
      | 'importation'
      | 'international'
      | 'consumption'
  ) {
    this.router.navigate(['companies/list', type]);
  }
}
