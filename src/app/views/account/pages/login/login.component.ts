import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public usuario: string;
  public clave: string;
  private rol: string;
  public required = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public login() {
    if (this.usuario && this.clave == '123456') {
      switch (this.usuario) {
        case 'smart' :
          this.rol = 'administrador';
          this.navigate(this.usuario, this.rol);
          break;
        case 'quick':
          this.rol = 'coordinador';
          this.navigate(this.usuario, this.rol);
          break;
        default:
          alert('Intenta nuevamente');
          break;
      }
      this.required = false;
    } else {
      this.required = true;
    }
  }
  private navigate(user: string, rol: string){
    sessionStorage.setItem('user', user);
    sessionStorage.setItem('rol', rol);
    this.router.navigate(['/dashboard/home']);
  }
}
