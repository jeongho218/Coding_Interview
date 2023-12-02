select PRODUCT_ID, PRODUCT_NAME, PRODUCT_CD, CATEGORY, PRICE from FOOD_PRODUCT
where PRICE = (
    select max(PRICE) from FOOD_PRODUCT
)

# select * from FOOD_PRODUCT
# order by price desc
# limit 1