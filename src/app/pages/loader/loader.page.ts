import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader', //allows you to use the component within other templates by including this tag.
  templateUrl: './loader.page.html', 
  styleUrls: ['./loader.page.scss'],
})
export class LoaderPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
