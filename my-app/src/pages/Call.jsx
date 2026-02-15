import React, { useRef, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Mic, MicOff, Video, VideoOff, PhoneOff } from 'lucide-react';

const Call = () => {
  const { id } = useParams(); // Get recipient ID from URL parameters
  const localVideoRef = useRef();
  const remoteVideoRef = useRef();
  const [isMuted, setIsMuted] = useState(false);
  const [isCameraOff, setIsCameraOff] = useState(false);

  // Dummy functions for now, will be replaced with WebRTC logic later
  const startCall = () => {
    console.log(`Starting call with user ${id}`);
    // Simulate local video stream
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then((stream) => {
        localVideoRef.current.srcObject = stream;
      })
      .catch((error) => {
        console.error('Error accessing media devices:', error);
      });
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    // Logic to mute/unmute audio stream
    // Example: localVideoRef.current.srcObject.getAudioTracks().forEach(track => (track.enabled = !isMuted));
  };

  const toggleCamera = () => {
    setIsCameraOff(!isCameraOff);
    // Logic to turn camera on/off
    // Example: localVideoRef.current.srcObject.getVideoTracks().forEach(track => (track.enabled = !isCameraOff));
  };

  const endCall = () => {
    console.log('Ending call');
    // Logic to end the WebRTC connection
    if (localVideoRef.current && localVideoRef.current.srcObject) {
      localVideoRef.current.srcObject.getTracks().forEach(track => track.stop());
    }
    // Redirect to another page, e.g., chat or dashboard
    // navigate('/app/chat'); // Uncomment when navigate is imported
  };

  useEffect(() => {
    startCall();
    // Cleanup on unmount
    return () => {
      if (localVideoRef.current && localVideoRef.current.srcObject) {
        localVideoRef.current.srcObject.getTracks().forEach(track => track.stop());
      }
    };
  }, [id]);

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white font-inter">
      {/* Call Header */}
      <div className="absolute top-0 left-0 right-0 z-10 p-4 flex items-center justify-between bg-gradient-to-b from-black/60 to-transparent">
        <h2 className="text-2xl font-poppins font-bold text-white">Call with {id || "User"}</h2>
      </div>

      {/* Video Streams */}
      <div className="flex-1 relative flex items-center justify-center bg-black">
        {/* Remote Video (larger) */}
        <video ref={remoteVideoRef} autoPlay playsInline className="absolute inset-0 w-full h-full object-cover" />

        {/* Local Video (smaller, in corner) */}
        <video ref={localVideoRef} autoPlay playsInline muted className="absolute bottom-4 right-4 w-40 h-30 md:w-56 md:h-40 bg-gray-700 rounded-lg shadow-lg border-2 border-white object-cover" />
      </div>

      {/* Floating Control Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-800 bg-opacity-70 backdrop-blur-md p-4 shadow-lg flex justify-center space-x-6 z-20">
        <button
          onClick={toggleMute}
          className="p-3 rounded-full bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-primary transition duration-300 ease-in-out transform hover:scale-110"
        >
          {isMuted ? (
            <MicOff size={24} color="white" />
          ) : (
            <Mic size={24} color="white" />
          )}
        </button>
        <button
          onClick={toggleCamera}
          className="p-3 rounded-full bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-primary transition duration-300 ease-in-out transform hover:scale-110"
        >
          {isCameraOff ? (
            <VideoOff size={24} color="white" />
          ) : (
            <Video size={24} color="white" />
          )}
        </button>
        <button
          onClick={endCall}
          className="p-3 rounded-full bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300 ease-in-out transform hover:scale-110"
        >
          <PhoneOff size={24} color="white" />
        </button>
      </div>
    </div>
  );
};

export default Call;
