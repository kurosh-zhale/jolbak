import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.scss'],
})
export class ProductBoxComponent implements OnInit {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() imageUrl: string = '';

  constructor() {}

  ngOnInit(): void {}
}
