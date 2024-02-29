import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user3-list',
  template: `
    <h1 class="custom">
      user3-list works!
</h1>
  `,
  styles: [
    ".custom{color: green; background: black}"
  ]
})
export class User3ListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
