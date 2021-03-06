import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { format } from 'date-fns';

import { Contenedor } from 'src/app/models/Contenedor';

import { ContainersService } from 'src/app/services/containers.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-form-add-pay',
  templateUrl: './form-add-pay.component.html',
  styleUrls: ['./form-add-pay.component.css']
})


export class FormAddPayComponent implements OnInit {
  
  debt: any = { per: ''}
  MESES:Array<string> = ['ENE','FEB','MAR','ABR','MAY','JUN','JUL','AGO','SEP'];
  dataSource: any = [];
  dts: any = [];    // delete,
  // displayedColumns:string[] = ['paid_at','value','recibo_n'];

    model: any = {      
    };
    idClient: string = '-1';
    container: Contenedor|null = null;
    readonly: Boolean= true;
    clientname: string = 'empty';      // delete!

  constructor(
    private containerService: ContainersService,
    private rentalService: RentalService,
    private router: Router
  ) { }

  formSelect = new FormGroup({
    container: new FormControl('', Validators.required),
  });
  formDebt = new FormGroup({
    per: new FormControl('', Validators.required),
  });

  formAddPayment = new FormGroup({
    // container: new FormControl('', Validators.required),
    saldo: new FormControl('', Validators.pattern(/^[0-9]*$/)),
    value: new FormControl('', Validators.pattern(/^[0-9]*$/)),
    recibo_n: new FormControl('', Validators.pattern(/^[0-9]*$/)),
  });

  ngOnInit(): void {
    this.getContainers();
    this.debt.per= "";
  }

  getContainers() {
    this.containerService.getContainers()
      .subscribe(
        (res) => {
          const list: any = res;
          this.dataSource = list.filter(filtrar);
          this.model.container = "";
          // console.log(this.dataSource);
        },
        (err) => console.error(err)
      );
  }
  getSaldoActual() {
    const d= this.rentalService.alquiler.deuda_total;
    const p= this.rentalService.alquiler.pagos_total;
    return p-d;
  }
  insertPagotoDB() {}

  insertPerDebt(){
    alert(this.debt.per);
  }
  
  setClientProperty() {
      if(this.container==null) return;

      this.idClient = this.container.rented_by_id;
  }

  alertar(idurl:number) {
    this.router.navigate([`clients/alert/${idurl}`]);
  }

  onSubmit() {
    // const id = this.model.getIdClient();
    const idCtner = this.model.container;
    console.log("id container: ", this.model.container);
    this.rentalService.createPaymentService(this.model)
      .subscribe(
        res => this.alertar(210),
        err => this.alertar(440)
    )
  }

  printPaymentsOnTable()
  {
    const {container} = this.model;
      console.log(this.model);
    this.rentalService.getRentalByCtner(container);
    this.readonly = false;
  }
}

function filtrar(objeto: any) {
    return (objeto.active);
  }

  function formatDate(objeto:any)
   {
    const dt= new Date(objeto.paid_at);
    console.log(dt);
    objeto.paid_str = format(dt, 'dd/MM/yyyy');
    return objeto;
  }
