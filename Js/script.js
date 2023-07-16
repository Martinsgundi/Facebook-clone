viewAds = ()=>  {
    const showAds = document.getElementById("fb-ads")
    const changeColor = document.getElementById ("more")
    const computedStyle = window.getComputedStyle(showAds)


    // This displays the content(fb-ads) when the user clicks on "more" 
    if (computedStyle.display === "none") {

        showAds.style.display = "block"
       
    }  
    
    // This makes the content(fb-ads) disappear if the user clicks on "more" again.
   else {
        showAds.style.display = "none"
    }
    

    // This changes the color of "more" when it's clicked
    if (computedStyle.display === "block") {
        
        changeColor.style.opacity = ".6"

    } else {
        changeColor.style.opacity = "1"
    }
};