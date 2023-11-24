import { Location } from '@angular/common';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/api/services/users.service';
import { UserData } from '../../model/user-data.model';

@Component({
  selector: 'app-button-toggle',
  templateUrl: './button-toggle.component.html',
  styleUrls: ['./button-toggle.component.scss'],
})
export class ButtonToggleComponent implements OnInit {
  @Input() multipleSelection: boolean = false;
  @Input() btnValues: string[] = [];

  @Output() toggleChange = new EventEmitter<MatButtonToggleChange>();

  activeUser: UserData | null = null;
  loadedComponent: string = '';

  disabledWithoutActiveUser = [ 'bookings', 'tickets'];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private usersService: UsersService
  ) {}

  ngOnInit() {
    this.loadedComponent = this.router.routerState.snapshot.url.split('/')[1];

    this.usersService.getActiveUser().subscribe((user) => {
      this.activeUser = user;
    });
  }

  onToggleChange(event: MatButtonToggleChange) {
    this.toggleChange.emit(event.value);
  }

  isDisabled = (button) => this.disabledWithoutActiveUser.includes(button) && !this.activeUser ? true : false;
  
}
