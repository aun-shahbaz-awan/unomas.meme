const VideoSection = () => {
  return (
    <div className=" max-w-7xl mx-auto px-6 md:px-8  flex flex-col md:flex-row items-center p-6 rounded mt-10">
      <video
        src="/path-to-your-video/video.mp4"
        controls
        className="w-full md:w-1/2 rounded shadow-md"
      ></video>
      <div className="md:ml-6 mt-6 md:mt-0 text-center md:text-left">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">
          How our wives view us
        </h2>
        <p className="text-gray-600">Let's be honest, this is us.</p>
      </div>
    </div>
  );
};

export default VideoSection;
