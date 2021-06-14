import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-wz-forum-item',
  templateUrl: './wz-forum-item.component.html',
  styleUrls: ['./wz-forum-item.component.css']
})
export class WZForumItemComponent implements OnInit {

  @Input() id?: string;
  @Input() title?: string;
  @Input() text?: string;
  @Input() image?: string;

  ngOnInit(): void {
  }

}
