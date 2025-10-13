import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { CommonModule } from '@angular/common'; // 👈 Este es el que faltaba

@Component({
  selector: 'app-root',
  standalone: true,
 imports: [RouterOutlet, CommonModule],
template: `<router-outlet></router-outlet>`

})
//bueno aqui arriba es donde corre nuestras vistas 
//los imports fueron necesarios para las routes y los metodos especificos desde los html ngOnmodule o algo asi se llamaba

//NUNCA MAS VUELVO A REALIZAR esto crj
//yo q woa saber ingles para definir esto
//mi examen de Javascript pase con 13 oe
//bueno en todo caso Logeado es booleano y return una serie de condiciones 
//si su typeOf es diferente a indefinido y o o me olvide q significaba ese simpolo  doble
//localStorage extrae el item auth entonces sera igual a verdadero 

//q mas puedo decir aqui
//te extraño console.log('hola mundo');
export class AppComponent {
  isLoggedIn(): boolean {
  return typeof window !== 'undefined' && localStorage.getItem('auth') === 'true';//ya sabia que eran 3 iguales la cosa es por q ts no me lo dijo xd
}

}
