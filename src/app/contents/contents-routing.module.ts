import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContentsComponent} from './contents.component';

const CONTENT_ROUTES: Routes = [{
  path:'',
  component: ContentsComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(CONTENT_ROUTES)],
  exports: [RouterModule]
})
export class ContentsRoutingModule { }
