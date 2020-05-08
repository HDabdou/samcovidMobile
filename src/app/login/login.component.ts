import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PinCheck } from '@ionic-native/pin-check/ngx';
import { LoadingController, AlertController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  code
  errorMessage
  constructor(private router:Router,private pinCheck: PinCheck,private loadingController: LoadingController,private alertController: AlertController) { }


  async presentLoading() {
    let login = this.code;
    this.router.navigate(['/home'])
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      //duration: 2000
      showBackdrop: true,
      id: 'login'
    });

    await loading.present();
    setTimeout(() => {
      
       this.router.navigate(['/home'])
    loading.dismiss();
    
    }, 5000);
    
   // const { role, data } = await loading.onDidDismiss();

  }
  inscription(){
    this.router.navigate(['/inscription']);
  }
 
   
  ngOnInit() {
    var audio = new Audio('/assets/audios/login.ogg');
    audio.play();
  }

}
