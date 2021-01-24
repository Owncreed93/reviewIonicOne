import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

// ********************************************************************************** //

import { ModalInfoPage } from '../modal-info/modal-info.page';

// ********************************************************************************** //

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor( private modalCTrl: ModalController ) { }

  ngOnInit() {
  }

  async mostrarModal(){

    const modal = await this.modalCTrl.create({
      component: ModalInfoPage,
      componentProps: {
        nombre: 'Christian',
        pais: 'Perú'
      }
    });

    await modal.present();

    // const resp = await modal.onDidDismiss();
    const resp = await modal.onWillDismiss();


    // console.log('onDidDismiss');
    console.log('onWillDismiss');
    console.log(resp);

  }


}
