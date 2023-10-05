import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './parent/child/child.component';
import { ParentComponent } from './parent/parent.component';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
  { path: 'parent-child', component: ParentComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users/:username', component: UserDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
