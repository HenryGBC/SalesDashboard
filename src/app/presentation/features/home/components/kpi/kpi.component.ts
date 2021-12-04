import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import { IKpi } from 'src/app/core/models/products.model';

@Component({
  selector: 'app-kpi',
  templateUrl: './kpi.component.html',
  styleUrls: ['./kpi.component.scss'],
})
export class KpiComponent implements OnInit {
  @Input() kpi: IKpi | null;
  constructor() {
    this.kpi = null;
  }

  ngOnInit(): void {}
}
