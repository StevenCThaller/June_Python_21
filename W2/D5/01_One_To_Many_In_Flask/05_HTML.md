# O2M in HTML

Now that we have our league with its list of heroes, how do we set up the `HTML` to show that?

## `oneLeague.html`

```html
<h1>{{this_league.name}}</h1>
<h3>Heroes in {{ this_league.name }}</h3>
<ul>
    {% for hero in this_league.heroes: %}
        <li>{{hero.name}}, AKA {{hero.alter_ego}}</li>
    {% endfor %}
</ul>
```