import { EventEmitter, Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class AppService {
    private progressBar = new EventEmitter<boolean>;

    getProgressBarObs(): Observable<boolean> {
        return this.progressBar.asObservable()
    }

    showProgressBar(value: boolean) {
        this.progressBar.emit(value);
    }

    getLoadingObs(): Observable<boolean> {
        return this.progressBar.asObservable()
    }

    showLoading(value: boolean) {
        this.progressBar.emit(value);
    }
}