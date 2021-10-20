SELECT 
    JOB_ID, AVG(SALARY) AS AVG_SALARY
FROM
    hr.employees
GROUP BY JOB_ID
ORDER BY AVG_SALARY DESC;