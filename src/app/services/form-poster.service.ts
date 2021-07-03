import { Injectable } from '@angular/core';
import { CustomerModal } from '../models/CustomerModal';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class FormPosterService {

    private url: string = 'http://localhost:3100/postEmployee';

    constructor(private http:HttpClient){

    }

    postCustomer(customer: CustomerModal){
        console.log('data in service',customer);
        return this.http.post(this.url,customer);
    }
}