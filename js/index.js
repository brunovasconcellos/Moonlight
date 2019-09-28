function tema(){

    let conditional = true;
    let cssFile;

    $(".btn-tema").click(()=>{

        switch(conditional) {

            case true:
                cssFile = "css/styleBlack.css";
                conditional = false;
                break;
            
            case false:
                cssFile = "css/style.css";
                conditional = true;
                break;

        }

        document.querySelector(".styleCss").href = cssFile;

    });
}

tema();