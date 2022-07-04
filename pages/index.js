import axios from "axios";
import * as React from "react";
import { useState, useEffect } from "react";
import { Button, Paper, TextField } from "@mui/material";

export default function Home() {
  const [url, setUrl] = useState("");
  const uploadPhoto = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("data", file);

    const upload = await axios.post("/api/hello", formData);
    setUrl(`${window.location}api/v1/${upload.data.Key}`);
  };

  return (
    <div className="h-screen w-full bg-slate-50 overflow-y-auto flex items-center justify-center">
      <div className="w-[500px] h-[550px] borer rounded-md bg-white shadow-2xl shadow-slate-200">
        <div className="p-3 flex items-center">
          <div className="flex items-center justify-center">
            <img src="/logo.png" className="w-10" alt="" />
            <div className="ml-2">
              <p className="font-semibold text-sm">magic cdn</p>
              <small className="text-xs">Lorem ipsum dolor sit amet.</small>
            </div>
          </div>
        </div>
        <div className="bg-slate-50 p-3 flex items-center justify-center">
          <p className="text-xs text-slate-700">
            👋 We are giving free access to premium offers →
          </p>
        </div>
        <div className="px-6 mt-7">
          <h1 className="text-xl font-bold text-slate-700">Sign in</h1>
          <p className="text-xs text-slate-500 mt-1">
            Dont have an account? Sign up
          </p>
        </div>
        <div className="mt-8 px-6">
          <TextField type="email" label="Enter email" size="medium" fullWidth />
          <div className="mt-6">
            <TextField
              type="password"
              label="Enter password"
              size="medium"
              fullWidth
            />
          </div>
          <button className="p-3 w-full rounded mt-8 text-sm bg-slate-800 hover:bg-slate-900 text-white text-center font-medium">
            Sign in
          </button>
          <p className="text-center text-xs text-gray-500 mt-8">
            Forgot your password?
          </p>
        </div>
      </div>
    </div>
  );
}
