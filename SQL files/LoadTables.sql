use teto
go

insert into product ([description])
values ('Mesa'),('Cadeira'),('Sofá 2 lugares'),('Sofá 3 lugares'),('Cama'),('Sofá-cama'),('Poltrona')

insert into price (product_code, price_table_id, price)
values
(1, 1, 100.00),
(2, 1, 55.00),
(3, 1, 80.00),
(4, 1, 120.00),
(5, 1, 350.00),
(6, 1, 150.00),
(7, 1, 250.00),

(1, 2, 80.00),
(2, 2, 100.00),
(3, 2, 60.00),
(4, 2, 90.00),
(5, 2, 330.00),
(6, 2, 150.00),
(7, 2, 210.00),

(1, 3, 110.00),
(2, 3, 150.00),
(3, 3, 100.00),
(4, 3, 160.00),
(5, 3, 420.00),
(6, 3, 220.00),
(7, 3, 270.00),

(1, 4, 110.00),
(2, 4, 150.00),
(3, 4, 90.00),
(4, 4, 80.00),
(5, 4, 380.00),
(6, 4, 270.00),
(7, 4, 200.00)

insert into supplier (product_code, [name], [state])
values
(1, 'Supply A', 'SP'),
(2, 'Supply A', 'SP'),
(3, 'Supply A', 'SP'),
(4, 'Supply A', 'SP'),
(5, 'Supply A', 'SP'),
(1, 'Supply B', 'SP'),
(2, 'Supply B', 'SP'),
(3, 'Supply B', 'SP'),
(4, 'Supply A', 'SP'),
(1, 'Supply C', 'MG'),
(2, 'Supply C', 'MG'),
(3, 'Supply C', 'MG'),
(4, 'Supply C', 'MG'),
(5, 'Supply C', 'MG'),
(6, 'Supply C', 'MG'),
(7, 'Supply C', 'MG'),
(3, 'Supply D', 'MG'),
(4, 'Supply D', 'MG'),
(5, 'Supply D', 'MG'),
(6, 'Supply D', 'MG'),
(7, 'Supply D', 'MG'),
(1, 'Supply E', 'PR'),
(2, 'Supply E', 'PR'),
(3, 'Supply E', 'PR'),
(4, 'Supply E', 'PR'),
(5, 'Supply E', 'PR'),
(6, 'Supply E', 'PR'),
(7, 'Supply E', 'PR'),
(1, 'Supply F', 'PR'),
(2, 'Supply F', 'PR'),
(3, 'Supply F', 'PR'),
(4, 'Supply F', 'PR'),
(5, 'Supply F', 'PR'),
(6, 'Supply F', 'PR'),
(7, 'Supply G', 'RJ'),
(1, 'Supply G', 'RJ'),
(2, 'Supply G', 'RJ'),
(3, 'Supply G', 'RJ'),
(4, 'Supply G', 'RJ'),
(5, 'Supply H', 'RJ'),
(6, 'Supply H', 'RJ'),
(7, 'Supply H', 'RJ')

