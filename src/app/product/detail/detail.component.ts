import {Component, HostBinding, HostListener, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from '../../shared/services/data.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../shared/product.service';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  private subscription: Subscription;
  private id: number;
  private detailForm: FormGroup;
  private types: string[];
  private formSubmitAttempt: boolean;
  private isSave: boolean;

  constructor(private _route: ActivatedRoute,
              private _dataService: DataService,
              private fb: FormBuilder,
              private productService: ProductService,
              private _store: Store<Observable<any>>,
              private _router: Router) {

    this.createForm();
  }

  ngOnInit() {
    this._route.params.subscribe(params => {
      this.id = params['id']
    });
    // this.loadProduct(this.id);

    this._store.subscribe(data => {
      console.log('Store test: ', data);
    });
    this._dataService.get('/api/products').subscribe((data) => {
      if(data) {
        this.types = data;
      }
    });
    this.putElementHeader();
  }

  createForm() {
    this.detailForm = this.fb.group({
      id: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(5)]],
      prize: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      type: ['', Validators.required]
    });
  }

  onSubmit() {
    this.formSubmitAttempt = true;
    if (this.detailForm.valid) {
      this._dataService.post('/api/product', this.detailForm.value).subscribe((data) => {
        if(data) {
          this.isSave = true;
        }
      });

    }
  }

  hasErrors(form: FormGroup, field: string) {
    return (!form.get(field).valid && form.get(field).touched) ||
      (form.get(field).untouched && this.formSubmitAttempt);
  }

  getError(form: FormGroup, field: string, validator: string) {
    return form.get(field).errors ? form.get(field).errors[validator] : false;
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
