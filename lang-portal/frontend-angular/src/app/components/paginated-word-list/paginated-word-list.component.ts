import { Component, OnInit } from '@angular/core';
import { WordsService } from '../../services/words.service';

@Component({
  selector: 'app-paginated-word-list',
  templateUrl: './paginated-word-list.component.html',
  styleUrls: ['./paginated-word-list.component.css']
})
export class PaginatedWordListComponent implements OnInit {

  words: any[] = [];
  totalItems: number = 0;
  pageSize: number = 10;
  currentPage: number = 0;

  constructor(private wordsService: WordsService) { }

  ngOnInit(): void {
    this.loadWords();
  }

  loadWords(): void {
    this.wordsService.getWords(this.currentPage + 1, this.pageSize).subscribe(data => {
      this.words = data.items;
      this.totalItems = data.pagination.totalItems;
    });
  }

  onPageChange(event: any): void {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadWords();
  }
}
