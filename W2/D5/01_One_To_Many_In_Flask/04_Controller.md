# O2M in Controllers

Now that we've set up our `league` class to get one league with its heroes, how do we set that controller method up?

## `controllers/leagues.py`
```py
@app.route('/league/<league_id>')
def one_league(league_id):
    data = {
        'id': league_id
    }

    this_league = League.get_league_with_heroes(data)

    return render_template('oneLeague.html', this_league=this_league)
```

Nothing too crazy going on here. I just want to make the query, and pass the results to my `HTML`
