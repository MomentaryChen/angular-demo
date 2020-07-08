import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { DetailsService } from './details.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  problem: string = '';
  id: string;
  count: number = 1;
  totalCount: number = 0;
  records: any;
  constructor(private detailsService: DetailsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.problem = params['problem'];
      this.detailsService.getErrorTypeMsg(this.problem).subscribe(
        (results) => {
          this.errorTypeMsgLabels = results[0].ename;
          this.errorTypeMsgData = [];
          this.errorTypeMsgData.push({ data: results[0].count, label: 'Error Type' });
        }
      )
    });
  }

  barChartOptions: ChartOptions = {
    responsive: true
  };
  errorTypeMsgLabels: Label[];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  errorTypeMsgData: ChartDataSets[] = [
    // { data: [45, 37, 60, 70, 46, 33, 45, 37, 60, 70, 46, 33, 45, 37, 60, 70, 46, 33], label: 'Error Type' }
  ];

  public colors = [
    { backgroundColor: "#598bff" },
    { backgroundColor: "green" },
    { backgroundColor: "blue" },
    { backgroundColor: "yellow" }
  ];

  public searchRecords() {
    if (!this.id) this.records = { error: '請輸入學號' };
    if (this.id && this.id !== null) {
      this.detailsService.getRecords(this.id, this.problem, this.count - 1).subscribe(
        (results) => {
          this.records = results;
          console.log(results);
        }
      )
    }
  }

  addCount() {
    if (this.count < this.records.total_count) {
      this.count++;
    }
    this.searchRecords();
  }

  subCount() {
    if (this.count !== 1) {
      this.count--;
    }
    this.searchRecords();
  }

}
