import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { OtherComponent } from '../../AssetCatagary/other/other.component';
import { RegistorEmpComponent } from '../../icons/registor-emp/registor-emp.component';
import { ViewEmpComponent } from '../../icons/view-emp/view-emp.component';
import { FurnitureComponent } from '../../AssetCatagary/furniture/furniture.component';
import { ViewAssetComponent } from '../../user-profile/view-asset/view-asset.component';
import { RegistorAssetComponent } from '../../user-profile/registor-asset/registor-asset.component';
import { ProjecterComponent } from '../../AssetCatagary/projecter/projecter.component';
import { ComputerComponent } from '../../AssetCatagary/computer/computer.component';
import { TestveiwComponent } from '../../firebase/testveiw/testveiw.component';
import { TestshowComponent } from '../../firebase/testshow/testshow.component';
import { EmployeeFilterPipe } from '../../icons/employee-filter-pipe';
import { AssetFilterPipe } from '../../user-profile/asset-filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ChartsModule,
    NgbModule,
    ToastrModule.forRoot()
  

  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    UpgradeComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    OtherComponent,
    RegistorEmpComponent,
    ViewEmpComponent,
    FurnitureComponent,
    ViewAssetComponent,
    RegistorAssetComponent,
    ComputerComponent,
    ProjecterComponent,
    TestveiwComponent,
    TestshowComponent,
    EmployeeFilterPipe,
    AssetFilterPipe
    

    
  
  ]
})

export class AdminLayoutModule {
}
