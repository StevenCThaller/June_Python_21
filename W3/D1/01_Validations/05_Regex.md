# What's a RegEx??

`RegEx` stands for `regular expression`. It is a method that is available across (as far as I'm aware) just about every programming language.

It is a pattern matching system that allows us to say that a string should contain (or not contain) certain characters, capitalization, etc..

For example, the following `RegEx` string for an email address (contain characters followed by an `@`, followed by more characters, then a `.`, then some more characters, for somecharacters`@`somesite`.`com)

```
r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$'
```

Personally? I think it's black magic. I know it's built with logic, but my smooth brain is terrible at being able to just figure it out. SO, google is our friend!

## How to Use

In our validator method, let's say that I want my super hero's `alter_ego` to ONLY contain letters, and maybe hyphens and apostraphes.
I'm gonna be brave and try to write this myself:
```
r'^[a-zA-Z-\']$'
```
Should indicate that the name can contain lowercase `a-z`, uppercase `A-Z`, a `-` and a `'`. Notice the `\` before `'`. `'` is how we started the string, so we need to escape the character so it doesn't end the string! And the `$` indicates the end. 

Now, how do we actually RUN this pattern validation??

### `models/superheroes.py`

```py
import re # this is the regex module

# create a regex object that we'll use
HERO_NAME_REGEX = re.compile(r'^[a-zA-Z-\']$')

class SuperHero:
    # other methods
    @staticmethods
    def validate_hero(hero):
        is_valid = True

        # other field validations

        # to test whether our alter_ego matches our regex
        if not HERO_NAME_REGEX.match(hero['alter_ego']):
            flash("Alter Ego can only contain letters, -, and '.", "alter_ego")
            is_valid = False
        
        # other field validations

        return is_valid
```