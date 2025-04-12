export class EmployeeModel {

    empID: number;
     name: string;
     email: string;
     phone: string;
     state: string;
     address: string;
     city: string;
     postCode: string;

     constructor(){
        this.empID = 0;
        this.name = '';
        this.email = '';
        this.phone = '';
        this.state = '';
        this.address = '';
        this.city = '';
        this.postCode = '';
     }
}