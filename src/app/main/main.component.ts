import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css', './mainmob.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  visibility: boolean = true;
	invisibility: boolean = false;

    transfer(){
		this.visibility=!this.visibility;
		this.invisibility=!this.invisibility;
	}

}
