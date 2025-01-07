import React from "react";

export default function Footer() {
  return (
    <>
      <hr className="border-t-2 border-white-500" />
      <div className="flex gap-9 px-[100px] bg-black pt-14">
        <div className="max-w-xs">
          <div className="flex mb-8">
            <img
              src="https://preview.colorlib.com/theme/egames/img/core-img/logo2.png"
              alt="Logo"
            />
          </div>
          <p className="break-words text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            velit arcu, scelerisque dignissim massa quis, mattis facilisis erat.
            Aliquam erat volutpat. Sed efficitur diam ut interdum ultricies.
          </p>
        </div>

        <div>
          <h1 className="text-2xl text-white mb-8">Game Reviews</h1>
          <ul className="text-gray-400 flex-col space-y-2">
            <li>Doom</li>
            <li>Grand Theft Auto</li>
            <li>Bloodborne</li>
            <li>God of War</li>
            <li>Persona 5</li>
          </ul>
        </div>

        <div>
          <h1 className="text-2xl text-white mb-8">Useful Links</h1>
          <ul className="text-gray-400 flex-col space-y-2">
            <li>Testimonials</li>
            <li>Reviews</li>
            <li>New Games</li>
            <li>Forum</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h1 className="text-2xl text-white mb-8">What's New</h1>
          <ul className="text-gray-400 flex-col space-y-2">
            <li>Doom</li>
            <li>Grand Theft Auto</li>
            <li>Bloodborne</li>
            <li>God of War</li>
            <li>Persona 5</li>
          </ul>
        </div>
      </div>

      <div className="flex justify-between px-[100px] bg-black pt-14">
        <div>
          <span className="text-gray-400">
            Copyright ©2025 All rights reserved | This template is made with
            &hearts; by Oluwadara
          </span>
        </div>
        <div>
          <ul className="text-gray-400 flex gap-5">
            <li>Home</li>
            <li>Game</li>
            <li>Articles</li>
            <li>Reviews</li>
          </ul>
        </div>
      </div>
    </>
  );
}
