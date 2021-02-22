import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'skeleton';
  loaded = false;

  ngOnInit() {
    setInterval(() => {
      this.loaded = true;
    }, 3000);
  }
}
