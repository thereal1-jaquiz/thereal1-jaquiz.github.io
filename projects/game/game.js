let gameActive = true; //this variable is required. 
                       //to stop the game, set it to false.

//Declare your other global variables here
let hasSpoon = false
let talkedToColin = false
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
    if (hasSpoon = false) {
        clear();
    print("\nYou waited...");
    print("\nThe time is now 12:00am.");
    print("\nWhat would you like to do next? Say one of these choices:" +
        "\n" +
        "\n\t> wait");}

    else if (hasSpoon = true) {
        clear();
    print("\nYou waited...");
    print("\nThe time is now 12:00am.");
    print("\nWhat would you like to do next? Say one of these choices:" +
        "\n" +
        "\n\t> wait" +
        "\n\t> dig");}
    
    function processInput(input){
        if (input.toLowerCase() === "wait") {
            Wait6am();
        } else if ((hasSpoon = true)&&(input.toLowerCase() === "wait")) {
            DigHole();
        }else{
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
        "\n\tmain hall" +
        "\n\tplay basketball" +
        "\n\ttalk to big gus" +
        "\n\tworkout");
    
    function processInput(input){
        if (input.toLowerCase() === "main hall") {
            MainHall();
        } else if (input.toLowerCase() === "play basketball") {
            PlayBasketball();
        } else if (input.toLowerCase() === "talk to big gus") {
            TalkToBigGus();
        } else if (input.toLowerCase() === "workout") {
            Workout();
        } else {
            stayHere();
            waitThenCall(Courtyard);
        }
    }
    waitForInput(processInput);
}

function Spoon() {
    clear();
    print("\nYou smuggled a spoon. Mabye it will come in handy later.");
    print("\nIts free time. Go to the courtyard.");
    print("\nWhat would you like to do next? Say one of these choices:" +
        "\n\tcourtyard");
 hasSpoon = true
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
function Fork() {
    clear();
    print("\nYou smuggled a fork.");
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

function MainHall() {
    clear();
    print("\nYou are in the main hall.");
    print("\nWhat would you like to do next? Say one of these choices:" +
        "\n\tcellblock a" +
        "\n\tcellblock b" +
        "\n\tupstairs" +
        "\n\tvisitor center");
    
    function processInput(input){
        if (input.toLowerCase() === "locationa") {
            CellBlockA();
        } else if (input.toLowerCase() === "locationb") {
            CellBlockB();
        } else if (input.toLowerCase() === "upstairs") {
            Upstairs();        
        } else if (input.toLowerCase() === "visitor center") {
            VisitorCenter();
        } else {
            stayHere();
            waitThenCall(WorkTime);
        }
    }
    waitForInput(processInput);
}
function PlayBasketball() {
    clear();
    Score();
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
function Workout() {
    clear();
    print("\nYou worked out in the gym.");
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
function VisitorCenter() {
    clear();
    print("\nYou are in the visitor center.");
    print("\nWho would you like to call? Say one of these choices:" +
        "\n\tMom" +
        "\n\tDad" +
        "\n\tColin");
    
    function processInput(input){
        if (input.toLowerCase() === "mom") {
            Mom();
        } else if(input.toLowerCase() == "dad") {
            Dad();
        } else if(input.toLowerCase() == "colin") {
            Colin()
        } else{
            stayHere();
            waitThenCall(locationB);
        }
    }

}

function Colin() {

let talkedToColin = true

}clear();
    print("\nYou talked to Colin.");
    print("\nYou guys planned a helicopter escape tomorrow at midnight in the courtyard.")
    print("\nAnyway, it's time for work" +
        "\n\t >work");
    
    function processInput(input){
        if (input.toLowerCase() === "work") {
            WorkTime();
        } else {
            stayHere();
            waitThenCall(WorkTime);
        }
    }
    waitForInput(processInput);

function WorkTime() {
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
function CellBlockB() {
    clear();
    print("\nYou are in Cell Block B. There is nothing to do here.");
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
function Upstairs() {
    clear();
    print("\nYou went upstairs.");
    print("\nWhat would you like to do next? Say one of these choices:" +
        "\n\tgo to cellblock c");
    
    function processInput(input){
        if (input.toLowerCase() === "cellblock c") {
            CellBlockC();
        } else {
            stayHere();
            waitThenCall(WorkTime);
        }
    }
    waitForInput(processInput);
}
function CellBlockC() {
    clear();
    print("\nYou are in Cell Block C.");
    print("\nWhat would you like to do next? Say one of these choices:" +
        "\n\ttalk to Darren");
    
    function processInput(input){
        if (input.toLowerCase() === "talk to darren") {
            Darren();
        } else {
            stayHere();
            waitThenCall(locationB);
        }
    }
    waitForInput(processInput);
}
function Darren() {
    clear();
    print("\nYou are talking to Darren.");
    print("\nDarren said blah.");
    print("\nWhat would you like to say next? Say one of these choices:" +
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
function DigHole() {
    clear();
    print("\nMovie ball knowledge?.");
    print("\nYou dug a hole to the courtyard; you can now go there.")
    print("\nWhere would you like to go?" +
        "\n\twait" +
        "\n\tcourtyard");
    
    function processInput(input){
        if (input.toLowerCase() === "wait") {
            Wait6am();
        } else if((talkedToColin = true) && (input.toLowerCase() === "courtyard")){
            Escape();
        } else if((talkedToColin = true) && (input.toLowerCase() === "courtyard")){
            Courtyard12am();
        } else {
            stayHere();
            waitThenCall(Wait6am);
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

//BASKETBALL WIN OR LOSE FUNCTION

create_random_string(2);

function create_random_string(string_length){
var random_string = '';
var characters = '123456789';
for(var i, i = 0; i < string_length; i++){
random_string += characters.charAt(Math.floor(Math.random() * characters.length))
};
return random_string;
}

function WinLose() {
    if (ScoreA > ScoreB) {
        print("You won!");
    } else if (ScoreA < ScoreB) {
        print("You lost!");
    } else {
        print("It's a tie!");
    }
}

function Score() {

    ScoreA = create_random_string(2)
    ScoreB = create_random_string(2)
    
print("You played basketball. It was fun.");
WinLose();
print("The final score was " + ScoreA + " to " + ScoreB + ".");
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
