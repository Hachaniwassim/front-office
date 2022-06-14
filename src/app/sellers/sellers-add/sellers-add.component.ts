import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { productsDTO } from 'src/app/models/dto/productsDTO';
import { PostRevendeurService } from 'src/app/_services/post-revendeurs.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sellers-add',
  templateUrl: './sellers-add.component.html',
  styleUrls: ['./sellers-add.component.css']
})
export class SellersAddComponent implements OnInit {

  productServices: productsDTO[] = [];
  errorMessage = '';
  productList :any ;
    constructor(private _snackBar :MatSnackBar,
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<SellersAddComponent> , public postRevendeur : PostRevendeurService)
   {

    }

    ngOnInit(): void {
      this.getProducts();
    }

    getProducts(){
      this.postRevendeur.getAllproductsByEntreprise().subscribe((res:any)=>{
        this.productServices=res ;
      })
    }
   

    onSubmit() {
      if (this.postRevendeur.form.valid) {
          this.postRevendeur.create({
            id:this.postRevendeur.form.value.id,
            message:this.postRevendeur.form.value.message,
            createdDate:new Date(),
            lastModifiedDate:new Date(),
            adresse:this.postRevendeur.form.value.adresse,
            mobile:this.postRevendeur.form.value.mobile,
            entrepriseId:environment.enterpriseId,
            productId:this.postRevendeur.form.value.productId,
            companyname:this.postRevendeur.form.value.companyname,
            email:this.postRevendeur.form.value.email,
            nationality:this.postRevendeur.form.value.nationality,
            referent:this.postRevendeur.form.value.referent,
            cap:this.postRevendeur.form.value.cap,
  
          }).subscribe((res: any) => {
            
          
            console.log('the result of post contact =============>',res)
            
          })
          window.location.href='/sellers'
        }
      }

      onCountryChange(event:any)
      {
        console.log(event.dialCode);
        console.log(event.name);
        console.log(event.iso2);
      }
      

onClose() {
  this.dialogRef.close();
}

onrelod(){
  window.location.reload();
}
}



