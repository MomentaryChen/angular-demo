import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-grade-charts',
  templateUrl: './grade-charts.component.html',
  styleUrls: ['./grade-charts.component.scss']
})
export class GradeChartsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  barChartOptions: ChartOptions = {
    responsive: true
  };
  barChartLabels: Label[] = ['A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: [45, 37, 60, 70, 46, 33, 45, 37, 60, 70, 46, 33, 45, 37, 60, 70, 46, 33], label: 'Best Grades' }
  ];

  public colors = [
    { backgroundColor: "#598bff" },
    { backgroundColor: "green" },
    { backgroundColor: "blue" },
    { backgroundColor: "yellow" }
  ];
}
