package com.example.demo.services;


import com.example.demo.model.EmployeeModel;

import java.util.List;

public interface EmployeeService  {
    EmployeeModel createEmployee(EmployeeModel employeeModel);

    List<EmployeeModel> getAllEmployees();

    boolean deleteEmployee(Long id);

    EmployeeModel getEmployeeById(Long id);

    EmployeeModel updateEmployee(Long id, EmployeeModel employeeModel);
}
