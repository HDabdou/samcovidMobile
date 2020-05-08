import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss'],
})
export class InscriptionComponent implements OnInit {

  step:number = 0;
  code
  nom
  prenom
  dateNaissance:any
  sexe
  tel
  region
  ville
  quartier
  district
  statutMatri
  enfantNo
  grossesse
  nbrPersonne
  nbrChambre
  worker
  domaine
  scolarise


  dateContact:any
  lienContact
  dateSaniContact:any
  nbrContactAfter
  lieuAfterConact
  autreMaladie
  symptomes
  medoctaken

  maladAute:number =0;
  autreMalad
  symptomesautre:number = 0;
  autresymptomes

  constructor(private router:Router,private loadingController: LoadingController) { }
  next(){
    
    this.step ++;
    this.playAudio(this.step);
    
  }
  back(){
   
    this.step --;
    this.playAudio(this.step);
  
  }
  playGrossesse(){
    this.audio.src = null;
    if(this.sexe == 'f'){
      var audio = new Audio('/assets/audios/qp13.mp4');
      audio.play();
    }
    
  }
  playWorker(){
    this.audio.src = null;
    if(this.worker =="oui"){
      this.audio = new Audio('/assets/audios/qp17.mp4');
      this.audio.play();
    }
  }
   audio = new Audio()
  playAudio(arg){
    this.audio.src = null;
    if(arg == 0){
      this.audio = new Audio('/assets/audios/patient_tiers.mp4');
      this.audio.play();
      
    }
    if(arg == 1){
       this.audio = new Audio('/assets/audios/qp1.mp4');
      this.audio.play();
    }
    if(arg == 2){
       this.audio = new Audio('/assets/audios/qp2.mp4');
      this.audio.play();
    }
    if(arg == 3){
      this.audio = new Audio('/assets/audios/qp3.mp4');
      this.audio.play();
    }
    if(arg == 4){
      this.audio = new Audio('/assets/audios/qp4.mp4');
      this.audio.play();
    }
    if(arg == 5){
      this.audio = new Audio('/assets/audios/qp5.mp4');
      this.audio.play();
    }
    if(arg == 6){
      this.audio = new Audio('/assets/audios/qp6.mp4');
      this.audio.play();
    }
    if(arg == 7){
      this.audio = new Audio('/assets/audios/qp7.mp4');
      this.audio.play();
    }
    if(arg == 8){
      this.audio = new Audio('/assets/audios/qp8.mp4');
      this.audio.play();
    }
    if(arg == 9){
      this.audio = new Audio('/assets/audios/qp9.mp4');
      this.audio.play();
    }
    if(arg == 10){
      this.audio = new Audio('/assets/audios/qp10.mp4');
      this.audio.play();
    }
    if(arg == 11){
      this.audio = new Audio('/assets/audios/qp11.mp4');
      this.audio.play();
    }
    if(arg == 12){
      this.audio = new Audio('/assets/audios/qp12.mp4');
      this.audio.play();
    }
    if(arg == 13){
      this.audio = new Audio('/assets/audios/qp14.mp4');
      this.audio.play();
    }
    if(arg == 14){
      this.audio = new Audio('/assets/audios/qp15.mp4');
      this.audio.play();
    }

    if(arg == 15){
      this.audio = new Audio('/assets/audios/qp16.mp4');
      this.audio.play();
    }
    if(arg == 16){
      this.audio = new Audio('/assets/audios/qp18.mp4');
      this.audio.play();
    } 
    if(arg == 17){
      this.audio = new Audio('/assets/audios/recap.mp4');
      this.audio.play();
    }
    if(arg == 18){
      this.audio = new Audio('/assets/audios/qc1.mp4');
      this.audio.play();
    }
    if(arg == 19){
      this.audio = new Audio('/assets/audios/qc2.mp4');
      this.audio.play();
    }
    if(arg == 20){
      this.audio = new Audio('/assets/audios/qc3.mp4');
      this.audio.play();
    }
    if(arg == 21){
      this.audio = new Audio('/assets/audios/qc4.mp4');
      this.audio.play();
    }
    if(arg == 22){
      this.audio = new Audio('/assets/audios/qc5.mp4');
      this.audio.play();
    }
    if(arg == 23){
      this.audio = new Audio('/assets/audios/qc6.mp4');
      this.audio.play();
    }
    if(arg == 24){
      this.audio = new Audio('/assets/audios/qc7.mp4');
      this.audio.play();
    }
    if(arg == 25){
      this.audio = new Audio('/assets/audios/qc8.mp4');
      this.audio.play();
    }
    if(arg == 26 || arg == 17){
      this.audio = new Audio('/assets/audios/recap.mp4');
      this.audio.play();
    }
  }
  nbrEnfant = [
    {no:0},
     {no:1},
    {no:2},
    {no:3},
    {no:4},
    {no:5},
    {no:6},
    {no:7},
    {no:8},
    {no:9},
    {no:10},
    {no:11},
    {no:12},
    {no:13},
    {no:14},
    {no:15},
    {no:16},
    {no:17},
    {no:18},
    {no:19},
    {no:20},
    {no:21},
    {no:22},
    {no:23},
    {no:24},
    {no:25},
    {no:26},
    {no:27},
    {no:28},
    {no:29},
    {no:30},
  ]
  origin =[
    {name:'Dakar'},
    {name:'Diourbel'},
    {name:'Fatick'},
    {name:'Kaffrine'},
    {name:'Kaolack'},
    {name:'Kédougou'},
    {name:'Kolda'},
    {name:'Louga'},
    {name:'Matam'},
    {name:'Saint-Louis'},
    {name:'Sédhiou'},
    {name:'Tambacounda'},
    {name:'Thiès'},
    {name:'Ziguinchor'},
  ]

