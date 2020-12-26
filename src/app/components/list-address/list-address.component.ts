import { AddressService } from './../../services/address.service';
import { Component, OnInit } from '@angular/core';
import { Address } from '../../models/address'

@Component({
  selector: 'app-list-address',
  templateUrl: './list-address.component.html',
  styleUrls: ['./list-address.component.css']
})
export class ListAddressComponent implements OnInit {

  addresses : Address[]=[]
  constructor(private addressService:AddressService) { }

  ngOnInit(): void {
    this.getAllAddresse();
  }

  getAllAddresse(){
    this.addressService.getAlls().subscribe((res:any) => this.addresses=res);
    
  }

}
