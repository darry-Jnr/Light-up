import React from "react";

export default function Hero2() {
  return (
    <div className="bg-black text-white px-[100px]">
      <div className="text-[30px]" style={{ fontFamily: "Open Sans, sans-serif", paddingTop: "100px" }}>
        <h1>This month's pick</h1>
      </div>

      <div className="flex gap-4" style={{  paddingTop: "50px" }}>
        <button className="active:bg-logincolor px-4 py-2"><a>Popular</a></button>
        <button className="active:bg-logincolor px-4 py-2"><a>Latest</a></button>
        <button className="active:bg-logincolor px-4 py-2"><a>Editor’s Pick</a></button>
      </div>

      {/* hr for separation */}
      <hr className="border-t-1 border-grey-100 w-full mx-auto" style={{ paddingBottom: "120px"}}/>
    </div>
  );
}