  symptome = [
    {name:"Fièvre"},
    {name:"Toux"},
    {name:"Difficulté à respirer"},
    {name:"Mal de gorge"},
    {name:"Le nez bouché"},
    {name:"Conjonctivite "},
    {name:"Maux de tête "},
    {name:"Douleurs musculaires"},
    {name:"Une fatigue intense"},
    {name:"Diarrhée"},
    {name:"Perte de l’odorat"},
    {name:"Perte du goût"},
  ]
  Maladies =[
    {name:"AVC (Accident Vasculaire Cérébral)"},
    {name:"Cancer"},
    {name:"Chirurgie cardiaque"},
    {name:"Cirrhose"},
    {name:"Diabète"},
    {name:"Hypertension Artérielle"},
    {name:"Immunodépression"},
    {name:"Insuffisance Cardiaque"},
    {name:"Insuffisance Rénale Chronique"},
    {name:"Maladie Coronaire"},
    {name:"Obésité"}, 
    {name:"tabac"}, 
    {name:"Pathologie respiratoire chronique (Asthme, BPCO /Tabac...)"},
  ]
  age:any;
  async valider() {
     const loading = await this.loadingController.create({
      message: 'Please wait...',
      //duration: 2000
      showBackdrop: true,
      id: 'login'
    });

    await loading.present();
    setTimeout(() => {
      loading.dismiss();
      this.router.navigate(['/login']);
    }, 5000);
    
   // const { role, data } = await loading.onDidDismiss();

  }
  dateNaissetoDisplay:any
  dateContactToDisplay:any
  dateSaniContactToDisplay:any
  disDate(){
    return new Date(this.dateNaissance).toLocaleDateString()
  }
  getDateC(){
    return new Date(this.dateContact).toLocaleDateString()
  }
  getDateS(){
    return new Date(this.dateSaniContact).toLocaleDateString()
  }
  calculateDate(){
    console.log(this.dateNaissance)
    var diff = Date.now() - new Date(this.dateNaissance).getTime();
    var age_dt = new Date(diff);
    this.age = Math.abs(age_dt.getUTCFullYear() - 1970);
    //this.patient.age = this.age
    this.dateNaissance= this.dateNaissance;
    //this.dateNaissance.toString() = this.dateNaissance.toLocaleDateString()
  }
  ngOnInit() {
    this.playAudio(0);
  }

}
