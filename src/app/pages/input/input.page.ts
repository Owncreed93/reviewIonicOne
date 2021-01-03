import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {

  nombre: string = 'Christian';

  usuario = {
    email: '',
    password: ''
  };

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm ): void {

    console.log('submit executed');
    console.table( this.usuario );
    console.log(form);

  }

}
