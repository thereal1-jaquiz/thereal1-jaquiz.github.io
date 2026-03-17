var test = false

function TestA() {
if (test=true){
    console.log("HI")
}else if (test=false){
    console.log("NO HI")
}
}

TestA();

function TestB() {
test = true;
if (test=true){
    console.log("HI")
}else if (test=false){
    console.log("NO HI")
}
}

TestB();