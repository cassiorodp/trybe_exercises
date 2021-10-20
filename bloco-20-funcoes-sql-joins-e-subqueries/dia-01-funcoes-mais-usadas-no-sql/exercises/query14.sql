SELECT 
    EMPLOYEE_ID, FIRST_NAME, DAY(HIRE_DATE)
FROM
    hr.employees
WHERE
    LENGTH(first_name) >= 8;