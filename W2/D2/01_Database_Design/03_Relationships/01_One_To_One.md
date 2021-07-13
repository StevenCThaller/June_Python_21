# One To One Relationship

This is a unique relationship, where the data from table A is linked to a particular piece of data in table B and ONLY that piece of data in table B.

## EXAMPLE:

I'm building out a database to show the drivers in the Indy 500. And I want to have a table for `cars` and a table for `drivers`. Each `driver` can only be driving ONE `car` at a given point in time, and a `car` can ONLY be driven by one `driver` at any given point in time.

So our datbase might look something like this:

### drivers
driver_id | first_name | last_name | car
--- | --- | --- | ---
1 | Joe | Schmoe | 4
2 | Danica | Patrick | 7
3 | Tony | Bush | 6

### cars
car_id | horse_power 
--- | --- 
4 | 783 
6 | 622 
7 | 775 


This a one to one relationship because the `car` and `driver` are uniquely related, and not related to ANY other data anywhere else.