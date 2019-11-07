class Theme{

    constructor(styleWhite, styleBlack){

        this.themeBlack(styleWhite, styleBlack);

    }

    themeBlack(styleWhite, styleBlack){

        let cssFile;
    
        let conditional = true;

        $(".btn-theme").click(()=>{

            if(conditional == true){

                cssFile = styleBlack;
                conditional = false;
                $(".menu").removeClass("navbar-light");
                $(".menu").addClass("navbar-dark");

            }else{

                cssFile = styleWhite;
                conditional = true;
                $(".menu").removeClass("navbar-dark");
                $(".menu").addClass("navbar-light");
                
            }

            console.log(conditional);

            localStorage.setItem("conditional", conditional);
            document.querySelector(".styleCss").href = cssFile;
    
        });
    }

}