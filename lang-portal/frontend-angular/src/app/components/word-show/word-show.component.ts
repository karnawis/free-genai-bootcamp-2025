import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WordsService } from '../../services/words.service';

@Component({
  selector: 'app-word-show',
  templateUrl: './word-show.component.html',
  styleUrls: ['./word-show.component.css']
})
export class WordShowComponent implements OnInit {

  wordId!: number;
  word: any;

  constructor(
    private route: ActivatedRoute,
    private wordsService: WordsService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.wordId = +id;
    } else {
      // handle the case when id is null
      console.error('ID parameter is missing');
    }
    this.wordsService.getWord(this.wordId).subscribe(data => {
      this.word = data;
    });
  }
}
