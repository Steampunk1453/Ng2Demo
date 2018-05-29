import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from "../../product/shared/product.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // @Input() title: string = 'Default title';
  isVisible = false;

  constructor(
    private _productService: ProductService) {
  }

  ngOnInit() {
    this._productService.change.subscribe(isOpen => {
      this.isVisible = isOpen;
    });
  }
}

