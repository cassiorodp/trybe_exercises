SELECT 
    EMPLOYEE_ID, FIRST_NAME, YEAR(HIRE_DATE)
FROM
    hr.employees
WHERE
    LENGTH(first_name) >= 8;