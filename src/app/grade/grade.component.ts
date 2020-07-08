import { Component, OnInit } from '@angular/core';
import { GradeService } from './grade.service';

@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.scss']
})
export class GradeComponent implements OnInit {
  grade;
  constructor(private gradeService: GradeService) { }

  ngOnInit(): void {
    this.gradeService.getGrade().subscribe(
      (results) => {
        this.grade = results;
        console.log(results);
      }
    )
  }

}
