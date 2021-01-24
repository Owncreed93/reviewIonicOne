import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.page.html',
  styleUrls: ['./progress.page.scss'],
})
export class ProgressPage implements OnInit {

  public porcentaje: number = 0.05;

  constructor() { }

  ngOnInit() {
  }

  rangeChange( $e ) {

    const { detail } = $e;

    return this.porcentaje =  detail.value / 100;

  }



}
