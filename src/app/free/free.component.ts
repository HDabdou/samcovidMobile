import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-free',
  templateUrl: './free.component.html',
  styleUrls: ['./free.component.scss'],
})
export class FreeComponent implements OnInit {

  taille:number;
  t:any;
  montant:any;
  numero:any;
  checkAVK:boolean=false;
  Accidant:boolean = false;
  service
  dateRDV = "06 Juin 2020";
  datepansement = "01 Septembre 2020";
  datechirurgie = "05 Novembre 2020";
  rdv:boolean =false;
  checkSOusAVK(arg){
    if(arg == "oui"){
      this.rdv = true; 
    }
    if(arg == "non"){
      this.rdv = false;
    }
  }
  listRDV =[
    {date:'01-01-2020',service:'chirurgie',heure:"Matin"},
    {date:'01-02-2020',service:'chirurgie',heure:"Matin"},
    {date:'01-03-2020',service:'Cardiologie',heure:"aprés-midi"},
    {date:'01-04-2020',service:'Cardiologie',heure:"Matin"},
    {date:'01-05-2020',service:'Cardiologie',heure:"aprés-midi"},
  ]
  constructor() { 
   
  }
  
  ngOnInit() {}

}
