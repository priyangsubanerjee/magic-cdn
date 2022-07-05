import React from "react";
import { useEffect, useState } from "react";

function Loading({ show }) {
  useEffect(() => {
    show
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, []);

  return (
    <>
      {show && (
        <div className="h-screen w-screen fixed top-0 left-0 bg-black/70 z-auto flex items-center justify-center">
          <div className="py-4 px-8 bg-black flex items-center rounded-md">
            <div className="h-6 w-6 border-2 border-slate-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-slate-400 text-sm ml-4">Loading ...</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Loading;
