import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GroupsService } from '../../services/groups.service';

@Component({
  selector: 'app-group-show',
  templateUrl: './group-show.component.html',
  styleUrls: ['./group-show.component.css']
})
export class GroupShowComponent implements OnInit {

  groupId!: number;
  group: any;

  constructor(
    private route: ActivatedRoute,
    private groupsService: GroupsService
  ) { }

  ngOnInit(): void {
    this.groupId = +this.route.snapshot.paramMap.get('id')!;
    this.groupsService.getGroup(this.groupId).subscribe(data => {
      this.group = data;
    });
  }
}
