use teto
go

select * from product pro
 inner join price pri
    on pri.product_code = pro.code
 inner join supplier sup
	on sup.product_code = pro.code
 where pri.price > 100
   and pri.price_table_id = 1 /* price_id ??? */
   and sup.[state] = 'SP'
   