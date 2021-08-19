import { Component, Input, OnInit } from '@angular/core';


@Component({
    selector: 'app-themed-link-btn',
    templateUrl: './themed-link-btn.component.html',
    styleUrls: ['./themed-link-btn.component.css']
})
export class ThemedLinkBtnComponent implements OnInit {
    @Input() path = '/';
    @Input() text = 'Home';

    constructor() {
    }

    ngOnInit(): void {
    }

}
