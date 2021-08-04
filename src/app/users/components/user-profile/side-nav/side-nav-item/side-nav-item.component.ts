import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-side-nav-item',
    templateUrl: './side-nav-item.component.html',
    styleUrls: ['./side-nav-item.component.css']
})
export class SideNavItemComponent implements OnInit {
  public svgPath = '/assets/img/icons.svg#';
  @Input() url = '';
  @Input() svgSuffix = '';
  @Input() textContent = '';

    constructor() {}

    ngOnInit(): void {
    }

}
