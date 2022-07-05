import React from "react";
import { Button, Paper, TextField } from "@mui/material";
import Link from "next/link";

function signup() {
  return (
    <div className="h-screen w-full bg-slate-50 flex items-center justify-center">
      <div className="w-[500px] borer rounded-md bg-white shadow-2xl shadow-slate-200">
        <div className="p-3 flex items-center">
          <div className="flex items-center justify-center">
            <img src="/logo.png" className="w-10" alt="" />
            <div className="ml-2">
              <p className="font-semibold text-sm">magic CDN</p>
              <small className="text-xs text-gray-500">
                Lorem ipsum dolor sit amet.
              </small>
            </div>
          </div>
        </div>
        <div className="bg-slate-50 p-3 flex items-center justify-center">
          <p className="text-xs text-slate-700">
            👋 We are giving free access to premium offers →
          </p>
        </div>
        <div className="px-6 mt-7">
          <h1 className="text-xl font-bold text-slate-700">Sign up</h1>
          <p className="text-xs text-slate-500 mt-1">
            Already having an account?{" "}
            <Link href="/">
              <a>Sign in</a>
            </Link>
          </p>
        </div>
        <div className="mt-8 px-6">
          <TextField
            type="email"
            label="Enter your email"
            size="medium"
            fullWidth
          />
          <div className="mt-6">
            <TextField
              type="password"
              label="Set a strong password"
              size="medium"
              fullWidth
            />
          </div>
          <button className="p-3 w-full rounded mt-8 text-sm bg-slate-800 hover:bg-slate-900 text-white text-center font-medium">
            Sign Up
          </button>
          <p className="text-center text-xs text-gray-500 my-8">
            Having trouble?
          </p>
        </div>
      </div>
    </div>
  );
}

export default signup;
