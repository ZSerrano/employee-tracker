
INSERT INTO department (id, name)
VALUES (001, 'Accounting'),
        (002, 'Logistics');

INSERT INTO role (id, title, salary, department_id)
VALUES (001, "Employee", 100.00, 001),
        (002, "Junior Employee", 100.00, 002),
        (003, "Manager", 200.00, 002);
    
INSERT INTO  employee (id, first_name, last_name, role_id, manager_id)
VALUES (001, "A", "B", 001, null),
        (002, "C", "D", 002, 003),
        (003, "E", "F", 003, null);