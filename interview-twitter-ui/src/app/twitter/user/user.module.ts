import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {UserContainerComponent} from "./user-container/user-container.component";
import {UserInfoComponent} from "./user-info/user-info.component";
import {UserViewComponent} from "./user-view/user-view.component";
// import {UserTweetsViewComponent} from "./user-tweets-view/user-tweets-view.component";
// import {UserTweetsTableComponent} from "./user-tweets-table/user-tweets-table.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '', component: UserContainerComponent, children: [
          {path: '', component: UserViewComponent}
        ],
      },
    ]),
    CommonModule,
  ],
  declarations: [UserContainerComponent, UserInfoComponent, UserViewComponent],
})
export class UserModule {
}
