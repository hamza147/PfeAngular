import { Component, OnInit, Input } from '@angular/core';
import Chart  from "chart.js";
import { PersonneService } from 'src/app/services/personne.service';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  @Input("my-id") myId=''
  @Input("my-type") myType='bar'
  @Input("data") data
  chantiers=[]
  nbPersonnes=[]

  constructor() { }
  async  parse(){
    if(this.data){
      this.data.forEach(p=>{
        console.log("p[0]  :", p[0])
         this.nbPersonnes.push(p[0])
         this.chantiers.push(p[1])
      })
    }
  }
   ngOnInit() {  
    this.parse()     
  }

 
   ngAfterViewInit(): void {
    console.log('this.chantiers :', this.chantiers)
    var chart = new Chart(this.myId, {
      type: this.myType,
      data: {
          labels:this.chantiers,
          datasets: [{
              label: '# of Votes',
              data: this.nbPersonnes,
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
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
