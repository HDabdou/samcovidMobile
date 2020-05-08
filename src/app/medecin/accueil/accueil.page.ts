import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {


  avkHistorique = [
    {nom:"Diop",prenom:"Abdou",tel:"779854080",adresse:"Parcelle",etat:1},
    {nom:"Fall",prenom:"Abdou",tel:"779854080",adresse:"Parcelle",etat:1},
    {nom:"Nsiaye",prenom:"Abdou",tel:"770854080",adresse:"Pikine",etat:1},
    {nom:"Diop",prenom:"Abdou",tel:"779834080",adresse:"Parcelle",etat:1},
    {nom:"Diop",prenom:"Abdou",tel:"779894080",adresse:"Parcelle",etat:0},
    {nom:"Diop",prenom:"Abdou",tel:"779854080",adresse:"Fann",etat:0},
    {nom:"Diop",prenom:"Abdou",tel:"779854080",adresse:"Parcelle",etat:0},
  ]
  constructor() { }

  ngOnInit() {
  }

}
