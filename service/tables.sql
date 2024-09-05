
CREATE TABLE IF NOT EXISTS playing_with_neon(id SERIAL PRIMARY KEY, name TEXT NOT NULL, value REAL);

CREATE TABLE category (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL
)

SELECT id, name FROM category;
SELECT * FROM category;   /* get all ****/

INSERT INTO playing_with_neon(name, value)
  SELECT LEFT(md5(i::TEXT), 10), random() FROM generate_series(1, 10) s(i);
SELECT * FROM playing_with_neon;

ALTER TABLE category (
  ADD column icon varchar(20),
  ADD column color varchar(20),
)
CREATE TYPE transactionType AS ENUM ('INCOME', 'EXPENSE');
CREATE TABLE TRANSACTION (
  id char(36) PRIMARY KEY, 
  amount decimal (10,2),
  categoryId char(36),
  type transactionType,
  date DATE, 
  payee VARCHAR(36), 
  note TEXT,
  FOREIGN KEY (categoryId) REFERENCES category(id)
)

insert into transaction values ('hello', 2000, '6b4c7a24-0099-432e-a5e3-7e45a4049735','INCOME', CURRENT_DATE, 'Dad', 'for Iveel');
select transaction.amount, transaction.type, category.name, category.icon from transaction left join category on transaction.categoryId = category.id 
