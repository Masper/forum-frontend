import { Component, OnInit } from '@angular/core';
import { ApiSletService } from './api-slet.service' ;
declare var require: any;
import { Post, Topic } from './apiformats'

@Component({
  selector: 'app-dataretriever',
  templateUrl: './dataretriever.component.html',
  styleUrls: ['./dataretriever.component.css']
})

export class DataretrieverComponent implements OnInit {
	selectedType: String = null;
	contentObject: [] = null;
	pushInfo: Function;
	infoArray: any = [];
  clickType: Function;
  switchActiveCSS: Function;
  dataLoaded: boolean;

  constructor(api: ApiSletService) { 


  	this.clickType = function(type) {
      this.switchActiveCSS(type);

  	  if (type == "posts") {
  			api.getPosts().subscribe(response => {this.contentObject = response; this.dataLoaded = true});
  		}

  		else if (type == "topics") {
        api.getTopics().subscribe(response => {this.contentObject = response; this.dataLoaded = true})
      }
  	}

  	this.pushInfo = ((idClicked) => {
  		this.infoArray.push(this.contentObject[idClicked])	
  	})

    this.switchActiveCSS = function(type) {
      this.selectedType = (type);
      if (type == "posts"){
        document.getElementById("button-posts").style.backgroundColor = "red";
        document.getElementById("button-topics").style.backgroundColor = "orange";
    }
      else {
        document.getElementById("button-posts").style.backgroundColor = "orange";
        document.getElementById("button-topics").style.backgroundColor = "red";        
    }
  }       
}
 

  ngOnInit() { 
 }

  ngOnChanges() {
  }

}


//  			document.getElementById("dropdown-posts").style.visibility = "visible";