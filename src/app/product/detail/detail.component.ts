import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../../shared/services/data.service';
import {Product} from '../list/list.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  private id: number;
  private product: Product = {} as Product;

  constructor(private _route: ActivatedRoute,
              private _dataService: DataService) { }

  ngOnInit() {
    this._route.params.subscribe(params => {
      this.id = params['id']
    });
    this.loadProduct(this.id);
  }

  loadProduct(id: number) {
    this._dataService.getById('/api/product/', id).subscribe((data) => {
      if(data) {
        this.product.id = data.id;
        this.product.description = data.description;
      }
    });
  }

}
