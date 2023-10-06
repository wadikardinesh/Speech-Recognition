import { useState } from 'react';
import '../App.css'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useClipboard from "react-use-clipboard";
import {FaMicrophone,FaMicrophoneSlash} from 'react-icons/fa'

const Speech = () => {

  const startListning = () =>   SpeechRecognition.startListening({ continuous: true , language : 'en-chinese'});
  const StopListning = () => SpeechRecognition.stopListening()

 const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();
 const [textToCopy , setTextToCopy] = useState();
 const [isCopied, setCopied] = useClipboard(transcript);


 if (!browserSupportsSpeechRecognition) {
   return null 
 }

  return (
    <div className="App"> 
      <div className='head-cont'>
      <h1>Speech To Text Converter !</h1>


<div className='parent'>
      <div className="text-container">
        <div>
         <p className='title'><u>You speak any and then type automatically here !</u></p>
          <p onClick={()=>setTextToCopy(transcript)}>{transcript}</p>
        </div>
        <div className="btn" >
        <button onClick={setCopied}>
          {isCopied ? "copied! 👍" : "copied to clipboard 👎"}
     </button>
        <button onClick={startListning}> <FaMicrophone/> Start Listining</button>
        <button onClick={StopListning}> <FaMicrophoneSlash/> Stop Listning</button>
      </div>
   
      </div>

      </div>
    </div>
    </div>
  );
  
}

export default Speech
