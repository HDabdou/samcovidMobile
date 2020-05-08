import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-tp-inr',
  templateUrl: './tp-inr.page.html',
  styleUrls: ['./tp-inr.page.scss'],
})
export class TpInrPage implements OnInit {

  @ViewChild('barChart',{static:false}) barChart;

  bars: any;
  colorArray: any;
  listeDisplay:boolean =false
  constructor() { }
  inrHistorique =[
    {date:'01-04-2020',tp:"1.25655",inr:"2.25655"},
    {date:'01-03-2020',tp:"2.45654",inr:"2.25655"},
    {date:'01-02-2020',tp:"3.46655",inr:"2.25655"},
    {date:'01-01-2020',tp:"2.64542",inr:"2.25655"},
    {date:'01-01-2020',tp:"2.65451",inr:"2.25655"},
    {date:'01-01-2017',tp:"5.68453",inr:"2.25655"},
    {date:'01-08-2019',tp:"4.16532",inr:"2.25655"},
    {date:'01-01-2019',tp:"1.64565",inr:"2.25655"},
    {date:'01-01-2019',tp:"2.31565",inr:"2.25655"},
    {date:'01-01-2019',tp:"6.98794",inr:"2.25655"},
    {date:'01-06-2018',tp:"2.65423",inr:"2.25655"},
    {date:'01-01-2018',tp:"2.65455",inr:"2.25655"},
  ]
  ionViewDidEnter() {
    this.createBarChart();
  }
  ngOnInit() {
    
  }
  dislplayListe(arg){
    if(arg =="oui"){
      console.log(arg)
      this.listeDisplay = true;
    }
    if(arg =="non"){
      console.log(arg)
      this.listeDisplay = false
    }
  }
  createBarChart() {
    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'line',//
      data: {
        labels: [ '01-01-2020', '01-01-2020', 'S01-01-20204', '01-01-2020', '01-01-2020', '01-01-2020'],
        datasets: [{
          label: 'Courbe suivi INR',
          data: [1.5, 7.8, 5, 6.9, 5.9, 3.5, 2],
          //backgroundColor: 'rgb(38, 194, 129)', // array should have same number of elements as number of dataset
          borderColor: 'rgb(38, 194, 229)',// array should have same number of elements as number of dataset
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

}
