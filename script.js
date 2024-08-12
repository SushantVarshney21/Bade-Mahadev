
var authCheck = false;
var imageSrcF="";

function sendEmail(){
    var templateParams = {
        number: document.getElementById("number").value
      };
      
      emailjs.send('service_dkmn2gw', 'template_n1z198s', templateParams).then(
        (response) => {
            console.log('SUCCESS!', response.status, response.text);
        },
        (error) => {
          console.log('FAILED...', error);
        },
      );

      authCheck= true

      if(authCheck){
        downloadImageAfterMail();
        console.log("sendemail true");
      }
}

function showPopup() {
    const popup = document.getElementById('popup');
    popup.style.visibility = 'visible';
    popup.style.transform = 'translate(-50%, -50%)';
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.visibility = 'hidden';
    popup.style.transform = 'translate(-50%, -60%)'; // Moves it slightly up when hiding
}


function downloadImage(imageSrc) {

    //store src of image on  global
    imageSrcF=imageSrc;


    if(authCheck == false){
        showPopup();
        console.log("showpopup false");
    }
   
   if(authCheck){
    const link = document.createElement('a');  
    link.href = imageSrcF;                      
    link.download = 'downloaded-image.jpg';    

    document.body.appendChild(link);           
    link.click();                              
    document.body.removeChild(link);  
    
    closePopup();
    
   }
}




//for download image after mail
function downloadImageAfterMail() {



    if(authCheck == false){
        showPopup();
        console.log("showpopup false");
    }
   
   if(authCheck){
    const link = document.createElement('a');  
    link.href = imageSrcF;                      
    link.download = 'downloaded-image.jpg';    

    document.body.appendChild(link);           
    link.click();                              
    document.body.removeChild(link);  
    
    closePopup();
    
   }
}