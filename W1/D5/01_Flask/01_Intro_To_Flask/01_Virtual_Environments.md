# Virtual Environments

## What Is/Why Do We Need Virtual Environments??

As developers, we're rarely locked into just a single programming language. But more importantly, even if we ARE always working in the same language, we'll often find ourselves working on multiple projects within the same workspace. And each of those projects may use different versions of the same frameworks, or some frameworks or libraries that other projects don't require.

So we use `virtual environments`, which allows us to use specific versions of these packages/libraries/frameworks without impacting the other projects in our workspace!

## Installing the Virtual Environment Tool

### Windows:
```console
pip install pipenv
```

NOTE: You may get an error (I sure did). If you do, try:
```console
pip install --user pipenv
```

### Mac:
```console
pip3 install pipenv
```

## After Initializing your Project Directory

Once initialized, navigate into where your project is going to be, and initialize your Virtual Environment.

### Windows:
```console
python -m pipenv <some command>
```

### Mac:
```console
python3 -m pipenv <some command>
```

**NOTE**: We'll cover the `<some command>` portion of that here in a second, but generally it will be one of two things:

1. Installing Packages
```console
pipenv install <list of packages separated by spaces>
```
2. Actually opening the virtual environment
```console
pipenv shell
```

3. (OPTIONAL): If you receive an error in either of the last two, it's an issue with not having `pipenv` set as an environment variable. You can get around this by figuring out how to set it (This process varies drastically between Windows and Mac), or just do it the long way (i.e. me):
```console
python -m pipenv <whatever command>
```

Now you'll notice some stuff in parentheses (the folder name, and in my case, some characters added to it). This indicates you're in the virtual environment.

## Exiting the Virtual Environment

```console
exit
```