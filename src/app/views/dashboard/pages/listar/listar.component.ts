import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  constructor(private servicios: HttpService) { }

  public data: any;
  public dataTable: any;
  public oro = 0;
  public plata = 0;
  public bronce = 0;

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.servicios.dataList().subscribe((result: any) => {
      const dataParse = JSON.parse(result);
      this.data = dataParse;
      this.totalMedalls(this.data);
    });
  }
  totalMedalls(data: any) {
    // oro
    let oro = 0;
    data.forEach((dato) => {
      if (dato.gold) {
        oro++;
      }
    });
    this.oro = oro;
    console.log(this.oro);

    // plata
    let plata = 0;
    data.forEach((dato) => {
      if (dato.silver) {
        plata++;
      }
    });
    this.plata = plata;
    console.log(this.plata);

    // bronce
    let bronce = 0;
    data.forEach((dato) => {
      if (dato.bronze) {
        bronce++;
      }
    });
    this.bronce = bronce;
    console.log(this.bronce);
  }
}
