import {
  Component,
  Input,
  OnInit,
  OnChanges,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { UserData } from '../../model/user-data.model';
import {
  MatDialog,
  MatDialogRef,
  MatDialogConfig,
} from '@angular/material/dialog';
import { NavService } from 'src/app/api/services/nav.service';
import { User } from '../../model/user.model';
import { UsersService } from 'src/app/api/services/users.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() users: UserData[] = [];
  @Input() activeUser: UserData | null;
  @Input() modalSize = { width: 100, height: 100 };
  @Input() modalStyle: string = 'default-modal';
  @Input() modalPosition = { top: '4rem', right: '1rem' };

  @ViewChild('content', { static: true }) content: TemplateRef<any>;

  constructor(private dialog: MatDialog, private usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService.activeUser$.subscribe((user) => {
      console.log('behave yourself', user);
      this.activeUser = user;
    });
  }

  dialogConfig = new MatDialogConfig();

  openDialog = () => {
    this.dialogConfig.position = this.modalPosition;

    console.log(this.users);
    this.dialog.open(this.content, this.dialogConfig);
  };

  setActiveUser = (data) => {
    console.log('data', data);
    this.usersService.setActiveUser(data);
  };

  addNewUser = (e) => {
    console.log(e);
  };

  logout = (e) => {
    console.log('logout: ', e);
  };

  manageAccount = (e) => {
    console.log(this.activeUser);
  };
}
