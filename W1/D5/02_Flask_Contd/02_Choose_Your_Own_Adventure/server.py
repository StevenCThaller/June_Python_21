from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def index():
    oh_no_axel = """
    We've got fun and games. Axel has found himself in a situation. 
    He's realized that the success of his band, Gunicorns and Not 
    Roses, was all due to his bandmates. One night, Axel comes across 
    a mysterious door shaped like a giant poofy 80's hairdo. What 
    should Axel do?
    """

    return render_template(
        'index.html', 
        message=oh_no_axel, 
        left_url="/door", 
        right_url="/slash", 
        left_text="Enter the Door", 
        right_text="Call Slash and Beg for Forgiveness... Again"
    )

@app.route('/door')
def hair_door():
    ew_gross = """
    Immediately upon stepping into the door, Axel realizes he may have
    consumed one too many Natty Lite's. It's not a hair shaped door. It's 
    actually a giant pile of hair.
    """

    return render_template(
        'index.html',
        message=ew_gross,
        left_url='/morehair',
        right_url='/lesshair',
        left_text="I know it's more than just hair... Keep pushing!",
        right_text="Realize that's gross, climb out and continue on down the street."
    )

@app.route('/slash')
def call_slash():
    leave_me_alone = """
    Slash picks up the phone, and pretends like he doesn't know who's 
    calling. "I've already told you, I don't HAVE a car, and if I did,
    it wouldn't HAVE an extended Warranty!

    Axel, taken aback, says "What? No, it's me! Axel!

    "EVEN WORSE!" Shouts Slash, before slamming the phone down. Clearly,
    he's not using a smart phone. Otherwise, he would have definitely 
    cracked the screen.

    Axel contemplates this for a few minutes. Then he walks across the street.
    """

    return render_template(
        'index.html',
        message=leave_me_alone,
        left_url='/buysnacks',
        right_url='/buydrinks',
        left_text="I wonder if they have any Wendy's Chicken Sandwich Pringles",
        right_text="I'm kind of thirsty... Maybe I shouldn't drink all this Natty Lite."
    )

@app.route('/morehair')
def hairnia():
    welcome_to_hairnia = """
    Somehow, through that thick skull of his, Axel just KNEW there was something
    more beyond all this hair.

    He breaks through a particularly tough knot, and while admiring the cleanliness
    of the ends, falls into a magical realm. Surrounding him are frolocking hairies,
    furballs, and a tall, surprisingly hairless wizard.

    "Welcome to my realm!" exclaimed the wizard. 

    "D'you have any beer here?" Asked Axel.

    "OF COURSE NOT!" says the Wizard, as he tries to shove Axel back through portal to 
    the dimly lit alleyway from whence he came.
    """


    return render_template(
        'index.html', 
        message=welcome_to_hairnia,
        left_url='/',
        right_url='/fightthewizard',
        left_text='Give in and go back',
        right_text='Sidestep the Wizard, and watch him fall through the portal'
    )

if __name__ == '__main__':
    app.run(debug=True)