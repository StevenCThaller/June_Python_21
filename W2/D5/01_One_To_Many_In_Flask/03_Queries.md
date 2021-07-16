# Querying for One To Many

In our `league` class, we have that list of `heroes` that is currently empty, and not really actually doing anything. But if I pull one league from the database, chances are I want to also see data about the `heroes` that are associated with that league.

## `get_league_with_heroes` method

In our class, we'll create a class method for retrieving one league from the database. 


### `league.py`
```py
class League:
    # code for other things

    @classmethod
    def get_league_with_heroes(cls, data):
        query = "SELECT * FROM leagues LEFT JOIN heroes ON heroes.league_id = leagues.id WHERE leagues.id = %(id)s;"

        results = connectToMySQL('heroes_demo').query_db(query, data) 

        league = cls(results[0])

        for row_from_db in results:
            hero_data = {
                'id': row_from_db['heroes.id'],
                'name': row_from_db['heroes.name'],
                'alter_ego': row_from_db['alter_ego'],
                'league_id': row_from_db['league_id'],
                'created_at': row_from_db['heroes.created_at'],
                'updated_at': row_from_db['heroes.updated_at']
            }
            league.heroes.append(hero.Hero(hero_data))
        return league
```