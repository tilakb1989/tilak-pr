import { Component, OnInit } from '@angular/core';
import { ChartType,ChartOptions } from 'chart.js';
import { SingleDataSet, Label } from 'ng2-charts';



@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss']
})
export class CollectionsComponent implements OnInit {
  public doughnutChartLegend: boolean = true;
  public doughnutChartLabels: Label[] = ['Invoice Not Tagged', 'Salary Processed', 'Salary to be Processed',' Finance Exceptions'];
  public doughnutChartData: SingleDataSet = [150, 100, 50,50];
  public doughnutChartType: ChartType = 'doughnut';
  public doughnutChartOptions: ChartOptions = {
    elements:{
      arc : {
        borderWidth: 0,
      }
    },
    cutoutPercentage: 70
  };

  private donutColors=[
    {
      backgroundColor: [
        '#1f83ec',
        '#21c67d',
        '#ffb528',
        '#5b3cf1'
    ]
    }
  ];

  heading: string;

  constructor() {}
  ngOnInit() {
    this.heading = "Collections";
  }
}
