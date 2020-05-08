import { Component, OnInit } from '@angular/core';
import { Platform, PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';
import { OrangeComponent } from '../orange/orange.component';
import { FreeComponent } from '../free/free.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  step:number =0;
  toux
  temperature
  difRef
  malgorge
  nezBouche
  conjonctivite
  douleurMuscle
  mauxTete
  fatiqueIntence
  vomi
  diarrhee
  perteGout
  perteOdorat
  symEntourageDet
  symEntourage
  autresigne
  next(){
    this.step ++;
    this.playAudios(this.step)
  }
  back(){
    this.step --;
    this.playAudios(this.step)
  }
  valider(){
    this.step = 0;
  }
  audio = new Audio()
  playAudios(arg){
    this.audio.src =null;
    if(arg ==0){
      this.audio = new Audio('/assets/audios/qq0.mp4');
      this.audio.play();
    }
    if(arg ==1){
      this.audio = new Audio('/assets/audios/qq1.mp4');
      this.audio.play();
    }
    if(arg == 2){
      this.audio = new Audio('/assets/audios/qq2.mp4');
      this.audio.play();
    }

    if(arg == 2){
      this.audio = new Audio('/assets/audios/qq2.mp4');
     this.audio.play();
    }
    if(arg ==3){
      this.audio = new Audio('/assets/audios/qq3.mp4');
      this.audio.play
    }
    if(arg == 4){
      this.audio = new Audio('/assets/audios/qq4.mp4');
      this.audio.play
    }
    if(arg ==5){
      this.audio = new Audio('/assets/audios/qq5.mp4');
     this.audio.play();
    }
    if(arg == 6){
      this.audio = new Audio('/assets/audios/qq6.mp4');
     this.audio.play();
    }
    if(arg ==7){
      this.audio = new Audio('/assets/audios/qq7.mp4');
     this.audio.play();
    }
    if(arg == 8){
      this.audio = new Audio('/assets/audios/qq8.mp4');
     this.audio.play();
    }
    if(arg ==9){
      this.audio = new Audio('/assets/audios/qq9.mp4');
     this.audio.play();
    }
    if(arg == 10){
      this.audio = new Audio('/assets/audios/qq10.mp4');
     this.audio.play();
    }
    if(arg ==11){
      this.audio = new Audio('/assets/audios/qq11.mp4');
     this.audio.play();
    }
    if(arg == 12){
      this.audio = new Audio('/assets/audios/qq12.mp4');
     this.audio.play();
    }
    if(arg == 13){
      this.audio = new Audio('/assets/audios/qq13.mp4');
     this.audio.play();
    }
    if(arg == 14){
      this.audio = new Audio('/assets/audios/qq14.mp4');
     this.audio.play();
    }
    if(arg == 15){
      this.audio = new Audio('/assets/audios/qq15.mp4');
     this.audio.play();
    }
    if(arg == 16){
      this.audio = new Audio('/assets/audios/recap.mp4');
     this.audio.play();
    }
    
  }
  constructor(private router:Router,public popoverController: PopoverController) { 
   
  }
 
  ngOnInit() {
    this.audio = new Audio('/assets/audios/qq0.mp4');
   this.audio.play();
  }
 

}
