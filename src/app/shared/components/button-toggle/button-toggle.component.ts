import { Location } from '@angular/common';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-button-toggle',
  templateUrl: './button-toggle.component.html',
  styleUrls: ['./button-toggle.component.scss'],
})
export class ButtonToggleComponent implements OnInit {
  @Input() multipleSelection: boolean = false;
  @Input() btnValues: string[] = [];

  @Output() toggleChange = new EventEmitter<MatButtonToggleChange>();

  loadedComponent: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    this.loadedComponent = this.router.routerState.snapshot.url.split('/')[1];
  }

  onToggleChange(event: MatButtonToggleChange) {
    this.toggleChange.emit(event.value);
  }
}
