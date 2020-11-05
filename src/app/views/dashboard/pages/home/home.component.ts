import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( private servicios: HttpService ) { }

  public data: any;
  ngOnInit(): void {
    this.listar();
  }

  listar(){
    this.servicios.dataList().subscribe((result: any) => {
      const dataParse = JSON.parse(result);
      this.data = dataParse;
    });
  }
}
