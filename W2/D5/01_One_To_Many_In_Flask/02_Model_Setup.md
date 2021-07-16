# Model Setup

For our `One to Many` relationships, we need to set up our classes a specific way. On the `Many` side (in this case, the `heroes`), it's pretty much going to look just like our ERD.

## `hero.py`

```py
class Hero:
    def __init__(self, data):
        self.id = data['id']
        self.name = data['name']
        self.alter_ego = data['alter_ego']
        # In our database, we make the connection via a foreign key, so add the id to the league here
        self.league_id = data['league_id']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
```


## `league.py`
```py
# Before we can even worry about making queries to fill that relationship data, we need to import the other side's model file
from hero_app.models import hero

class League:
    def __init__(self, data):
        self.id = data['id']
        self.name = data['name']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

        # While this won't ACTUALLY be part of the database, 
        # for the purpose of our application, we'll need to be able to see
        # what heroes are in a league. We'll have to populate this when we make
        # our queries.
        self.heroes = []

```