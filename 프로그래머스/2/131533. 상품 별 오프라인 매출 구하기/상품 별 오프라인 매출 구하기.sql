select product.product_code, (product.price * sum(offline_sale.sales_amount)) as sales 
from product
inner join offline_sale
on product.product_id = offline_sale.product_id
group by offline_sale.product_id
order by sales desc, product_code asc

# select offline_sale_id, product_id, sum(sales_amount), sales_date
# from offline_sale
# group by product_id