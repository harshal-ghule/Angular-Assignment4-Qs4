import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OSCompComponent } from './oscomp/oscomp.component';
import { PLCompComponent } from './plcomp/plcomp.component';
import { DBCompComponent } from './dbcomp/dbcomp.component';

const routes: Routes = [
  {path : 'oscomp', component:OSCompComponent},
  {path : 'plcomp', component:PLCompComponent},
  {path : 'dbcomp', component:DBCompComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
