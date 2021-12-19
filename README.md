# account-svc
Two matches service for setting Account and User. This service will also provide the accountsvc to Auth0.


### DB ( Mysql:8)

You will need a mysql db locally to run the application locally. Simplest way to start a mysql locally is to use mysql:8 docker image from docker hub.

It is recommended that you map docker volume to persist the data outside container. Following command can be used to provide custom mysql configuration and data directory to map on your host system. It is required to pass the `MYSQL_ROOT_PASSWORD` env variable during the first run to create root password, during next runs this variable will be ignored

```
docker run --name db -v /path/to/conf/custom-conf:/etc/mysql/conf.d -v /path/to/data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=my-secret-pw -p 3306:3306 -d mysql:8
```
Add following property on your custom conf file
```
bind-address           = 0.0.0.0
```

Additional information on running mysql container can be found [here](https://hub.docker.com/_/mysql)

Install mysql client on your local system based on your host OS.

Run following commands on running mysql to create the backend databases to support focus-api

```
bash:> mysql -h 127.0.0.1 -u root -p 
Enter Password:

```
Once you login on mysql create two databases and users and grant it privileges

```
mysql> create database account_local;
Query OK, 1 row affected (0.02 sec)

mysql> create database account_local_shadow;
Query OK, 1 row affected (0.01 sec)

mysql> create user 'accountsvcuser'@'%' identified by 'accountsvc123';
Query OK, 0 rows affected (0.03 sec)

mysql> grant all privileges on account_local.* to 'accountsvcuser'@'%';
Query OK, 0 rows affected (0.01 sec)

mysql> grant all privileges on account_local_shadow.* to 'accountsvcuser'@'%';
Query OK, 0 rows affected (0.00 sec)

mysql> flush privileges;
Query OK, 0 rows affected (0.01 sec)

mysql> show grants for accountsvcuser;
+-----------------------------------------------------------------------+
| Grants for accountsvcuser@%                                              |
+-----------------------------------------------------------------------+
| GRANT USAGE ON *.* TO `accountsvcuser`@`%`                               |
| GRANT ALL PRIVILEGES ON `account_local`.* TO `accountsvcuser`@`%`        |
| GRANT ALL PRIVILEGES ON `account_local_shadow`.* TO `accountsvcuser`@`%` |
+-----------------------------------------------------------------------+
3 rows in set (0.01 sec)

mysql> \q
```

Now try to login with your new user and check the databases
```
bash:> mysql -u accountsvcuser -p -h 127.0.0.1
Enter password:

mysql> show databases;
+----------------------+
| Database             |
+----------------------+
| account_local        |
| account_local_shadow |
| information_schema   |
+----------------------+
3 rows in set (0.01 sec)

```

Note: The shadow database is required for our prisma orm to migrate/update database correctly.


### Start server

Install 

```
npm install
```

Run prisma migrate, Should be done after mysql is setup
```
npx prisma migrate dev
```

Start server
```
npm run start
```

### API


