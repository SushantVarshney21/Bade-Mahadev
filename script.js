
var authCheck = false;
var imageSrcF="";
var  videoSrcF=""
var imgcheck = false
var videocheck = false

function visitUser(){
  var templateParams = {
    number: "User Enter"
  };
  
  emailjs.send('service_dkmn2gw', 'template_n1z198s', templateParams).then(
    (response) => {
        console.log('SUCCESS!', response.status, response.text);
    },
    (error) => {
      console.log('FAILED...', error);
    },
  );

}

visitUser()

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
        if(imgcheck){
          downloadImageAfterMail();
        }
        if(videocheck){
          downloadVideoAfterMail();
        }
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

  imgcheck = true

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

  imgcheck = true

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



function downloadVideo(videoSrc) {

  videocheck = true

  // Store the src of the video globally
  videoSrcF = videoSrc;

  if(authCheck == false){
      showPopup();
      console.log("showpopup false");
  }

  if(authCheck){
      const link = document.createElement('a');
      link.href = videoSrcF;
      link.download = 'downloaded-video.mp4'; // You can change the filename and extension as needed

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      closePopup();
  }
}



function downloadVideoAfterMail() {

  videocheck = true;

  if(authCheck == false){
      showPopup();
      console.log("showpopup false");
  }
 
  if(authCheck){
      const link = document.createElement('a');
      link.href = videoSrcF;                      // Ensure videoSrcF is the global variable holding the video URL
      link.download = 'downloaded-video.mp4';     // You can customize the file name and extension as needed

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      closePopup();
  }
}
