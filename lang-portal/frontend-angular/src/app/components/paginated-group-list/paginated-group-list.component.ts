import { Component, OnInit } from '@angular/core';
import { GroupsService } from '../../services/groups.service';

@Component({
  selector: 'app-paginated-group-list',
  templateUrl: './paginated-group-list.component.html',
  styleUrls: ['./paginated-group-list.component.css']
})
export class PaginatedGroupListComponent implements OnInit {

  groups: any[] = [];
  totalItems: number = 0;
  pageSize: number = 10;
  currentPage: number = 0;

  constructor(private groupsService: GroupsService) { }

  ngOnInit(): void {
    this.loadGroups();
  }

  loadGroups(): void {
    this.groupsService.getGroups(this.currentPage + 1, this.pageSize).subscribe(data => {
      this.groups = data.items;
      this.totalItems = data.pagination.totalItems;
    });
  }

  onPageChange(event: any): void {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadGroups();
  }
}
