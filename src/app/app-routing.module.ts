import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewCComponent } from './new-c/new-c.component';
import { AuthGuardService } from './services/auth.guard.service';

const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'new', component: NewCComponent, canActivate: [AuthGuardService]},
    {path: '**', component: HomeComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}