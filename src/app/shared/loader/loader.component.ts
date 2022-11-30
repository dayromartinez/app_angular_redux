import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})

export class LoaderComponent implements OnInit {
  @Input() showModal = false;
  @Input() tipoModal = '';
  @Output() showModalChange = new EventEmitter<boolean>();

  tiposModal = TipoModal;

  constructor() { }

  ngOnInit(): void {
  }

  closeModal(event: any = undefined): void {
    if (event !== undefined && event !== null) {
      if (event.target.id === 'modal') {
        this.showModal = false;
        this.showModalChange.emit(this.showModal);
      } else {
        console.log('NO contiene modal');
      }
    }
  }

}
