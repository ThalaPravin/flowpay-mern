import React, { use } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";

export default function SignUp() {
  const [name, setName] = useState("");
  const [mobno, setMobno] = useState("");
  const [pass, setPass] = useState("");
  const [confpass, setConfpass] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [confshowPass, setConfshowPass] = useState(false);
  // const [passMatch, setPassMatch]= useState(true)

  function handleSubmit(){
    
  }

  return (
    <>
      <div className="bg-white w-full max-h-screen mt-15">
        <Card className="max-w-full  max-h-screen mx-40 my-10 p-10 shadow-2xl  ">
          <CardContent className="flex flex-row justify-center ">
            <form onSubmit={handleSubmit} className="w-1/2 mr-3 space-y-4">
              <h1 className="font-bold text-4xl text-center">Create Account</h1>
              <hr />
              <div className="space-y-2 mt-7">
                <label>Name </label>
                <Input
                  id="name"
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter Your Name"
                />
              </div>

              <div>
                <label htmlFor="">Mobile Number </label>
                <Input
                  id="name"
                  type="number"
                  placeholder="Enter Your Mobile No."
                  onChange={(e) => setMobno(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="">Password</label>
                <div className="flex">
                  <Input
                    id="name"
                    type={showPass ? "text" : "password"}
                    placeholder="Enter Security Password"
                    onChange={(e) => setPass(e.target.value)}
                  />

                  <div
                    className="relative right-8 bg-gray-900 text-white px-2  cursor-pointer z-10"
                    onClick={() => setShowPass(!showPass)}
                  >
                    {showPass ? (
                      <EyeIcon className="mt-1" />
                    ) : (
                      <EyeOffIcon className="mt-1" />
                    )}
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor=""> Confirm Password</label>
                <div className="flex">
                  <Input
                    id="name"
                    type={confshowPass ? "text" : "password"}
                    placeholder="Enter Security Password"
                    onChange={(e) => setConfpass(e.target.value)}
                  />
                  <div
                    className="relative right-8 bg-gray-900 text-white px-2  cursor-pointer z-10"
                    onClick={() => setConfshowPass(!confshowPass)}
                  >
                    {confshowPass ? (
                      <EyeIcon className="mt-1" />
                    ) : (
                      <EyeOffIcon className="mt-1" />
                    )}
                  </div>
                </div>
              </div>

              <Button type="submit" className="w-full mt-4">
                Sign Up
              </Button>

              <p className="text-center mt-4">
                Already Have Account{" "}
                <Link to="/login" className="text-black underline">
                  Log In
                </Link>
              </p>
            </form>

            <div className="w-1/2 z-100 ml-3 bg-black rounded-2xl "> </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
