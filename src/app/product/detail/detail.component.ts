import {Component, HostBinding, HostListener, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
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
  @HostBinding('class') classVar: string;
  @HostBinding('style.border') border: string;
  @HostBinding('style.background-color') color: string;

  @HostListener('keydown')
  manageKeyDown(evt: KeyboardEvent){
    console.log(evt);
    if(evt.key === 'q') {
      this.subscription.unsubscribe();
    }
  }
  private subscription: Subscription;
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
    // this.loadProduct(this.id);

    this._store.subscribe(data => {
      console.log('Store test: ', data);
    });

    this.putElementHeader();

    this.classVar = 'p-5';
    this.border = '1x dashed black';
    Observable.timer(0, 10).subscribe(data => {this.color ='#' + (data % 1000)});
  }
  createForm() {
    this.detailForm = this.fb.group({
      id: ['', Validators.required ],
      description: ['', Validators.required, Validators.minLength(100)],
      prize: ['', Validators.required ],
      type: ['', Validators.required ]
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
