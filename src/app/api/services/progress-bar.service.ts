import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProgressBarService {
  progressBarStatus: boolean = false;
  $progressBarStatus: BehaviorSubject<boolean> = new BehaviorSubject(
    this.progressBarStatus
  );

  setProgressBarStatus = (status: boolean) => {
    this.progressBarStatus = status;
    this.$progressBarStatus.next(this.progressBarStatus);
  };

  getProgressBarStatus = (): BehaviorSubject<boolean> =>
    this.$progressBarStatus;
}
