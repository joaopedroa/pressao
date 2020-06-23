import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPageComponent } from '../modal/modal-page/modal-page.component'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  valueD:Object = {
    valorDiastolica : 0,
    valorSistolica : 0,
    valorPulso : 0,
    isDeitado : false
  }

  constructor(public modalController:ModalController) {}

  public getValor(valor, name){
    this.valueD[name] = valor.detail.value;
  }

}
