import { Component, OnInit } from '@angular/core';

import { Platform, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit{
  public appPages = [
    {
      title: 'Mon compte',
      url: '/home',
      icon: 'person'
    },
    

  ];

  async deconnexion() {
    const alert = await this.alertController.create({
      header: 'I-coeure',
      //subHeader: 'Subtitle',
      subHeader: 'voulez vous quitter cette page',
      //message: 'Montant : '+this.montant+' Fcfa',
      buttons: [{
        text: 'Annuler',
        role: 'cancel',
        cssClass: 'danger',
        handler: () => {
          console.log('Confirm Cancel');
          
        }
      }, {
        text: 'Valider',
        cssClass: 'success',
        handler: () => {
          this.router.navigate(['/login']);
          localStorage.clear()
         
          console.log('Confirm Ok');
        }
      }]
    });

    await alert.present();
  }
  checker
  medecin:boolean = false;
  ngOnInit() {
    
  }
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router:Router,
    private alertController:AlertController
  ) {
    this.initializeApp();
  }
   
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
