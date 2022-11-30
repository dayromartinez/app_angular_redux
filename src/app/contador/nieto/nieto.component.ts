import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import * as actions from '../contador.actions';

enum TipoModal {
  aprobado = 'aprobado',
  rechazado = 'rechazado',
  guardado = 'guardado',
  eliminado = 'eliminado',
  retirar = 'retirar',
  retiroExitoso = 'retiroExitoso',
  ingreseMotivo = 'ingreseMotivo',
  verRechazo = 'motivoRechazo',
  error = 'error',
  camposNoModificados = 'camposNoModificados',
  loading = 'loading',
  info = 'info',
  exitosoSinRedirect = 'exitosoSinRedirect',
  submit = 'submit',
  mensajeRechazo = 'mensajeRechazo',
  cancelarRegistro = 'cancelarRegistro',
  comparativo = 'comparativo'
}

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.css']
})
export class NietoComponent implements OnInit {

  contador: number = 0;
  showModal = false;
  tipoModal = '';

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('contador').subscribe(contador => this.contador = contador);
  }

  reset() {
    this.store.dispatch(actions.reset());
    this.tipoModal = TipoModal.loading;
    this.showModal = !this.showModal;
  }

}
