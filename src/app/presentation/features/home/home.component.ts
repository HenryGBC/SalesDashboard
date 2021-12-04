import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IKpi } from 'src/app/core/models/products.model';
import { HomeFacade } from 'src/app/facades/home.facade';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  kpis$: Observable<IKpi[] | null>;
  constructor(private _homeFacade: HomeFacade) {
    this.kpis$ = this._homeFacade.kpis$;
  }

  ngOnInit(): void {
    this._homeFacade.getKpis();
  }
}
