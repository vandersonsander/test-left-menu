import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit, AfterViewInit {
  @Input() item;
  @Input() index;
  isCollapsed = true;
  @ViewChild('subItem')
  component: ElementRef;

  constructor() {}
ngAfterViewInit(): void {
  this.component.nativeElement.style.maxHeight = this.component?.nativeElement.offsetHeight;
}

  ngOnInit() {
    if (this.index === 0) {
      this.isCollapsed = false;
    }
  }
}
