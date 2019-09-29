function theme(){

    let conditional = true;
    let cssFile;


    $(".btn-tema").click(()=>{

        switch(conditional) {

            case true:
                cssFile = "css/styleBlack.css";
                conditional = false;
                $(".menu").removeClass("navbar-light");
                $(".menu").addClass("navbar-dark");
                break;
            
            default:
                cssFile = "css/style.css";
                conditional = true;
                $(".menu").removeClass("navbar-dark");
                $(".menu").addClass("navbar-light");
                break;

        }

        document.querySelector(".styleCss").href = cssFile;

    });
}

theme();