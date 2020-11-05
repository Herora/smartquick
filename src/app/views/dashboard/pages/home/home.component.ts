import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( private servicios: HttpService ) { }

  public data: any;
  public dataTable: any;

  ngOnInit(): void {
    this.listar();
  }

  listar(){
    this.servicios.dataList().subscribe((result: any) => {
      const dataParse = JSON.parse(result);
      this.data = dataParse;
      this.viewData(this.data);
    });
  }

  viewData(data: any){
    this.dataTable = data.slice(0 , 6);
  }
  previous(){
    this.dataTable = [];
    this.dataTable = this.data.slice(0 , 6);

  }
  next(){
    this.dataTable = [];
    this.dataTable = this.data.slice(6 , 12);
  }
}
