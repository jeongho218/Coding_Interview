select ICECREAM_INFO.ingredient_type, sum(FIRST_HALF.total_order) as INGREDIENT_TYPE
from FIRST_HALF 
inner join ICECREAM_INFO
on FIRST_HALF.flavor = ICECREAM_INFO.flavor
group by ICECREAM_INFO.ingredient_type