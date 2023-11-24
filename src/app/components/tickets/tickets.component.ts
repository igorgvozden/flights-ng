import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { UsersService } from 'src/app/api/services/users.service';
import { DescendAnimation } from 'src/app/shared/animations';
import { Ticket } from 'src/app/shared/model/ticket.model';
import { UserData } from 'src/app/shared/model/user-data.model';

@UntilDestroy()
@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss'],
  animations: [DescendAnimation],
})
export class TicketsComponent implements OnInit {
  tickets: Ticket[] = [];
  activeUser: UserData;

  title: string = 'Tickets';
  heroSrc: string = '../../../../assets/images/hero-tickets.jpg';

  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.usersService
      .getActiveUser()
      .pipe(untilDestroyed(this))
      .subscribe((user) => {
        if (user && user.tickets) {
          this.activeUser = user;
          this.tickets = user.tickets;
        }
      });
  }
}
