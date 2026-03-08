let gameActive = true; //this variable is required. 
                       //to stop the game, set it to false.

//Declare your other global variables here


//If you need, add any "helper" functions here


//Make one function for each location
function CellBlockA() {
    clear();
    print("\nYou are in Cell Block A. The time is 6:00am.");
    print("\nWhat would you like to do next? Say one of these choices:" +
        "\n" +
        "\n\t> wait");

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

function Wait6am() {
    clear();
    print("\nYou waited...");
    print("\nThe time is now 6:00am.");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n" +
        "\n\t> wait");
    
    function processInput(input){
        if (input.toLowerCase() === "wait") {
            Wait12pm();
        } else {
            stayHere();
            waitThenCall(Wait12pm);
        }
    }
    waitForInput(processInput);
}

function Wait12pm() {
    clear();
    print("\nYou waited...");
    print("\nThe time is now 12:00pm.");
    print("\nWhat would you like to do next? Say one of these choices:" +
        "\n" +
        "\n\t> wait" +
        "\n\t> go to lunch");
    
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
        "\n" +
        "\n\t> wait" +
        "\n\t> work");
    
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
        "\n" +
        "\n\t> wait");
    
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

function GoToLunch() {
    clear();
    print("\nYou are in the cafeteria!");
    print("\nWhat would you like to do next? Say one of these choices:" +
        "\n\teat" +
        "\n\ttalk to Jerry" +
        "\n\ttalk to Gary" +
        "\n\tsmuggle");
    
    
    function processInput(input){
        if (input.toLowerCase() === "eat") {
            Eat();
        } else if (input.toLowerCase() === "talk to jerry") {
            TalkToJerry();
        } else if (input.toLowerCase() === "talk to gary") {
            TalkToGary();
        } else if (input.toLowerCase() === "smuggle") {
            Smuggle();
        } else {
            stayHere();
            waitThenCall(doNothing);
        }
    }
    waitForInput(processInput);
}
function Eat() {
    clear();
    HowWasLunch();
    print("\nIts free time. Go to the courtyard.");
    print("\nWhat would you like to do next? Say one of these choices:" +
        "\n\tcourtyard");
    
    function processInput(input){
        if (input.toLowerCase() === "courtyard") {
            Courtyard();
        } else {
            stayHere();
            waitThenCall(Courtyard);
        }
    }
    waitForInput(processInput);
}
function TalkToJerry() {
    clear();
    print("\nYou talked to Jerry. He told you to talk to Darren in Cell Block C.");
    print("\nIts free time. Go to the courtyard.");
    print("\nWhat would you like to do next? Say one of these choices:" +
        "\n\tcourtyard");
    
    function processInput(input){
        if (input.toLowerCase() === "courtyard") {
            Courtyard();
        } else {
            stayHere();
            waitThenCall(Courtyard);
        }
    }
    waitForInput(processInput);
}
function TalkToGary() {
    clear();
    print("\nYou talked to Gary. It was a waste of time.");
    print("\nIts free time. Go to the courtyard.");
    print("\nWhat would you like to do next? Say one of these choices:" +
        "\n\tcourtyard");
    
    function processInput(input){
        if (input.toLowerCase() === "courtyard") {
            Courtyard();
        } else {
            stayHere();
            waitThenCall(Courtyard);
        }
    }
    waitForInput(processInput);
}
function Smuggle() {
    clear();
    print("\nWhat would you like to smuggle? Say one of these choices:" +
        "\n\tfork" +
        "\n\tspoon" +
        "\n\tplate");
    
    function processInput(input){
        if (input.toLowerCase() === "fork") {
            Fork();
        } else if (input.toLowerCase() === "spoon") {
            Spoon();
        } else if (input.toLowerCase() === "plate") {
            Plate();
        } else {
            stayHere();
            waitThenCall(Courtyard);
        }
    }
    waitForInput(processInput);
}

function Courtyard() {
    clear();
    print("\nYou are in the courtyard!");
    print("\nWhat would you like to do next? Say one of these choices:" +
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

function locationB() {
    clear();
    print("\nYou are in location B!");
    print("\nWhat would you like to do next? Say one of these choices:" +
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
function locationB() {
    clear();
    print("\nYou are in location B!");
    print("\nWhat would you like to do next? Say one of these choices:" +
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
function Plate() {
    clear();
    GameOverAscii();
    print("\nYou tried to smuggle a plate, but it was too big and the guards caught you.");
    print("\nYou were sent to solitary.");
    print("\n<b>You Lost. If you would like to try again, please type 'restart' or press the restart button in the top right corner.</b>");
    
    function processInput(input){
        if (input.toLowerCase() === "restart") {
            start();
        } else {
            stayHere();
        }
    }
    waitForInput(processInput);
}

function locationB() {
    clear();
    print("\nYou are in location B.");
    print("\nWhat would you like to do next? Say one of these choices:" +
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
function start() {
    clear();
    print("Welcome to my game! Type <i><b>'start'</b></i> to begin.");

    function processInput(input){
        if (input.toLowerCase() === "start") {
            CellBlockA();
        }
    }
    waitForInput(processInput);
}

function HowWasLunch() {
    var arr = ["You ate. Lunch was good", "You ate. Lunch was disgusting", "You ate. Lunch was okay", "You ate. Lunch wasn't very good"];
    var random_string = arr[Math.floor(Math.random() * arr.length)];
    print("\n" + random_string);
}

function GameOverAscii() {
    printAscii(`

    ██████╗  █████╗ ███╗   ███╗███████╗     ██████╗ ██╗   ██╗███████╗██████╗         ██╗
   ██╔════╝ ██╔══██╗████╗ ████║██╔════╝    ██╔═══██╗██║   ██║██╔════╝██╔══██╗    ██╗██╔╝
   ██║  ███╗███████║██╔████╔██║█████╗      ██║   ██║██║   ██║█████╗  ██████╔╝    ╚═╝██║ 
   ██║   ██║██╔══██║██║╚██╔╝██║██╔══╝      ██║   ██║╚██╗ ██╔╝██╔══╝  ██╔══██╗    ██╗██║ 
   ╚██████╔╝██║  ██║██║ ╚═╝ ██║███████╗    ╚██████╔╝ ╚████╔╝ ███████╗██║  ██║    ╚═╝╚██╗
    ╚═════╝ ╚═╝  ╚═╝╚═╝     ╚═╝╚══════╝     ╚═════╝   ╚═══╝  ╚══════╝╚═╝  ╚═╝        ╚═╝

    `);
}