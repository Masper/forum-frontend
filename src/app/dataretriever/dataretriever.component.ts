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
	contentObject: any = [];
	pushInfo: Function;
	infoArray: any = [];
  clickType: Function;
  switchActiveCSS: Function;
  dataLoaded: boolean;
  deleteBox: Function;
  editMode: any;
  editBox: Function;
  newTopicBoolean: false;
  newTopic: Function;
  submitTopic: Function;
  idCounter: Number = 100;
  postSubmit: String;

  constructor(api: ApiSletService) { 

    this.newTopic = function() {
      this.newTopicBoolean = true;
    }

    this.submitTopic = function(newtopic) {
      var postApi = newtopic.value;
      postApi["time"] = new Date().toISOString();
      postApi["id"] = this.idCounter;
      this.idCounter = (this.idCounter+1)
      var postJSON = JSON.stringify(postApi);
      api.submitTopic(postJSON).subscribe(response => { this.postSubmit = response })
      console.log (this.postSubmit)
    }


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

    this.deleteBox = function(boxToDelete) {
      this.infoArray.splice(boxToDelete, 1)
    }

    this.editBox = function(index) {
      console.log(index + " called to edit")
    }

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