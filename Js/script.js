viewAds = ()=>  {
    const showAds = document.getElementById("fb-ads")
    const changeColor = document.getElementById ("more")


    // This displays the content(fb-ads) when the user clicks on "more" 
    if (showAds.style.display === "none") {

        showAds.style.display = "block"
       
    }  
    
    // This makes the content(fb-ads) disappear if the user clicks on "more" again.
   else {
        showAds.style.display = "none"
    }
    

    // This changes the color of "more" when it's clicked
    if (showAds.style.display === "block") {
        
        changeColor.style.opacity = ".6"

    } else {
        changeColor.style.opacity = "1"
    }
};









// const viewAds => () {
// 	const show = getElementById ("fb-ads");
	
// 	if(show.style.display === "none") {
// 	display: "block"
// 	};
	
// 	else {
// 	display: "none"
// 	};
// };
