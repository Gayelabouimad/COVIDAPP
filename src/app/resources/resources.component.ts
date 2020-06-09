import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  resources = [
    {
      id: "1",
      name: "rec",
      lastname: "aa"
    },
    {
      id: "2",
      name: "rec",
      lastname: "bb"
    }
  ];

}
