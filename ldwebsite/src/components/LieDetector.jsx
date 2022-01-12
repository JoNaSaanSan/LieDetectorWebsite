import Webcam from "react-webcam";
import React, { useState, useEffect, useRef, useCallback } from 'react';
import useServer from "../hooks/useServer";
import './styles/liedetector.scss';

const LieDetector = ({ setTol }) => {
    const webcamRef = useRef(null);
    const mediaRecorderRef = useRef(null);
    const [capturing, setCapturing] = useState(false);
    const [recordedChunks, setRecordedChunks] = useState([]);
    const [video, setVideo] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const res = useServer(video);

    const videoConstraints = {
        facingMode: "user"
    };

    const handleDataAvailable = useCallback(
        ({ data }) => {
            if (data.size > 0) {
                setRecordedChunks((prev) => prev.concat(data));
            }
        },
        [setRecordedChunks]
    );

    useEffect(() => {
        if (!capturing) {
            if (recordedChunks.length > 0) {
                const blob = new Blob(recordedChunks, {
                    type: "video/mp4"
                });
                setVideo(blob);
                setRecordedChunks([]);
            }
        }
    }, [recordedChunks])

    const handleStopCaptureClick = useCallback(() => {
        mediaRecorderRef.current.stop();
        setCapturing(false);
    }, [mediaRecorderRef, setCapturing]);

    const handleStartCaptureClick = useCallback(() => {
        setCapturing(true);
        mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
            mimeType: "video/webm"
        });
        mediaRecorderRef.current.addEventListener(
            "dataavailable",
            handleDataAvailable
        );
        mediaRecorderRef.current.start();
        const timer = setTimeout(() => {
            handleStopCaptureClick()
        }, 4000);
        return () => clearTimeout(timer);

    }, [webcamRef, setCapturing, mediaRecorderRef, handleDataAvailable, handleStopCaptureClick]);

    return (
        <div className="container">
            {!video ? (<div className="content">
                <Webcam audio={false} ref={webcamRef} videoConstraints={videoConstraints} height={288} width={384} className="webcam" />
                {!capturing ? (

                    <button className="button-49" onClick={handleStartCaptureClick}>Los geht's!</button>
                ) : (
                    <button className="button-49" onClick={handleStopCaptureClick}>Stopp!</button>
                )} </div>)
                : (<div className="content">
                    {!res?.loading ? (<><div className="textbox">{res?.response?.text}</div><button className="button-49" onClick={() => setVideo(null)}>Nochmal</button></>) : (<div className="textbox">Loading...</div>)}
                </div>)}
        </div>
    );
}

export default LieDetector;