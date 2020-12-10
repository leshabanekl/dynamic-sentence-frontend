import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Sentence } from '../shared/model/sentence.model';
import { Word } from '../shared/model/word.model';

export interface SentencesResponse {
  sentences: Sentence[];
}

export interface WordsResponse {
  words: Word[];
}

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseURL = "http://localhost:8080/";

  constructor(private http: HttpClient) { }

  getWordsByType(type: string) {
    return this.http.get<any>(`${this.baseURL}api/word/${type}`);
  }

  getAllSentences() {
    return this.http.get<SentencesResponse>(`${this.baseURL}api/sentence`);
  }

  postSentence(sentence: Sentence): Observable<any>{
    return this.http.post(`${this.baseURL}api/sentence`, sentence);
  }  
}
