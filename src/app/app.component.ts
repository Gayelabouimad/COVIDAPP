import { Component, Input } from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'COVIDAPP';
  patients = [
    {
      id: "1",
      name: "gayel",
      lastname: "abou imad"
    },
    {
      id: "2",
      name: "mona",
      lastname: "abi khalil"
    }
  ];

  staff = [
    {
      id: "1",
      name: "celine",
      lastname: "beyrouthy"
    },
    {
      id: "2",
      name: "celine",
      lastname: "elya"
    }
  ];
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
