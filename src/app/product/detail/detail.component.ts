import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../../shared/services/data.service';
import {Product} from '../list/list.model';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import {ProductService} from "../shared/product.service";
import {ListComponent} from "../list/list.component";
import {Observable} from "rxjs/Observable";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  private id: number;
  detailForm: FormGroup;

  constructor(private _route: ActivatedRoute,
              private _dataService: DataService,
              private fb: FormBuilder,
              private productService: ProductService,
              private _store: Store<Observable<any>>) {

    this.createForm();
  }

  ngOnInit() {
    this._route.params.subscribe(params => {
      this.id = params['id']
    });
    this.loadProduct(this.id);

    this._store.subscribe(val => {
      console.log('***SUBSCRIBER***', val);
    });

    this.putElementHeader();
  }
  createForm() {
    this.detailForm = this.fb.group({
      id: ['', Validators.required ],
      product: ['', Validators.required ],
    });
  }

  loadProduct(id: number) {
    this._dataService.getById('/api/product/', id).subscribe((data) => {
      if(data) {
        this.detailForm.setValue({id: data.id, product: data.description});
      }
    });
  }

  putElementHeader() {
    this.productService.toggle()
  }

}
