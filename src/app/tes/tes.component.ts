import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tes',
  templateUrl: './tes.component.html',
  styleUrls: ['./tes.component.scss']
})
export class TesComponent implements OnInit {
  @Input() cWidth;
  @Input() cHeight;
  @Input() circle: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  getMyStyle() {
    const myStyles = {
      'width.px': this.cWidth ? this.cWidth : '',
      'height.px': this.cHeight ? this.cHeight : '',
      'border-radius': this.circle ? '50%' : ''
    };
    return myStyles;
  }
}
