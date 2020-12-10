import { Component, OnInit } from '@angular/core';
import { HttpService, SentencesResponse } from 'src/app/service/http.service';
import { Sentence } from 'src/app/shared/model/sentence.model';

@Component({
  selector: 'app-all-sentences',
  templateUrl: './all-sentences.component.html',
  styleUrls: ['./all-sentences.component.css']
})
export class AllSentencesComponent implements OnInit {
  sentences: Array<Sentence>;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getAllSentences().subscribe((response: SentencesResponse) => {
      this.sentences = response.sentences;
    });
  }

}
