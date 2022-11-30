import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app.reducers';
import * as acciones from './contador/contador.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'redux-app';
  contador: number;

  constructor(private store: Store<AppState>) {
    this.contador = 11;
  }

  ngOnInit(): void {
    //Esta suscripción escucha TODOS los cambios que haya en el estado global de la aplicación
    // this.store.subscribe(state => {
    //   console.log('Estado: ', state);
    //   this.contador = state.contador;
    // });

    //Este en cambio solo escucha los cambios de un estado ESPECÍFICO de la misma
    this.store.select('contador').subscribe(contador => {
      console.log('Estado: ', contador);
      this.contador = contador;
    });
  }

  incrementar() {
    this.store.dispatch(acciones.incrementar());
  }

  decrementar() {
    this.store.dispatch(acciones.decrementar())
  }
}
