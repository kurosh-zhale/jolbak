import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  Output,
  EventEmitter,
} from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { SearchDialogComponent } from './search-dialog/search-dialog.component';
import { enableDebugTools } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isMainPage = true;

  isMobile = window.innerWidth < 450 ? true : false;

  @Output('nav') navEvent: EventEmitter<null> = new EventEmitter<null>();

  constructor(
    private readonly router: Router,
    private readonly dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  navigateTo(path: string) {
    this.router.navigate([path]);
  }

  menuEvent() {
    this.navEvent.emit(null);
  }

  openSearch() {
    this.dialog.open(SearchDialogComponent, {
      height: '90px',
      width: '300px',
      position: { top: '200px' },
    });
  }
}
