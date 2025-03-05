type Color = "black" | "white"
class Kitten
{
    color : Color ;
}

const kit1 : Kitten = {color : "black"}
const kit2 : Kitten = {color : "white"}
let kitarr : Array<Kitten> = [kit1,kit2]
let kitarr2 = kitarr.filter(kit => kit.color === "white")
console.log(kitarr2)