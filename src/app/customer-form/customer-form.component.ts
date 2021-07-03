import { Component } from '@angular/core';
import { CustomerModal } from '../models/CustomerModal';
import { NgForm } from '@angular/forms';
import { FormPosterService } from '../services/form-poster.service'


@Component({
    selector: 'app-cust',
    templateUrl: './customer-form.component.html'
})


export class CustomerFormComponent {

    languages: string[] = ['AI','ML','Data Science','AWS','GCP'];
    mymodel = new CustomerModal('Jilu','Ebin','ee@gmail.com','1234',true,'female','ML');

    hasCodeLangError: boolean = false;

    constructor(private formPosterService: FormPosterService){

    }

    firstToUpper(value: string) : void {
        if(value.length > 0){
            this.mymodel.firstname = value.charAt(0).toUpperCase();
        }else{
            this.mymodel.firstname = value;
        }
    }

    validateCodeLang(event: Event): void {
        if(this.mymodel.codelang==="default"){
            this.hasCodeLangError = true;
        }else{
            this.hasCodeLangError = false;
        }
    }

    submitForm(form: NgForm): void {
        //console.log(">>>>Form Data<<<<<<<", form.value);
        this.formPosterService.postCustomer(form.value)
                            .subscribe((data) => console.log('data posted'))
    }
}