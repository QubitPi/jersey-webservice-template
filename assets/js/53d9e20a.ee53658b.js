"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6499],{5010:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var s=t(5893),a=t(1151);const l={slug:"mysql-troubleshooting",title:"MySQL Troubleshooting",authors:"jiaqi",tags:["MySQL","Database","JPA"]},i=void 0,o={permalink:"/jersey-webservice-template/blog/mysql-troubleshooting",editUrl:"https://github.com/QubitPi/jersey-webservice-template/tree/master/docs/blog/2020-09-09-mysql-troubleshooting.md",source:"@site/blog/2020-09-09-mysql-troubleshooting.md",title:"MySQL Troubleshooting",description:"[//]: # (Copyright Jiaqi Liu)",date:"2020-09-09T00:00:00.000Z",formattedDate:"September 9, 2020",tags:[{label:"MySQL",permalink:"/jersey-webservice-template/blog/tags/my-sql"},{label:"Database",permalink:"/jersey-webservice-template/blog/tags/database"},{label:"JPA",permalink:"/jersey-webservice-template/blog/tags/jpa"}],readingTime:9.14,hasTruncateMarker:!0,authors:[{name:"Jack",title:"Maintainer of Jersey Webservice Template",url:"https://github.com/QubitPi",imageURL:"https://avatars.githubusercontent.com/u/16126939?v=4",key:"jiaqi"}],frontMatter:{slug:"mysql-troubleshooting",title:"MySQL Troubleshooting",authors:"jiaqi",tags:["MySQL","Database","JPA"]},unlisted:!1,prevItem:{title:"What is Java EE",permalink:"/jersey-webservice-template/blog/java-ee"},nextItem:{title:"MySQL Security",permalink:"/jersey-webservice-template/blog/mysql-security"}},r={authorsImageUrls:[void 0]},c=[{value:"I Forgot Password",id:"i-forgot-password",level:2},{value:"Implicit Default Handling",id:"implicit-default-handling",level:2},{value:"Left Join Comes Out with Duplicate Rows",id:"left-join-comes-out-with-duplicate-rows",level:2},{value:"Loading Large File into Database Causes &quot;MySQL Server has gone away&quot;",id:"loading-large-file-into-database-causes-mysql-server-has-gone-away",level:2},{value:"Large Packet",id:"large-packet",level:3},{value:"Illegal mix of collations (latin1_swedish_ci,IMPLICIT) and (utf8mb4_general_ci,COERCIBLE) for operation &#39;=&#39;",id:"illegal-mix-of-collations-latin1_swedish_ciimplicit-and-utf8mb4_general_cicoercible-for-operation-",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"i-forgot-password",children:"I Forgot Password"}),"\n",(0,s.jsx)(n.p,{children:"Let's say you want to login to MySQL shell as root, whose password is lost. You could do"}),"\n",(0,s.jsxs)(n.p,{children:["Stop and start mysql with ",(0,s.jsx)(n.code,{children:"--skip-grant-tables"})," option"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"mysql.server stop\nmysql.server start --skip-grant-tables\n"})}),"\n",(0,s.jsx)(n.p,{children:"then connect to your mysqld without username/password"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"mysql\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Drop the user (e.g. ",(0,s.jsx)(n.code,{children:"root"}),"). After deleting the user, flush the mysql privileges. then create the user. Assuming we want\nto create the user root @ localhost, these would be the commands:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"drop user admin@localhost;\nFLUSH PRIVILEGES;\ncreate user admin@localhost identified by 'foo'\n\nUPDATE mysql.user SET Grant_priv='Y', Super_priv='Y' WHERE User='root';\nFLUSH PRIVILEGES;\nGRANT ALL ON *.* TO 'root'@'localhost';\n"})}),"\n",(0,s.jsx)(n.p,{children:"then we can login to MySQL with the new password"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ mysql -h localhost -u root -pfoo\nmysql: [Warning] Using a password on the command line interface can be insecure.\nWelcome to the MySQL monitor.  Commands end with ; or \\g.\nYour MySQL connection id is 12\nServer version: 8.0.23 Homebrew\n\nCopyright (c) 2000, 2021, Oracle and/or its affiliates.\n\nOracle is a registered trademark of Oracle Corporation and/or its\naffiliates. Other names may be trademarks of their respective\nowners.\n\nType 'help;' or '\\h' for help. Type '\\c' to clear the current input statement.\n\nmysql>\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If ",(0,s.jsx)(n.code,{children:"mysql"})," still complains about access denied after ",(0,s.jsx)(n.code,{children:"mysql.server start --skip-grant-tables"}),", uninstall mysql and\nmysql-client with"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"brew uninstall mysql mysql-client\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Then do not install mysql through homebrew, but from\n",(0,s.jsx)(n.a,{href:"https://downloads.mysql.com/archives/community/",children:"MySQL official page"})," instead."]}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsx)(n.p,{children:"It is very important to remember that the installation will show us a temporary root password. Please DO make sure to\ncopy this as we will be needing it to reset our root password later"})}),"\n",(0,s.jsx)(n.p,{children:'We will, however, still install mysql-client using homebrew"'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"brew install mysql-client\n"})}),"\n",(0,s.jsx)(n.p,{children:"Then we can do"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"mysql -h localhost -u root -p\n"})}),"\n",(0,s.jsx)(n.p,{children:"MySQL won't allow us to do anything further unless we reset password using the temporary one given during the\ninstallation step:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-mysql",children:"SET PASSWORD = PASSWORD('your_new_password');\n"})}),"\n",(0,s.jsx)(n.p,{children:"Exit mysql shell and re-enter it. We shall start using MySQL now."}),"\n",(0,s.jsx)(n.h2,{id:"implicit-default-handling",children:(0,s.jsx)(n.a,{href:"https://dev.mysql.com/doc/refman/8.0/en/data-type-defaults.html",children:"Implicit Default Handling"})}),"\n",(0,s.jsxs)(n.p,{children:["For data entry into a ",(0,s.jsx)(n.code,{children:"NOT NULL"})," column that has no explicit ",(0,s.jsx)(n.code,{children:"DEFAULT"})," clause, if an ",(0,s.jsx)(n.code,{children:"INSERT"})," or ",(0,s.jsx)(n.code,{children:"REPLACE"})," statement\nincludes no value for the column, or an ",(0,s.jsx)(n.code,{children:"UPDATE"})," statement sets the column to ",(0,s.jsx)(n.code,{children:"NULL"}),", MySQL handles the column according\nto the ",(0,s.jsx)(n.strong,{children:"SQL mode"})," in effect at the time:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"If strict SQL mode is enabled, an error occurs for transactional tables and the statement is rolled back. For\nnontransactional tables, an error occurs, but if this happens for the second or subsequent row of a multiple-row\nstatement, the preceding rows are inserted."}),"\n",(0,s.jsxs)(n.li,{children:["If strict mode is not enabled, MySQL sets the column to the ",(0,s.jsx)(n.strong,{children:"implicit default value"})," for the column data type."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://dba.stackexchange.com/a/194135",children:"Running through a quick check"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SET sql_mode='';\nCREATE TABLE foo ( a int NOT NULL );\n-- all of these insert the value 0\nINSERT INTO foo (a) VALUES (DEFAULT);\nINSERT INTO foo (a) VALUES (a);\nINSERT INTO foo () VALUES ();\n"})}),"\n",(0,s.jsx)(n.p,{children:"Whipe it and set strict mode,"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"TRUNCATE TABLE foo;\nSET sql_mode='strict_all_tables';\n"})}),"\n",(0,s.jsx)(n.p,{children:"Retry,"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"INSERT INTO foo (a) VALUES (DEFAULT);\nERROR 1364 (HY000): Field 'a' doesn't have a default value\n\n-- still inserts \"implicit default\", doesn't gaf about strict mode.\nINSERT INTO foo (a) VALUES (a);\nQuery OK, 1 row affected (0.01 sec)\n\nINSERT INTO foo () VALUES ();\nERROR 1364 (HY000): Field 'a' doesn't have a default value\n"})}),"\n",(0,s.jsxs)(n.p,{children:["You'll see now only one row in the table which is a result of the\n",(0,s.jsx)(n.a,{href:"https://dba.stackexchange.com/q/194120/2639",children:"goofy syntax"}),' that is still permitted with "strict mode".']}),"\n",(0,s.jsx)(n.h2,{id:"left-join-comes-out-with-duplicate-rows",children:(0,s.jsx)(n.a,{href:"https://stackoverflow.com/questions/22769641/left-join-without-duplicate-rows-from-left-table",children:"Left Join Comes Out with Duplicate Rows"})}),"\n",(0,s.jsx)(n.p,{children:"The cause of the duplicate rows is that the left table has rows that have more than 1 associated rows in the right\ntable."}),"\n",(0,s.jsxs)(n.p,{children:["The solution is to ",(0,s.jsx)(n.code,{children:"GROUP BY"})," the results."]}),"\n",(0,s.jsx)(n.p,{children:"For example, take a look at the following query:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csv",children:"tbl_contents\n\ncontent_id  content_title    content_text\n10002   New case Study   New case Study\n10003   New case Study   New case Study\n10004   New case Study   New case Study\n10005   New case Study   New case Study\n10006   New case Study   New case Study\n10007   New case Study   New case Study\n10008   New case Study   New case Study\n10009   New case Study   New case Study\n10010   SEO News Title   SEO News Text\n10011   SEO News Title   SEO News Text\n10012   Publish Contents SEO News Text\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csv",children:"tbl_media\n\nmedia_id    media_title  content_id\n1000    New case Study   10012\n1001    SEO News Title   10010\n1002    SEO News Title   10011\n1003    Publish Contents 10012\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SELECT\n    C.content_id, C.content_title, M.media_id\nFROM\n    tbl_contents C LEFT JOIN tbl_media M ON M.content_id = C.content_id\nORDER BY C.Content_DatePublished ASC\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csv",children:"10002   New case Study  2014-03-31 13:39:29.280 NULL\n10003   New case Study  2014-03-31 14:23:06.727 NULL\n10004   New case Study  2014-03-31 14:25:53.143 NULL\n10005   New case Study  2014-03-31 14:26:06.993 NULL\n10006   New case Study  2014-03-31 14:30:18.153 NULL\n10007   New case Study  2014-03-31 14:30:42.513 NULL\n10008   New case Study  2014-03-31 14:31:56.830 NULL\n10009   New case Study  2014-03-31 14:35:18.040 NULL\n10010   SEO News Title  2014-03-31 15:22:15.983 1001\n10011   SEO News Title  2014-03-31 15:22:30.333 1002\n10012   Publish         2014-03-31 15:25:11.753 1000\n10012   Publish         2014-03-31 15:25:11.753 1003\n"})}),"\n",(0,s.jsxs)(n.p,{children:["We see that ",(0,s.jsx)(n.code,{children:"10012"})," are coming up twice..., because some rows in tbl_contents has more than 1 associated rows in\ntbl_media. To eliminate the duplicate:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SELECT\n    C.content_id,\n    C.content_title,\n    C.Content_DatePublished,\n    M.media_id\nFROM\n    tbl_contents C LEFT JOIN tbl_media M ON M.content_id = C.content_id\nGROUP BY\n    C.content_id\nORDER BY\n    C.Content_DatePublished ASC\n"})}),"\n",(0,s.jsx)(n.h2,{id:"loading-large-file-into-database-causes-mysql-server-has-gone-away",children:'Loading Large File into Database Causes "MySQL Server has gone away"'}),"\n",(0,s.jsxs)(n.p,{children:["According to ",(0,s.jsx)(n.a,{href:"https://dev.mysql.com/doc/refman/8.0/en/gone-away.html",children:"documentation"})," and personal experience, the most\ncommon reason is that you send a query to the server that is incorrect or ",(0,s.jsx)(n.a,{href:"#large-packet",children:"too large"}),". If MySQL Server\nreceives a packet that is too large or out of order, it assumes that something has gone wrong with the client and\ncloses the connection. If you need big queries (for example, if you are working with big BLOB columns), you can\nincrease the query limit by setting the server's ",(0,s.jsx)(n.code,{children:"max_allowed_packet"})," variable, which has a default value of 64MB. You\nmay also need to increase the maximum packet size on the client end."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsxs)(n.strong,{children:["Both the client and the server have their own ",(0,s.jsx)(n.code,{children:"max_allowed_packet"})," variable, so if you want to handle big packets,\nyou must increase this variable both in the client and in the server"]}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["If you are using the mysql ",(0,s.jsx)(n.strong,{children:"client program"}),", its default ",(0,s.jsx)(n.code,{children:"max_allowed_packet"})," variable is 16MB. To set a larger value,\nstart mysql like this:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"mysql --max_allowed_packet=32M\n"})}),"\n",(0,s.jsx)(n.p,{children:"That sets the packet size to 32MB."}),"\n",(0,s.jsxs)(n.p,{children:["The server's default ",(0,s.jsx)(n.code,{children:"max_allowed_packet"})," value is 64MB. You can increase this if the server needs to handle big\nqueries (for example, if you are working with big BLOB columns). For example, to set the variable to 128MB, start the\nserver like this:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"mysqld --max_allowed_packet=128M\n"})}),"\n",(0,s.jsxs)(n.p,{children:["You can also use an option file to set ",(0,s.jsx)(n.code,{children:"max_allowed_packet"}),". For example, to set the size for the server to 128MB, add\nthe following lines in an option file:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"[mysqld]\nmax_allowed_packet=128M\n"})}),"\n",(0,s.jsx)(n.p,{children:"It is safe to increase the value of this variable because the extra memory is allocated only when needed. For example,\nMySQL Server allocates more memory only when you issue a long query or when MySQL Server must return a large result row.\nThe small default value of the variable is a precaution to catch incorrect packets between the client and server and\nalso to ensure that you do not run out of memory by using large packets accidentally."}),"\n",(0,s.jsxs)(n.p,{children:["You can also get strange problems with large packets if you are using large BLOB values but have not given MySQL Sever\naccess to enough memory to handle the query. If you suspect this is the case, try adding ",(0,s.jsx)(n.code,{children:"ulimit -d 256000"})," to the\nbeginning of the ",(0,s.jsx)(n.code,{children:"mysqld_safe"})," script and restarting MySQL Server."]}),"\n",(0,s.jsx)(n.h3,{id:"large-packet",children:"Large Packet"}),"\n",(0,s.jsx)(n.p,{children:"A communication packet is"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"a single SQL statement sent to the MySQL server, or"}),"\n",(0,s.jsx)(n.li,{children:"a single row that is sent to the client, or"}),"\n",(0,s.jsx)(n.li,{children:"a binary log event sent from a master replication server to a slave."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["When a MySQL client or the MySQL server receives a packet bigger than ",(0,s.jsx)(n.code,{children:"max_allowed_packet"})," bytes, it issues an\n",(0,s.jsx)(n.code,{children:"ER_NET_PACKET_TOO_LARGE"})," error and closes the connection."]}),"\n",(0,s.jsx)(n.h2,{id:"illegal-mix-of-collations-latin1_swedish_ciimplicit-and-utf8mb4_general_cicoercible-for-operation-",children:"Illegal mix of collations (latin1_swedish_ci,IMPLICIT) and (utf8mb4_general_ci,COERCIBLE) for operation '='"}),"\n",(0,s.jsxs)(n.p,{children:["Resolving this issues requires understanding of ",(0,s.jsx)(n.a,{href:"https://www.mysqltutorial.org/mysql-collation/",children:"MySQL collations"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Go to the database related to the issue and issue the following command"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'mysql> show variables WHERE variable_name like "col%";\n+----------------------+-------------------+\n| Variable_name        | Value             |\n+----------------------+-------------------+\n| collation_connection | latin1_swedish_ci |\n| collation_database   | utf8_general_ci   |\n| collation_server     | latin1_general_ci |\n+----------------------+-------------------+\n3 rows in set (0.02 sec)\n'})}),"\n",(0,s.jsx)(n.p,{children:"You see the database collation is for UTF8."}),"\n",(0,s.jsx)(n.p,{children:'When you see the error "Illegal mix of collations...", it is complaining about a table whose collation is inconsistent\nwith what\'s configured for "collation_database" shown above.'}),"\n",(0,s.jsx)(n.p,{children:'Go to the table that throws the "Illegal mix of collations..." error and issue the following command:'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"mysql> SELECT table_schema, table_name, column_name, character_set_name, collation_name\n    -> FROM information_schema.columns\n    -> WHERE table_name = 'xyz'\n    -> ORDER BY table_schema, table_name,ordinal_position;\n\n+-------------------+------------+--------------+--------------------+-------------------+\n| table_schema      | table_name | column_name  | character_set_name | collation_name    |\n+-------------------+------------+--------------+--------------------+-------------------+\n| ...               | xyz        | id           | NULL               | NULL              |\n| ...               | xyz        | name         | latin1             | latin1_swedish_ci |\n| ...               | xyz        | gender       | NULL               | NULL              |\n| ...               | xyz        | title        | latin1             | latin1_swedish_ci |\n| ...               | xyz        | department   | latin1             | latin1_swedish_ci |\n| ...               | xyz        | salary       | NULL               | NULL              |\n| ...               | xyz        | email        | latin1             | latin1_swedish_ci |\n| ...               | xyz        | phone        | latin1             | latin1_swedish_ci |\n| ...               | xyz        | age          | NULL               | NULL              |\n| ...               | xyz        | birthday     | latin1             | latin1_swedish_ci |\n| ...               | xyz        | location     | latin1             | latin1_swedish_ci |\n+-------------------+------------+--------------+--------------------+-------------------+\n11 rows in set (0.39 sec)\n"})}),"\n",(0,s.jsx)(n.p,{children:'You see the table collation has "latin1_swedish_ci", which is not UTF8. You will alter this table so that is aligns with\ndatabase level config like this:'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"ALTER TABLE xyz CONVERT TO CHARACTER SET utf8 COLLATE 'utf8_bin';\n"})}),"\n",(0,s.jsx)(n.p,{children:"In case you would like to alter database level collation, you could try something like"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"/* Set collations of system variables */\nSET @@collation_connection = UTF8MB4_GENERAL_CI;\nSET @@collation_database = UTF8MB4_GENERAL_CI;\nSET @@collation_server = UTF8MB4_GENERAL_CI;\n"})})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>i});var s=t(7294);const a={},l=s.createContext(a);function i(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);