import { Component, ElementRef, Input, OnInit } from '@angular/core';

import { PoChartType } from '../enums/po-chart-type.enum';
import { PoLineChartSeries } from '../interfaces/po-chart-line-series.interface';

@Component({
  selector: 'po-chart-container',
  templateUrl: './po-chart-container.component.html'
})
export class PoChartContainerComponent implements OnInit {
  viewBox;

  private _series: Array<PoLineChartSeries>;
  private _containerSize;

  @Input('p-categories') categories: Array<any>;

  // DEFINIR INTERFACE
  @Input('p-container-size') set containerSize(value: any) {
    this._containerSize = value;
    this.viewBox = this.setViewBox();
  }

  get containerSize() {
    return this._containerSize;
  }

  @Input('p-min-max-values') minMaxValues: any;

  @Input('p-type') type: PoChartType;

  @Input('p-series') set series(value: Array<PoLineChartSeries>) {
    this._series = value;
  }

  get series() {
    return this._series;
  }

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {}

  setViewBox() {
    const { containerWidth, containerHeight } = this.containerSize;

    // Tratamento necessário para que não corte o vetor nas extremidades
    const offsetXY = 1;

    return `${offsetXY} -${offsetXY} ${containerWidth} ${containerHeight}`;
  }
}
