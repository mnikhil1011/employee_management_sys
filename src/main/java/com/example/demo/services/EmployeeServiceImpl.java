package com.example.demo.services;

import com.example.demo.entity.EmployeeEntity;
import com.example.demo.model.EmployeeModel;
import com.example.demo.repository.EmployeeRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class EmployeeServiceImpl implements EmployeeService{

    private EmployeeRepository employeeRepository;

    public EmployeeServiceImpl(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    @Override
    public EmployeeModel createEmployee(EmployeeModel employeeModel) {
        EmployeeEntity employeeEntity=new EmployeeEntity();

        BeanUtils.copyProperties(employeeModel,employeeEntity);
        employeeRepository.save(employeeEntity);
        return employeeModel;
    }

    @Override
    public List<EmployeeModel> getAllEmployees() {

        List<EmployeeEntity> employeeEntities=employeeRepository.findAll();

        List<EmployeeModel> employeeModels=employeeEntities.stream().map(emp ->new EmployeeModel(emp.getId(), emp.getFirstName(), emp.getLastName(),emp.getEmailID())).collect(Collectors.toList());
        return employeeModels;
    }

    @Override
    public boolean deleteEmployee(Long id) {
        EmployeeEntity employee=employeeRepository.findById(id).get();
        employeeRepository.delete(employee);
        return true;
    }

    @Override
    public EmployeeModel getEmployeeById(Long id) {
        EmployeeEntity employee=employeeRepository.findById(id).get();
        EmployeeModel employeeModel=new EmployeeModel();

        BeanUtils.copyProperties(employee,employeeModel);

        return employeeModel;
    }

    @Override
    public EmployeeModel updateEmployee(Long id, EmployeeModel employeeModel) {

        EmployeeEntity employeeEntity=employeeRepository.findById(id).get();
        employeeEntity.setEmailID(employeeModel.getEmailID());
        employeeEntity.setFirstName(employeeModel.getFirstName());
        employeeEntity.setLastName(employeeModel.getLastName());
        employeeRepository.save(employeeEntity);
        return employeeModel;
    }
}
