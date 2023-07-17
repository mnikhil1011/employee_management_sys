import axios from "axios";
const Employee_api_base_url="http://localhost:8080/api/v1/employees";

class EmployeeService{

    saveEmployee(employee){
        return axios.post(Employee_api_base_url,employee);
    }

    getEmployees(){
        return axios.get(Employee_api_base_url);
    }

    deleteEmployee(id){
        return axios.delete(Employee_api_base_url+"/"+ id);
    }

    getEmployeeByID(id){
        return axios.get(Employee_api_base_url+"/"+ id)
    }

    updateEmployee(employee,id){
        return axios.put(Employee_api_base_url+"/"+ id,employee);
    }

}

export default new EmployeeService();