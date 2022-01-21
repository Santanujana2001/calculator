const buttons = document.querySelectorAll('button');
var result = "";
for (let i = 0; i < buttons.length; i++) {
    var ref;

    buttons[i].addEventListener('click', freescr);
    function freescr(a) {
        document.querySelector('.credit').innerHTML = "";
    }
    buttons[i].addEventListener('click', abc);

    function abc(e) {


        var key = e.srcElement.innerText;
        if (key == '=') {
            document.querySelector('.texts').innerHTML = eval(result);
        }
        else if (key == 'ac') {
            document.querySelector('.texts').innerHTML = "";
            result = "";
        }
        else if (key == 'off') {
            document.querySelector('.texts').innerHTML = "welcome to  sanu's calculator";
            document.querySelector('.texts').style.opacity = "50%";
            result = "";
        }
        else if (key == '⬅️') {
         result =result.slice(0,result.length-1);
          document.querySelector('.texts').innerHTML = result;
        }

        else {
            document.querySelector('.texts').style.opacity = "100%";
            
            result += key;
            ref = result;
            document.querySelector('.texts').innerHTML = result;

        }


    }
}
