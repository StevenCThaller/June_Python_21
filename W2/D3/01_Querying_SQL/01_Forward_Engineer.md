# Let's Create a Database

## I want to recreate our SuperHero/SuperVillain database

We'll simplify and modify our initial design just a bit though. I want the following tables

### **leagues**
league_id | name | created_at | updated_at
--- | --- | --- | ---
INT (PRIMARY KEY) | VARCHAR(45) | DATETIME | DATETIME

### **characters**
character_id | name | alter_ego | league | alignment | created_at | updated_at
 --- | --- | --- | --- | --- | --- | ---
INT (PRIMARY KEY) | VARCHAR(25) | VARCHAR(45) | INT (FOREIGN KEY) | INT (FOREIGN KEY) | DATETIME | DATETIME

### **alignments**
alignment_id | name | created_at | updated_at
--- | --- | --- | ---
INT (PRIMARY KEY) | VARCHAR(25) | DATETIME | DATETIME

### **powers**
power_id | name | stamina_cost | damage | created_at | updated_at
--- | --- | --- | --- | --- | ---
INT (PRIMARY KEY) | VARCHAR(25) | INT | INT | DATETIME | DATETIME

### **character_has_powers**
character_has_powers_id | character_id | power_id | created_at | updated_at
--- | --- | --- | --- | ---
INT (PRIMARY KEY) | INT (FOREIGN KEY) | INT (FOREIGN KEY) | DATETIME | DATETIME


## Steps to Take

1. Create our ERD based on the specifications given above
2. Select the `Database` option on the top toolbar
3. Select `Forward Engineer` (optional shortcut: `Ctrl + G`)
4. Hostname should read `127.0.0.1`, Port should read `3306`, username should be whatever you selected
your username as (if you followed the instructions, this should be `root`).
5. Click `Next`
6. The only checkbox that should be selected is `Include model attached scripts`.
7. Click `Next`
8. Enter your password.
9. Click `Next`
10. If you'd like, you can save the script to a file, but there's not much of a need. Just click `Next`, and voila! You have a database

