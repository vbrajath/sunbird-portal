import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { SuiModule } from 'ng2-semantic-ui';
import { CommonModule } from '@angular/common';
import { CommunityModule } from '@sunbird/community';
import { CoreModule } from '@sunbird/core';
import { SharedModule } from '@sunbird/shared';
import { HomeModule } from '@sunbird/home';
import { DashboardModule } from '@sunbird/dashboard';
import { AnnouncementModule } from '@sunbird/announcement';
import { Ng2IziToastModule } from 'ng2-izitoast';
import { ResourceModule } from '@sunbird/resource';
import { LearnModule } from '@sunbird/learn';
import { WorkspaceModule } from '@sunbird/workspace';
import { OrgManagementModule } from '@sunbird/org-management';
import { Ng2DeviceDetectorModule } from 'ng2-device-detector';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SuiModule,
    CommunityModule,
    SharedModule,
    HomeModule,
    DashboardModule,
    AnnouncementModule,
    Ng2IziToastModule,
    ResourceModule,
    LearnModule,
<<<<<<< HEAD
    WorkspaceModule,
    OrgManagementModule
=======
    Ng2DeviceDetectorModule.forRoot()
>>>>>>> 61968fb3568b851abf95912ba279fb82ba618b2d
  ],
  providers: [],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
  }
}