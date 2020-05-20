import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Pages/login/login/login.component';
import { HomeComponent } from './Pages/customer/home/home.component';
import { BookingComponent } from './Pages/customer/booking/booking.component';
import { CustomerUpdateComponent } from './Pages/customer/customer-update/customer-update.component';
import { CustomerDeleteComponent } from './Pages/customer/customer-delete/customer-delete.component';
import { UpdateBookingComponent } from './Pages/customer/update-booking/update-booking.component';
import { DeleteBookingComponent } from './Pages/customer/delete-booking/delete-booking.component';
import { InsertDailyShiftComponent } from './Pages/Maintanence/Admin/insert-daily-shift/insert-daily-shift.component';
import { UpdateDailyShiftComponent } from './Pages/Maintanence/Admin/update-daily-shift/update-daily-shift.component';
import { DeleteDailyShiftComponent } from './Pages/Maintanence/Admin/delete-daily-shift/delete-daily-shift.component';
import { VehicleComponent } from './Pages/Transport/vehicle/vehicle.component';
import { UpdateComponent } from './Pages/Transport/update/update.component';
import { DeleteComponent } from './Pages/Transport/delete/delete.component';
import { AvailableComponent } from './Pages/Transport/available/available.component';
import { ManageEmpDetailsComponent } from './Pages/Employee/Admin/manage-emp-details/manage-emp-details.component';
import { UpdateEmpDetailsComponent } from './Pages/Employee/Admin/update-emp-details/update-emp-details.component';
import { DeleteEmpDetailsComponent } from './Pages/Employee/Admin/delete-emp-details/delete-emp-details.component';
import { AttendanceEmpDetailsComponent } from './Pages/Employee/Admin/attendance-emp-details/attendance-emp-details.component';
import { WorkEmpDetailsComponent } from './Pages/Employee/Admin/work-emp-details/work-emp-details.component';
import { ViewEmpDetailsComponent } from './Pages/Employee/Employee/view-emp-details/view-emp-details.component';
import { AddDetailsComponent } from './Pages/restaurant/add-details/add-details.component';
import { RestaurantViewComponent } from './Pages/restaurant/restaurant-view/restaurant-view.component';
import { DeleteDetailsComponent } from './Pages/restaurant/delete-details/delete-details.component';
import { TableBookingComponent } from './Pages/restaurant/table-booking/table-booking.component';
import { UpdateDetailsComponent } from './Pages/restaurant/update-details/update-details.component';
import { TableBookingDeleteComponent } from './Pages/restaurant/table-booking-delete/table-booking-delete.component';
import { InsertEquipmentComponent } from './Pages/Maintanence/Admin/insert-equipment/insert-equipment.component';
import { EquipmentUpdateCenterComponent } from './Pages/Maintanence/Admin/equipment-update-center/equipment-update-center.component';
import { DeleteEquipmentComponent } from './Pages/Maintanence/Admin/delete-equipment/delete-equipment.component';
import { StockDetailsComponent } from './Pages/Inventory/stock-details/stock-details.component';
import { SuplierDetailsComponent } from './Pages/Inventory/suplier-details/suplier-details.component';
import { DeleteStockDetailsComponent } from './Pages/Inventory/delete-stock-details/delete-stock-details.component';
import { UpdateStockDetailsComponent } from './Pages/Inventory/update-stock-details/update-stock-details.component';
import { UpdateSupplierDetailsComponent } from './Pages/Inventory/update-supplier-details/update-supplier-details.component';
import { DeleteSupplierDetailsComponent } from './Pages/Inventory/delete-supplier-details/delete-supplier-details.component';
import { ViewEmployeeDetailComponent } from './Pages/Accounts/Admin/view-employee-detail/view-employee-detail.component';
import { AddEmployeeDetailComponent } from './Pages/Accounts/Admin/add-employee-detail/add-employee-detail.component';
import { UpdateEmployeeDetailComponent } from './Pages/Accounts/Admin/update-employee-detail/update-employee-detail.component';
import { DeleteEmployeeDetailComponent } from './Pages/Accounts/Admin/delete-employee-detail/delete-employee-detail.component';
import { ViewCustomerComponent } from './Pages/Customer/view-customer/view-customer.component';
import { ViewtablebookingdetailsComponent } from './Pages/restaurant/viewtablebookingdetails/viewtablebookingdetails.component';
import { UpdateTableBookingComponent } from './Pages/restaurant/update-table-booking/update-table-booking.component';

import { from } from 'rxjs';
// tslint:disable-next-line:one-variable-per-declaration
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'customeru', component: CustomerUpdateComponent },
  { path: 'customerdelete', component: CustomerDeleteComponent },
  { path: 'ubooking', component: UpdateBookingComponent },
  { path: 'bookingdelete', component: DeleteBookingComponent },
  { path: 'insert', component: InsertDailyShiftComponent },
  { path: 'updatedailyshift', component: UpdateDailyShiftComponent },
  { path: 'deletedailyshift', component: DeleteDailyShiftComponent },
  { path: 'vehicle', component: VehicleComponent },
  { path: 'update', component: UpdateComponent },
  { path: 'delete', component: DeleteComponent },
  { path: 'available', component: AvailableComponent },
  { path: 'manage-emp', component: ManageEmpDetailsComponent },
  { path: 'update-emp-details', component: UpdateEmpDetailsComponent },
  { path: 'delete-emp-details', component: DeleteEmpDetailsComponent },
  { path: 'attendance-emp-details', component: AttendanceEmpDetailsComponent },
  { path: 'work-emp-details', component: WorkEmpDetailsComponent },
  { path: 'view-emp-details', component: ViewEmpDetailsComponent },
  { path: 'adddetails', component: AddDetailsComponent },
  { path: 'restaurantview', component: RestaurantViewComponent },
  { path: 'deletedetails', component: DeleteDetailsComponent },
  { path: 'tablebooking', component: TableBookingComponent },
  { path: 'updatedetails', component: UpdateDetailsComponent },
  { path: 'tablebookingdelete', component: TableBookingDeleteComponent },
  { path: 'inserteqpment', component: InsertEquipmentComponent },
  { path: 'updateeqpment', component: EquipmentUpdateCenterComponent },
  { path: 'deleteeqpment', component: DeleteEquipmentComponent },
  { path: 'stock', component: StockDetailsComponent },
  { path: 'addsup', component: SuplierDetailsComponent },
  { path: 'deletestock', component: DeleteStockDetailsComponent },
  { path: 'updatestock', component: UpdateStockDetailsComponent },
  { path: 'updatesup', component: UpdateSupplierDetailsComponent },
  { path: 'deletesup', component: DeleteSupplierDetailsComponent },
  { path: 'viewempdetails', component: ViewEmployeeDetailComponent },
  { path: 'add-employee-detail', component: AddEmployeeDetailComponent },
  { path: 'update-employee-detail', component: UpdateEmployeeDetailComponent },
  { path: 'delete-employee-detail', component: DeleteEmployeeDetailComponent },
  { path: 'view-customer-details', component: ViewCustomerComponent},
  { path: 'viewtablebooking', component: ViewtablebookingdetailsComponent },
  { path: 'updatetablebooking', component: UpdateTableBookingComponent }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
