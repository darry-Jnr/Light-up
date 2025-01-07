import React, { useState } from "react";

export default function Hero3() {
  // Array of video data
  const data = [
    {
      id: 1,
      Imageurl: "https://preview.colorlib.com/theme/egames/img/bg-img/14.jpg",
      title: "Assemble your squad and join the battle",
      videoUrl: "https://www.youtube.com/embed/0LSTt8o5nlk"
    },
    {
      id: 2,
      Imageurl: "https://preview.colorlib.com/theme/egames/img/bg-img/15.jpg",
      title: "Prepare for the ultimate showdown",
      videoUrl: "https://www.youtube.com/embed/tgbNymZ7vqY"
    },
    {
      id: 3,
      Imageurl: "https://preview.colorlib.com/theme/egames/img/bg-img/16.jpg",
      title: "Victory is within reach, fight for it",
      videoUrl: "https://www.youtube.com/embed/3JZ_D3ELwOQ"
    },
    {
      id: 4,
      Imageurl: "https://preview.colorlib.com/theme/egames/img/bg-img/17.jpg",
      title: "Unleash your power, dominate the arena",
      videoUrl: "https://www.youtube.com/embed/l6rfoMOcBcc"
    },
    {
      id: 5,
      Imageurl: "https://preview.colorlib.com/theme/egames/img/bg-img/18.jpg",
      title: "Battle your way to the top",
      videoUrl: "https://www.youtube.com/embed/2Vv-BfVoq4g"
    },
    {
      id: 6,
      Imageurl: "https://preview.colorlib.com/theme/egames/img/bg-img/19.jpg",
      title: "Join forces with allies, crush your foes",
      videoUrl: "https://www.youtube.com/embed/Fj-MQU1yQyk"
    },
    {
      id: 7,
      Imageurl: "https://preview.colorlib.com/theme/egames/img/bg-img/20.jpg",
      title: "Conquer your enemies, earn your glory",
      videoUrl: "https://www.youtube.com/embed/ScMzIvxBSi4"
    },
    {
      id: 8,
      Imageurl: "https://preview.colorlib.com/theme/egames/img/bg-img/21.jpg",
      title: "Rise to the challenge, be the champion",
      videoUrl: "https://www.youtube.com/embed/wKJ9KzGQq0w"
    }
  ];

  // State to track the selected video (set the default to the first video)
  const [selectedVideo, setSelectedVideo] = useState(data[0].videoUrl);

  return (
    <div className="flex bg-white px-[100px] py-10 space-x-1">
      {/* Left Section: Scrollable Buttons */}
      <div className="flex flex-col h-[520px] overflow-y-auto scrollbar-thin hover:scrollbar-thumb-green-700">
        {data.map((item) => (
          <div
            className="flex gap-2 border-[0.7px] border-white bg-black hover:bg-logincolor text-white px-3 py-5 cursor-pointer"
            key={item.id}
            onClick={() => setSelectedVideo(item.videoUrl)} // Set the selected video URL
          >
            <img src={item.Imageurl} alt={item.title} className="w-16 h-16 object-cover" />
            {item.title}
          </div>
        ))}
      </div>

      {/* Right Section: Video */}
      <div className="w-2/3">
        {selectedVideo ? (
          <iframe
            width="100%"
            height="520"
            src={selectedVideo}
            title="Video Player"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <p className="text-center text-white">Select a video to view</p>
        )}
      </div>
    </div>
  );
}
