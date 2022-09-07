import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'

declare var $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  myImage: any;
  submitted: boolean = false
  quantity: number = 1;
  message: any;



  addProductForm = new FormGroup({
    image: new FormControl('', [Validators.required]),
    productName: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required])
  })


  productsData: any = []
  productsCartData: any = []
  constructor(private fb: FormBuilder,) { }

  ngOnInit(): void {
  }
  get f() {
    return this.addProductForm.controls
  }
  onFileChange(event: any) {

    let reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      let fileSize = file.size
      let fileSizeMb = Math.round(fileSize / 1024);
      console.log(fileSizeMb)
      if (fileSizeMb < 100) {
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.myImage = reader.result;
        };
      }
      else {
        alert("File size exceeds maximum limit of 100 Kb.")
        this.myImage=''
        this.addProductForm.reset();
      }
    }
  }

  plus(data: any) {

    data.quantity = data.quantity + 1

  }
  minus(data: any) {
    if (data.quantity != 1) {
      data.quantity = data.quantity - 1
    }
  }
  remove(i: any) {
    this.productsCartData.splice(i, 1)
  }

  addProduct() {
    this.submitted = true
    if (this.addProductForm.invalid) {
      return
    }
    const reqObj = {
      img: this.myImage,
      productName: this.addProductForm.value.productName,
      productPrice: this.addProductForm.value.price,
      quantity: this.quantity
    }
    this.productsData.push(reqObj)
    $('#exampleModal').modal('hide');
    this.addProductForm.reset()

  }

  addToBag(name: any, price: any, quantity: any) {
    let total = quantity * price;
    const reqObj = {
      quan: quantity,
      productName: name,
      productPrice: price,
      total: total
    }
    this.productsCartData.push(reqObj)
  }
}
