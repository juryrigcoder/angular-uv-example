import { Component } from '@angular/core';

declare var UV: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-example';
  uv: any;

  ngOnInit(): void{
    this.uv = UV.init(
      'uv',
      {
        manifestUri: 'https://wellcomelibrary.org/iiif/b18035723/manifest',
        configUri: 'config/config.json'
      },
      new UV.URLDataProvider()
    );
  }
}
