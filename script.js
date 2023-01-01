const videoElement = $('#video')
const button = $('#button')

// prompt the user to select media stream pass to video element and play

async function selectMediaStream() {
    try {
        const mediaStream= await navigator.mediaDevices.getDisplayMedia();
        videoElement.attr('src',mediaStream);
        videoElement.on('loadmetadata',function(){
            videoElement.play();
        })
    }
    catch (error) {


    }
button.click(async ()=> { 
    button.attr('disable','disable');
    await videoElement.requestPictureInPicture();
    button.remove('disable');
    
}); 
}
// on load 
selectMediaStream();