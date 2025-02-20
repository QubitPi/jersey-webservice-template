---
slug: mysql-programming
title: Programming MySQL
authors: jiaqi
tags: [MySQL, Database, JPA]
---

[//]: # (Copyright 2025 Jiaqi Liu. All rights reserved.)

[//]: # (Licensed under the Apache License, Version 2.0 &#40;the "License"&#41;;)
[//]: # (you may not use this file except in compliance with the License.)
[//]: # (You may obtain a copy of the License at)

[//]: # (    http://www.apache.org/licenses/LICENSE-2.0)

[//]: # (Unless required by applicable law or agreed to in writing, software)
[//]: # (distributed under the License is distributed on an "AS IS" BASIS,)
[//]: # (WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.)
[//]: # (See the License for the specific language governing permissions and)
[//]: # (limitations under the License.)

<!--truncate-->

<!-- markdown-link-check-disable -->

Shell
-----

### Adjust Display Settings of MySQL Command Line

You may notice that command line result of mysql is not displaying results properly. Some columns of table are in the
first line and some are in the second line. Output is also broken into two rows. How do we adjust these settings so that
it properly display results?

We can use the `\G` command (instead of the `;`) at the end of our SQL queries:

```sql
SELECT * FROM USER \G
```

It will display your table in row form instead of column form.

### Connecting to MySQL From the Command Line

```bash
mysql -u USERNAME -pPASSWORD -h HOSTNAMEORIP DATABASENAME --default-character-set=utf8
```

The `--default-character-set=utf8` option allows the UTF-8 character to be displayed properly in console

#### How to Pass Password to mysql Command Line in a More "Secure" Way

[Putting passwords on the command line](#connecting-to-mysql-from-the-command-line) is in-secure, because anyone with
access to `/proc` can trivially read them as long as the program is running.

The safest way would be to create a new [config file](https://dev.mysql.com/doc/refman/8.0/en/option-file-options.html)
and pass it to `mysql` using either the `--defaults-file=` or `--defaults-extra-file=` command line option. The
difference between the two is that the latter is read in addition to the default config files whereas with the former
only the one file passed as the argument is used. The additional configuration file should contain something similar to:

```text
[client]
user=foo
password=P@55w0rd
```

:::caution

Make sure that you secure this file.

:::

Then run:

```bash
mysql --defaults-extra-file=<path to the new config file> --default-character-set=utf8 -h HOSTNAMEORIP DATABASENAME
```

### Find databases containing a particular table in MySQL

Let's say you would like to locate a table whose name is `foo`:

```sql
SELECT
    table_schema AS database_name
FROM
    information_schema.tables
WHERE
    table_type = 'BASE TABLE'
    AND table_name = 'foo'
ORDER BY
    table_schema;
```

### Search for a Column from Database

```sql
SELECT
    table_name,
    column_name
FROM
    information_schema.columns
WHERE
    column_name like '%SearchedColumn%'
```

### Save MySQL Query Output to File

Try executing the query from the your local client and redirect the output to a local file destination:

```bash
mysql -user -pass -e "select cols from table where cols not null" > /tmp/output
```

### [Conditional Insert](https://stackoverflow.com/a/913929)

Suppose we have `x_table` with `columns (instance, user, item)` where instance ID is unique. I want to insert a new row
only if the user already does not have a given item.

For example trying to insert `instance=919191 user=123 item=456`

```sql
Insert into x_table (instance, user, item) values (919191, 123, 456)
    ONLY IF there are no rows where user=123 and item=456
```

If your DBMS does not impose limitations on which table you select from when you execute an insert, try:

```sql
INSERT INTO x_table(instance, user, item)
    SELECT 919191, 123, 456
        FROM dual
        WHERE NOT EXISTS (SELECT * FROM x_table
                             WHERE user = 123
                               AND item = 456)
```

In this, `dual` is a table with one row only (found originally in Oracle, now in mysql too). The logic is that the
`SELECT` statement generates a single row of data with the required values, but only when the values are not already
found.

Alternatively, look at the MERGE statement.

### Implement Paging

[From the MySQL documentation](https://dev.mysql.com/doc/refman/8.0/en/select.html#id1026131):

The `LIMIT` clause can be used to constrain the number of rows returned by the `SELECT` statement. `LIMIT` takes one or
two numeric arguments, which must both be non-negative integer constants, with these exceptions:

* Within prepared statements, LIMIT parameters can be specified using ? placeholder markers.
* Within stored programs, LIMIT parameters can be specified using integer-valued routine parameters or local variables.

With two arguments, the first argument specifies the offset of the first row to return, and the second specifies the
maximum number of rows to return. The offset of the initial row is 0 (not 1):

```sql
SELECT * FROM tbl LIMIT 5,10;  # Retrieve rows 6-15
```

With one argument, the value specifies the number of rows to return from the beginning of the result set:

```sql
SELECT * FROM tbl LIMIT 5;     # Retrieve first 5 rows
```

### Listing Tables by Size

```sql
SELECT
    table_name AS `Table`,
    round(((data_length + index_length) / 1024 / 1024), 2) AS `Size in MB`
FROM information_schema.TABLES
WHERE table_schema = "$DB_NAME"
ORDER BY `Size in MB`;
```

where `$DB_NAME` is the name of the database whose tables are to be listed

[To check the size of a single table (`$TABLE_NAME`) of a database (`$DB_NAME`)](https://stackoverflow.com/a/9620273):

```sql
SELECT
    table_name AS `Table`,
    round(((data_length + index_length) / 1024 / 1024), 2) AS `Size in MB`
FROM information_schema.TABLES
WHERE table_schema = "$DB_NAME" AND table_name = "$TABLE_NAME";
ORDER BY `Size in MB`
```

Scripting
---------

### Calling SQL Script File from Other SQL Script File

You can use `source` command. So your script will be something like:

```sql
use your_db;
source script/s1.sql;
source script/s2.sql;
-- so on, so forth
```

### User-Defined Variables

[User Defined Varibles](https://dev.mysql.com/doc/refman/8.0/en/user-variables.html) can be used across scrips like
this:

`main.sql`:

```sql
-- User-Defined Variables
SET @tom_id = 1;
SET @jack_id = 2;

source add_data_to_person_table.sql;
```

`person.sql`:

```sql
INSERT INTO
    Person (id, name)
VALUES
    (@tom_id, "TOME"),
    (@jack_id, "JACK");
```

MySQL Functions
---------------

MySQL has many built-in functions.

### IF

Returns a value if a condition is `TRUE`, or another value if a condition is `FALSE`. For example, Return "YES" if the
condition is TRUE, or "NO" if the condition is FALSE:

```sql
SELECT IF(500 < 1000, "YES", "NO");
```

This function is useful if we would like to replicate a table and update some column values on the flight:

```sql
INSERT INTO some_table(column1, column2, column3)
SELECT column1, column2, IF(column3 = "Blue", "Dark Blue", "Dark Color")
FROM some_table;
```

In the example above, all rows with column value "Blue" will have "Dark Blue" as the new value for that column; all
other rows will be changed to "Dark Color".

We could have richer modifications, other than 2-branch modification, using
[CASE](https://www.w3schools.com/mysql/func_mysql_case.asp)

Migration
---------

### Copying Tables or Databases from One MySQL Server to Another

We could use `mysqldump` to export the data from one MySQL instance and `mysql` command line utility to load it into
another.

Suppose we have a `person` table in "prod" database hosted in "192.168.1.100" and we would like to migrate this table
data into a dev instance ("192.168.1.101") for testing purposes.

```bash
mysqldump --column-statistics=0 -u prod-user-name -pprodPassword -h 192.168.1.100 prod-database person --default-character-set=utf8 > dump.sql
mysql -u dev-user-name -pdevPwssword -h 192.168.1.101 --port=32228 dev-database < dump.sql
```

:::note

The `--column-statistics=0` is set so that it prevents runtime error of

```bash
mysqldump: Couldn't execute. Unknown table 'column_statistics' in information_schema
```

:::

<!-- markdown-link-check-enable -->
