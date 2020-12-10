import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';
import { HttpService } from 'src/app/service/http.service';
import { Sentence } from 'src/app/shared/model/sentence.model';
import { Word } from 'src/app/shared/model/word.model';

@Component({
  selector: 'app-new-sentence',
  templateUrl: './new-sentence.component.html',
  styleUrls: ['./new-sentence.component.css']
})
export class NewSentenceComponent implements OnInit {
  nouns: Word[];
  verbs: Word[];
  adjectives: Word[];
  adverbs: Word[];
  pronouns: Word[];
  prepositions: Word[];
  conjuctions: Word[];
  determiners: Word[];
  exclamations: Word[];
  
  newSentence = "";
  space = " ";

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getWordsByType("noun").subscribe(
      (response) => this.nouns = response.noun
    );

    this.httpService.getWordsByType("verb").subscribe(
      (response) => this.verbs = response.verb
    );

    this.httpService.getWordsByType("adjective").subscribe(
      (response) => this.adjectives = response.adjective
    );

    this.httpService.getWordsByType("adverb").subscribe(
      (response) => this.adverbs = response.adverb
    );

    this.httpService.getWordsByType("pronoun").subscribe(
      (response) => this.pronouns = response.pronoun
    );

    this.httpService.getWordsByType("preposition").subscribe(
      (response) => this.prepositions = response.preposition
    );

    this.httpService.getWordsByType("conjuction").subscribe(
      (response) => this.conjuctions = response.conjuction
    );

    this.httpService.getWordsByType("determiner").subscribe(
      (response) => this.determiners = response.determiner
    );

    this.httpService.getWordsByType("exclamation").subscribe(
      (response) => this.exclamations = response.exclamation
    );
  }

  stateChanged(word: string) {
    if(word.length > 0) {
      if(this.newSentence.length == 0) {
        this.newSentence = word.charAt(0).toUpperCase() + word.substring(1, word.length);
        return;
      }
      this.newSentence = this.newSentence.concat(this.space + word.toLowerCase());
    }
  }

  onSubmit() {
    if(this.newSentence.length <= 0) return;
    
    const sentenceObject: Sentence = {
      id: null,
      value: this.newSentence,
    };

    this.httpService.postSentence(sentenceObject).subscribe(
      (response) => this.newSentence = ""
    )
  }
}
