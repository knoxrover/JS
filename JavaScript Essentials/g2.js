// functional programming

function AF()
{
    console.log("Hello I am function ")
}

function f1(af)
{
    console.log("Hi I am function f1.......");
    af();
    function innerFun()
    {
        console.log("I am Inner function");
    }
    innerFun();
    return innerFun;
}

let RF = f1(AF);
RF();