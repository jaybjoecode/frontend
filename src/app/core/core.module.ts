import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardSimpleComponent } from './components/card-simple/card-simple.component';
import { CardTagHorizontalComponent } from './components/card-tag-horizontal/card-tag-horizontal.component';
import { CardTagDiagonalComponent } from './components/card-tag-diagonal/card-tag-diagonal.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    SidebarComponent,
    ToolbarComponent,
    SpinnerComponent,
    CardTagDiagonalComponent,
    CardTagHorizontalComponent,
    CardSimpleComponent,
  ],
  exports: [
    SidebarComponent,
    ToolbarComponent,
    SpinnerComponent,
    CardTagDiagonalComponent,
    CardTagHorizontalComponent,
    CardSimpleComponent,
  ],
  imports: [CommonModule],
})
export class CoreModule {}
