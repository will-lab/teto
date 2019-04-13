use teto
go

create table product (
	code int not null primary key identity(1,1),
	[description] varchar(50) not null
)

create table price (
	price_id int not null primary key identity(1,1),
	product_code int not null foreign key references product(code),
	price_table_id int not null,
	price decimal(10,2)
)

create table supplier (
	id int not null primary key identity(1,1),
	product_code int not null foreign key references product(code),
	[name] varchar(50),
	[state] varchar(2)
)

go