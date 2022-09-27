const args = process.argv.slice(2)
console.log("Parámetros :", args);

const loadNumber = () => {
    args.forEach(value => {
        let number = parseInt(value.substring(5))
            return number
    })
}


switch (args[0]) {
    case "--operation=/":
        let div = 0;
        div = loadNumber() / loadNumber()
        console.log("resultado: ", div);
        break;
    case "--operation=*":
        console.log("*");
        break
    case "--operation=^":
        console.log("^");
        break;
    case "--operation=@":
        console.log("@");
        break
    default:
        console.log("Parámetros erróneos");
        break;
}