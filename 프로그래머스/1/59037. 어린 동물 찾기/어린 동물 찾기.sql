select ANIMAL_ID, NAME from ANIMAL_INS
where not INTAKE_CONDITION = "Aged"
order by ANIMAL_ID asc