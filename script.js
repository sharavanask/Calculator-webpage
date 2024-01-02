function cal(n) {
    switch (n) {
        case 'ac':
            disp.innerHTML = ""
            break;
        case 'del':
            disp.innerHTML = disp.innerHTML.substring(0, disp.innerHTML.length - 1);
            break;
        case 'mod':
            disp.innerHTML += "%"
            break;
        case 'div':
            disp.innerHTML += "/"
            break;
        case '7':
            disp.innerHTML += "7"
            break;
        case '8':
            disp.innerHTML += "8"
            break;
        case '9':
            disp.innerHTML += "9"
            break;
        case 'X':
            disp.innerHTML += "*"
            break;
        case '4':
            disp.innerHTML += "4"
            break;
        case '5':
            disp.innerHTML += "5"
            break;
        case '6':
            disp.innerHTML += "6"
            break;
        case 'sub':
            disp.innerHTML += "-"
            break;
        case '1':
            disp.innerHTML += "1"
            break;
        case '2':
            disp.innerHTML += "2"
            break;
        case '3':
            disp.innerHTML += "3"
            break;
        case 'deci':
            disp.innerHTML += "."
            break;
        case 'eq':
            disp.innerHTML = eval(disp.innerHTML)
            break;
        case '0':
            disp.innerHTML += "0"
            break;
        case 'sum':
            disp.innerHTML += "+"
            break;

        default:
            break;
    }

}
let disp = document.getElementById("fm")
disp.innerHTML = ""
