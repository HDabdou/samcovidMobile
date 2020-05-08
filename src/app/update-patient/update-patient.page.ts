import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.page.html',
  styleUrls: ['./update-patient.page.scss'],
})
export class UpdatePatientPage implements OnInit {
  imagePath
  imgURL
  loaded:boolean = false;
  fileChange(event) {
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
        let file: File = fileList[0];
        let formData:FormData = new FormData();
        formData.append('file', file, file.name);
      console.log(formData);
      var reader = new FileReader();
    this.imagePath = fileList;
    reader.readAsDataURL(fileList[0]); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
      this.loaded = true;
    }
    }
}
  constructor() { }

  ngOnInit() {
  }

}
