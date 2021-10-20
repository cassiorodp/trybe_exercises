SELECT 
    first_name,
    last_name,
    DATEDIFF(CURRENT_DATE(), HIRE_DATE) 'days_worked'
FROM
    hr.employees;