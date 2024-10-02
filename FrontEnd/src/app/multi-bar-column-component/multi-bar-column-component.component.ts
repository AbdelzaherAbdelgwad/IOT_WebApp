import { SecurityAdminComponent } from './../security-admin/security-admin.component';
import {
  Component
} from '@angular/core';
import {
  Chart
} from 'chart.js';
import {
  min
} from 'rxjs';

@Component({
  selector: 'app-multi-bar-column-component',
  templateUrl: './multi-bar-column-component.component.html',
  styleUrls: ['./multi-bar-column-component.component.css']
})
export class MultiBarColumnComponentComponent {
  ctx: any;
  config: any;
  chartDatalabels: any[] = [];
  dos: number = this.sec.dosAttackCount;
  port: number= this.sec.portScanCount;
  constructor(private sec:SecurityAdminComponent){}
  ngOnInit() {

    this.chartDatalabels.push('Attacks');


    this.ctx = document.getElementById('myChart');

    this.config = {
      type: 'bar',
      data: {
        labels: this.chartDatalabels,
        datasets: [{
            label: 'DOS',
            data: [this.dos],
            borderWidth: 2,
            borderColor: 'grey',
            backgroundColor: 'pink'
          },
          {
            label: 'port scan',
            data: [this.port],
            borderWidth: 2,
            borderColor: 'blue',

            backgroundColor: 'yellow'
          },
          {
            label: 'SSH',
            data: [10],
            borderWidth: 2,
            borderColor: 'grey',
            backgroundColor: 'red'
          },
          {
            label: 'beginChart',
            data: [0],
            borderWidth: 0,
            barThickness: 0,
            borderColor: 'grey'

          }
        ],
        options: {
          scales: {
            x: {
              grid: {
                offset: false
              }
            },
            y: {
              grid: {
                offset: true
              },
              suggestedMin: 0 
            }

          }
        }



      }
    }
    const myChart = new Chart(this.ctx, this.config);
  }

}
