class Theme{

    constructor(styleWhite, styleBlack){

        this.themeBlack(styleWhite, styleBlack);

    }

    themeBlack(styleWhite, styleBlack){

        let conditional = true;
        let cssFile;
    
    
        $(".btn-theme").click(()=>{
            
            console.log("Amamya Ren");
    
            switch(conditional) {
    
                case true:
                    cssFile = styleBlack;
                    conditional = false;
                    $(".menu").removeClass("navbar-light");
                    $(".menu").addClass("navbar-dark");
                    break;
                
                default:
                    cssFile = styleWhite;
                    conditional = true;
                    $(".menu").removeClass("navbar-dark");
                    $(".menu").addClass("navbar-light");
                    break;
    
            }
    
            document.querySelector(".styleCss").href = cssFile;
    
        });
    }

}