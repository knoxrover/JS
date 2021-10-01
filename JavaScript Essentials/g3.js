//closure

function f1()
{
    console.log("Hello i am f1.....");
    let X = "hello";
    function Inner()
    {
        let Y = " Pune";
        console.log(X+Y);
    }
    return Inner;
}

let RF = f1();

RF();

// o/p
// Hello i am f1.....
// hello Pune
