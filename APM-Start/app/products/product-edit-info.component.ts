import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IProduct } from './product';

@Component({
    templateUrl: './app/products/product-edit-info.component.html'
})
export class ProductEditInfoComponent implements OnInit {
    errorMessage: string;
    product = { id: 1, productName: 'test', productCode: 'test' };


    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {
    }
}
