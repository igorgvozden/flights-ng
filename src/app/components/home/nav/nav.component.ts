import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { NavService } from 'src/app/api/services/nav.service';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { UserData } from 'src/app/shared/model/user-data.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  @Input() users: UserData[] = [];
  @ViewChild('modal') modal: ModalComponent;

  activeUser: string | null = null;

  constructor(private navService: NavService) {}

  ngOnInit(): void {}

  navBtnClick(e: any) {
    console.log(e);
    console.log(this.users, ' ovo imam u nav i sad ovo treba da otvori modal');
    this.modal.openDialog();
  }
}
