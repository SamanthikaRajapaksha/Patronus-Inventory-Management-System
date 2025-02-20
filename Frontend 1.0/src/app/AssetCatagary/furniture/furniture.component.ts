import { Component, OnInit } from '@angular/core';
import { Asset } from '../../asset/asset';
import { HttpService } from '../../service2/http.service';

@Component({
  selector: 'app-furniture',
  templateUrl: './furniture.component.html',
  styleUrls: ['./furniture.component.scss']
})
export class FurnitureComponent implements OnInit {

  model:any ={}
asset: Asset;


  constructor(private userService:HttpService) { 
    this.asset=new Asset();
    this.asset.assetCategory="Furniture";
    console.log(this.asset);
  }

  ngOnInit() {
    
  }
  onSubmit() {
    console.log(this.asset);
    this.userService.addEmployee(this.asset).subscribe((response)=>{
      console.log(response);
      alert('Asset Successfully Saved');
    });
    
  }
}
