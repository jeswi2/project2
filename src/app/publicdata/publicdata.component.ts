import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-publicdata',
  templateUrl: './publicdata.component.html',
  styleUrls: ['./publicdata.component.css']
})
export class PublicdataComponent implements OnInit {

  constructor(private myaoi:ApiService) { 
    this.fetchData()
  }


  fetchData=()=>{
    this.myaoi.viewusData().subscribe(
      (data)=>{
        this.publicdata=data
      }
    )
  }


  publicdata:any={}

  ngOnInit(): void {
  }

}
