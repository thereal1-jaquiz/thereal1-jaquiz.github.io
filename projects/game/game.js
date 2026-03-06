let gameActive = true; //this variable is required. 
                       //to stop the game, set it to false.

//Declare your other global variables here


//If you need, add any "helper" functions here


//Make one function for each location
function LocationA() {
    clear();
    print("\nYou are in location A!");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\tlocationB");
    
    function processInput(input){
        if (input.toLowerCase() === "locationb") {
            locationB();
        } else {
            stayHere();
            waitThenCall(locationA);
        }
    }
    waitForInput(processInput);
}

function locationB() {
    clear();
    print("\nYou are in location B!");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\tlocationA");
    
    function processInput(input){
        if (input.toLowerCase() === "locationa") {
            locationA();
        } else {
            stayHere();
            waitThenCall(locationB);
        }
    }
    waitForInput(processInput);
}

//finally, make sure you customize this to tell it what should happen at the
//very start. For this simple example, any input will bring you
//to locationA
function start(){
    print("Welcome to my game! Press any key to start");

    function processInput(input){
        if (input.toLowerCase() === "start") {
            LocationA();
        } else {
            print("\nThat's not an option. Are you trying to skip school? " +
                "You're going to have to get off the bus.");
            print("To get off the bus, type Start");
        }
    }
    }
    waitForInput(processInput);
