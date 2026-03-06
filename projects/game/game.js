let gameActive = true; //this variable is required. 
                       //to stop the game, set it to false.

//Declare your other global variables here


//If you need, add any "helper" functions here


//Make one function for each location
function CellBlockA() {
    clear();
    print("\nYou are in Cell Block A!");
    print("\nThe time is 6:00am.");
    print("\nWhat would you like to do next? Say one of these choices:" +
        "\n\twait");

        function processInput(input){
        if (input.toLowerCase() === "wait") {
            Wait12pm();
        } else {
            stayHere();
            waitThenCall(locationA);
        }
    }
    waitForInput(processInput);
}
    
    function processInput(input){
        if (input.toLowerCase() === "locationb") {
            locationB();
        } else {
            stayHere();
            waitThenCall(locationA);
        }
    }
    waitForInput(processInput);

function Wait6am() {
    clear();
    print("\nYou waited...");
    print("\nThe time is now 6:00am.");
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

function Wait12pm() {
    clear();
    print("\nYou waited...");
    print("\nThe time is now 12:00pm.");
    print("\nWhat would you like to do next? Say one of these choices:" +
        "\n\twait" +
        "\n\tgo to lunch");
    
    function processInput(input){
        if (input.toLowerCase() === "wait") {
            Wait6pm();
        } else if (input.toLowerCase() === "go to lunch") {
            GoToLunch();
        } else {
            stayHere();
            waitThenCall(Wait6pm);
        }
    }
    waitForInput(processInput);
}

function Wait6pm() {
    clear();
    print("\nYou waited...");
    print("\nThe time is now 6:00pm.");
    print("\nWhat would you like to do next? Say one of these choices:" +
        "\n\twait" +
        "\n\twork");
    
    function processInput(input){
        if (input.toLowerCase() === "wait") {
            Wait12am();
        } else if (input.toLowerCase() === "work") {
            Work();
        } else {
            stayHere();
            waitThenCall(Wait12am);
        }
    }
    waitForInput(processInput);
}

function Wait12am() {
    clear();
    print("\nYou waited...");
    print("\nThe time is now 12:00am.");
    print("\nWhat would you like to do next? Say one of these choices:" +
        "\n\twait");
    
    function processInput(input){
        if (input.toLowerCase() === "wait") {
            Wait6am();
        } else {
            stayHere();
            waitThenCall(Wait6am);
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
    print("Welcome to my game! Press any key to start.");

    function processInput(input){
        CellBlockA();
        }
    }
    waitForInput(processInput);
