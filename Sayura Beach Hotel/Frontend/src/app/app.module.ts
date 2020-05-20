import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './Pages/login/login/login.component';
import { HomeComponent } from './Pages/customer/home/home.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { BookingComponent } from './Pages/customer/booking/booking.component';
import { CustomerUpdateComponent } from './Pages/customer/customer-update/customer-update.component';
import { CustomerDeleteComponent } from './Pages/customer/customer-delete/customer-delete.component';
import { UpdateBookingComponent } from './Pages/customer/update-booking/update-booking.component';
import { DeleteBookingComponent } from './Pages/customer/delete-booking/delete-booking.component';
import { HeaderComponent } from './Components/header/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ManageEmpDetailsComponent } from './Pages/Employee/Admin/manage-emp-details/manage-emp-details.component';
import { UpdateEmpDetailsComponent } from './Pages/Employee/Admin/update-emp-details/update-emp-details.component';
import { DeleteEmpDetailsComponent } from './Pages/Employee/Admin/delete-emp-details/delete-emp-details.component';
import { WorkEmpDetailsComponent } from './Pages/Employee/Admin/work-emp-details/work-emp-details.component';
import { AttendanceEmpDetailsComponent } from './Pages/Employee/Admin/attendance-emp-details/attendance-emp-details.component';
import { InsertDailyShiftComponent } from './Pages/Maintanence/Admin/insert-daily-shift/insert-daily-shift.component';
import { InsertEquipmentComponent } from './Pages/Maintanence/Admin/insert-equipment/insert-equipment.component';
import { UpdateDailyShiftComponent } from './Pages/Maintanence/Admin/update-daily-shift/update-daily-shift.component';
import { DeleteDailyShiftComponent } from './Pages/Maintanence/Admin/delete-daily-shift/delete-daily-shift.component';
import { DeleteEquipmentComponent } from './Pages/Maintanence/Admin/delete-equipment/delete-equipment.component';
import { EquipmentUpdateCenterComponent } from './Pages/Maintanence/Admin/equipment-update-center/equipment-update-center.component';
import { MaintanaceSidebarComponent } from './Components/sidebar/Maintanence-Sidebar/maintanace-sidebar/maintanace-sidebar.component';
import { VehicleComponent } from './Pages/Transport/vehicle/vehicle.component';
import { UpdateComponent } from './Pages/Transport/update/update.component';
import { DeleteComponent } from './Pages/Transport/delete/delete.component';
import { AvailableComponent } from './Pages/Transport/available/available.component';
import { TransportSidebarComponent } from './Components/sidebar/Transport-sidebar/transport-sidebar/transport-sidebar.component';
import { ViewEmpDetailsComponent } from './Pages/Employee/Employee/view-emp-details/view-emp-details.component';
import { EmployeeSidebarComponent } from './Components/sidebar/employee-sidebar/employee-sidebar.component';
import { AddDetailsComponent } from './Pages/restaurant/add-details/add-details.component';
import { ResSideBarComponent } from './Components/sidebar/ResSideBar/res-side-bar/res-side-bar.component';
import { RestaurantViewComponent } from './Pages/restaurant/restaurant-view/restaurant-view.component';
import { DeleteDetailsComponent } from './Pages/restaurant/delete-details/delete-details.component';
import { TableBookingComponent } from './Pages/restaurant/table-booking/table-booking.component';
import { UpdateDetailsComponent } from './Pages/restaurant/update-details/update-details.component';
import { TableBookingDeleteComponent } from './Pages/restaurant/table-booking-delete/table-booking-delete.component';
import { InsertDailyShift2Component } from './Pages/Maintanence/Admin/insert-daily-shift2/insert-daily-shift2.component';
import { StockDetailsComponent } from './Pages/Inventory/stock-details/stock-details.component';
import { SuplierDetailsComponent } from './Pages/Inventory/suplier-details/suplier-details.component';
import { InventroySideBarComponent } from './Components/sidebar/inventory-sidebar/inventroy-side-bar/inventroy-side-bar.component';
import { UpdateStockDetailsComponent } from './Pages/Inventory/update-stock-details/update-stock-details.component';
import { DeleteStockDetailsComponent } from './Pages/Inventory/delete-stock-details/delete-stock-details.component';
import { UpdateSupplierDetailsComponent } from './Pages/Inventory/update-supplier-details/update-supplier-details.component';
import { DeleteSupplierDetailsComponent } from './Pages/Inventory/delete-supplier-details/delete-supplier-details.component';
import { ViewEmployeeDetailComponent } from './Pages/Accounts/Admin/view-employee-detail/view-employee-detail.component';
import { AddEmployeeDetailComponent } from './Pages/Accounts/Admin/add-employee-detail/add-employee-detail.component';
import { UpdateEmployeeDetailComponent } from './Pages/Accounts/Admin/update-employee-detail/update-employee-detail.component';
import { DeleteEmployeeDetailComponent } from './Pages/Accounts/Admin/delete-employee-detail/delete-employee-detail.component';
import { AccountsSidebarComponent } from './Components/sidebar/accounts-sidebar/accounts-sidebar.component';
import { ViewCustomerComponent } from './Pages/Customer/view-customer/view-customer.component';
import { ViewtablebookingdetailsComponent } from './Pages/restaurant/viewtablebookingdetails/viewtablebookingdetails.component';
import { UpdateTableBookingComponent } from './Pages/restaurant/update-table-booking/update-table-booking.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SidebarComponent,
    BookingComponent,
    CustomerUpdateComponent,
    CustomerDeleteComponent,
    UpdateBookingComponent,
    DeleteBookingComponent,
    HeaderComponent,
    FooterComponent,
    ManageEmpDetailsComponent,
    UpdateEmpDetailsComponent,
    DeleteEmpDetailsComponent,
    WorkEmpDetailsComponent,
    AttendanceEmpDetailsComponent,
    InsertDailyShiftComponent,
    InsertEquipmentComponent,
    UpdateDailyShiftComponent,
    DeleteDailyShiftComponent,
    DeleteEquipmentComponent,
    EquipmentUpdateCenterComponent,
    MaintanaceSidebarComponent,
    VehicleComponent,
    AvailableComponent,
    UpdateComponent,
    DeleteComponent,
    TransportSidebarComponent,
    ViewEmpDetailsComponent,
    EmployeeSidebarComponent,
    AddDetailsComponent,
    ResSideBarComponent,
    RestaurantViewComponent,
    DeleteDetailsComponent,
    TableBookingComponent,
    UpdateDetailsComponent,
    TableBookingDeleteComponent,
    InsertDailyShift2Component,
    StockDetailsComponent,
    SuplierDetailsComponent,
    InventroySideBarComponent,
    UpdateStockDetailsComponent,
    DeleteStockDetailsComponent,
    UpdateSupplierDetailsComponent,
    DeleteSupplierDetailsComponent,
    ViewEmployeeDetailComponent,
    AddEmployeeDetailComponent,
    UpdateEmployeeDetailComponent,
    DeleteEmployeeDetailComponent,
    AccountsSidebarComponent,
    ViewCustomerComponent,
    ViewtablebookingdetailsComponent,
    UpdateTableBookingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
