game_is_running = True 

scores = {
    "user_1": 0,
    "user_2": 0
}

def game_round(user_1_input, user_2_input, scores):
    if user_1_input == "quit" or user_2_input == "quit":
        game_is_running = False
        return True
    if(int(user_1_input) > int(user_2_input)):
        scores["user_1"] += 1
        print("Player 1 wins!")
        return True
    elif(int(user_2_input) > int(user_1_input)):
        scores["user_2"] += 1
        print("Player 2 wins!")
        return True
    else:
        print("It's a tie!")
        return False

rounds_played = 0
while(game_is_running == True): # this is what we call the game loop. this will continue to run until we've determined it shouldn't
    
    # Round 1
    is_round_over = False
    while is_round_over == False:

        user_1_input = input("Please make a choice, player 1: ") 
        user_2_input = input("Please make a choice, player 2: ")
        is_round_over = game_round(user_1_input, user_2_input, scores)
    
    rounds_played += 1

    if rounds_played == 3:
        game_is_running = False
    

   

if scores["user_1"] > scores["user_2"]:
    winner = "Player 1"
    winning_points = scores["user_1"]
else:
    winner = "Player 2"
    winning_points = scores["user_2"]

print(f"{winner} wins with {winning_points}")

