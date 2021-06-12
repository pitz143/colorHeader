import { Component, ChangeDetectionStrategy } from '@angular/core';
import { element } from '@angular/core/src/render3';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public ionicNamedColor: string = 'primary';

    constructor() {}

    public toggleNamedColor(event): void {
        this.ionicNamedColor = event.target.color;
        console.log(event.target.color);
    }
  
}
