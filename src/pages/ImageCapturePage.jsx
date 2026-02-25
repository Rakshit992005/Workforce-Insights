import React, { useRef, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import NavBar from "../components/NavBar";

const ImageCapturePage = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { item } = location.state || { item: ["Employee"] };

  const [isStreaming, setIsStreaming] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    startCamera();
    return () => stopCamera();
  }, []);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: "user",
          width: { ideal: 1280 },
          height: { ideal: 720 },
        },
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setIsStreaming(true);
      }
    } catch (err) {
      console.error("Error accessing camera:", err);
      setError(
        "Could not access camera. Please ensure you have given permission.",
      );
    }
  };

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = videoRef.current.srcObject.getTracks();
      tracks.forEach((track) => track.stop());
    }
  };

  const handleCapture = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (video && canvas) {
      const context = canvas.getContext("2d");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      const dataUrl = canvas.toDataURL("image/jpeg");
      setCapturedImage(dataUrl);
      stopCamera();
    }
  };

  const handleRetake = () => {
    setCapturedImage(null);
    startCamera();
  };

  const handleConfirm = () => {
    navigate("/details", { state: { item, capturedImage } });
  };

  return (
    <div className="min-h-screen bg-bg-page animate-fade-in pb-20">
      <NavBar />

      <div className="max-w-4xl mx-auto px-6 pt-8">
        {/* Back Link */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-text-muted hover:text-primary mb-8 transition-colors group cursor-pointer"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform group-hover:-translate-x-1"
          >
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          <span className="font-medium">Back to details</span>
        </button>

        <div className="bg-white rounded-3xl shadow-premium border border-border overflow-hidden animate-slide-up">
          <div className="p-8 md:p-12 text-center">
            <h2 className="text-3xl font-extrabold text-text-main mb-2 tracking-tight">
              {capturedImage ? "Review Capture" : "Capture Photo"}
            </h2>
            <p className="text-text-muted font-medium mb-8">
              {capturedImage
                ? "Please verify the photo quality before finalizing."
                : `Position yourself within the frame for ${item[0]}'s profile.`}
            </p>

            <div className="relative max-w-2xl mx-auto aspect-video bg-slate-900 rounded-2xl overflow-hidden shadow-vibrant border-4 border-white mb-8 group">
              {!capturedImage ? (
                <>
                  <video
                    ref={videoRef}
                    autoPlay
                    playsInline
                    className="w-full h-full object-cover"
                  />
                  {isStreaming && (
                    <div className="absolute inset-0 border-2 border-white/20 pointer-events-none">
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-dashed border-primary/50 rounded-full animate-pulse"></div>
                    </div>
                  )}
                  {!isStreaming && !error && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-10 h-10 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
                    </div>
                  )}
                  {error && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white bg-slate-800">
                      <svg
                        width="48"
                        height="48"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-red-400 mb-4"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="8" x2="12" y2="12" />
                        <line x1="12" y1="16" x2="12.01" y2="16" />
                      </svg>
                      <p className="font-semibold">{error}</p>
                    </div>
                  )}
                </>
              ) : (
                <img
                  src={capturedImage}
                  className="w-full h-full object-cover animate-image-pop"
                  alt="Captured"
                />
              )}

              {/* Visual Feedback for Capture */}
              <canvas ref={canvasRef} className="hidden" />
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {!capturedImage ? (
                <button
                  onClick={handleCapture}
                  disabled={!isStreaming}
                  className="bg-primary hover:bg-primary-hover disabled:opacity-50 disabled:cursor-not-allowed text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-vibrant hover:shadow-lg active:scale-95 flex items-center gap-3 cursor-pointer"
                >
                  <div className="w-4 h-4 rounded-full bg-white animate-pulse"></div>
                  Capture Photo
                </button>
              ) : (
                <>
                  <button
                    onClick={handleRetake}
                    className="bg-white hover:bg-slate-50 text-text-main border border-border px-8 py-4 rounded-2xl font-bold transition-all hover:shadow-md active:scale-95 flex items-center gap-2 cursor-pointer"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="1 4 1 10 7 10" />
                      <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
                    </svg>
                    Retake Photo
                  </button>
                  <button
                    onClick={handleConfirm}
                    className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-vibrant hover:shadow-lg active:scale-95 flex items-center gap-2 cursor-pointer"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    Confirm & Save
                  </button>
                </>
              )}
            </div>
          </div>

          <div className="bg-slate-50 border-t border-border p-6 flex items-center justify-center gap-6">
            <div className="flex items-center gap-2 text-xs font-bold text-text-muted uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Live System Ready
            </div>
            <div className="h-4 w-[1px] bg-border"></div>
            <p className="text-xs text-text-muted font-medium">
              Photos are processed securely and locally.
            </p>
          </div>
        </div>

        <p className="text-center mt-8 text-text-muted text-sm font-medium">
          © 2026 Workforce Insights. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default ImageCapturePage;
