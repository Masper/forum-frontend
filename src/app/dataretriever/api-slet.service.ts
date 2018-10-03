import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post, Topic } from './apiformats';
import { Observable } from 'rxjs';
import { TOPICS } from './topics';



@Injectable({
  providedIn: 'root'
})

export class ApiSletService {
	private apiURL = 'http://localhost:3000/api/';
	private httpOptions = {
 	 headers: new HttpHeaders(
 	 	{'Content-Type': 'application/json'} )
};

  constructor(private http: HttpClient) {}

 getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiURL + "message")
 }

//mockdata = return TOPICS
 getTopics(): Observable<Topic[]> {
    return this.http.get<Topic[]>(this.apiURL + "topics")
 }

 submitTopic(newTopic: String): Observable<any>{
 	let apiUrlSubmit = (this.apiURL+"submittopic");
	return this.http.post<any>(apiUrlSubmit, newTopic, this.httpOptions)
 	;
 }

}
