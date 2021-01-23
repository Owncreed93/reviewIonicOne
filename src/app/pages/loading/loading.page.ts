import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  loading: HTMLIonLoadingElement;

  constructor( public loadingController: LoadingController ) { }

  ngOnInit() {}

  mostrarLoading() {

    this.presentarLoading('Hola mundo');

    setTimeout( () => {

      this.loading.dismiss();

    }, 2000 );

  }

  async presentarLoading( message: string ) {

    this.loading = await this.loadingController.create({
      message,
    });

    await this.loading.present();

    const { role, data } = await this.loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

}
