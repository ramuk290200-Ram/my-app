import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator/calculator.component';
import { DirectivesComponent } from './directives/directives.component';
import { EventRegistrationComponent } from './event-registration/event-registration.component';
import { EmployeesComponent } from './employees/employees.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AccontsComponent } from './acconts/acconts.component';
import { ProductsComponent } from './products/products.component';
import { ContactModule } from './contact/contact.module';
import { ColorsDirective } from './colors.directive';
import { MoviesComponent } from './movies/movies.component';
import { RupeesPipe } from './rupees.pipe';
import { ColorDirective } from './color.directive';
import { Vehicle2Component } from './vehicle2/vehicle2.component';
import { StudentsComponent } from './students/students.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { ViewVehicleComponent } from './view-vehicle/view-vehicle.component';
import { TokenInterceptor } from './token.interceptor';
import { Product1Component } from './product1/product1.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { RatingComponent } from './rating/rating.component';
import { ItemsComponent } from './items/items.component';
import { CartComponent } from './cart/cart.component';
import { NavComponent } from './nav/nav.component';
import { CommunicationComponent } from './communication/communication.component';
import { Calculator2Component } from './calculator2/calculator2.component';
import { ActionsComponent } from './actions/actions.component';
import { SummaryComponent } from './summary/summary.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PageNotFoundComponent,
    HomeComponent,
    WelcomeComponent,
    DataBindingComponent,
    CalculatorComponent,
    DirectivesComponent,
    EventRegistrationComponent,
    EmployeesComponent,
    FlipkartComponent,
    VehiclesComponent,
    AccontsComponent,
    ProductsComponent,
    ColorsDirective,
    MoviesComponent,
    RupeesPipe,
    ColorDirective,
    Vehicle2Component,
    StudentsComponent,
    CreateUserComponent,
    CreateVehicleComponent,
    ViewVehicleComponent,
    Product1Component,
    ParentComponent,
    ChildComponent,
    RatingComponent,
    ItemsComponent,
    CartComponent,
    NavComponent,
    CommunicationComponent,
    Calculator2Component,
    ActionsComponent,
    SummaryComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ContactModule,
    ReactiveFormsModule,
  
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
