import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function SignUp() {
  return (
    <>
      <div className="bg-white w-full max-h-screen mt-20">
        <Card className="max-w-full  max-h-screen mx-40 my-10 p-10 shadow-2xl py ">
          <CardContent className="flex flex-row justify-center ">
            <div className="w-1/2 mr-3 space-y-4">
                <h1 className="font-bold text-4xl text-center">
                    Create Account
                </h1>
                <hr />
              <div className="space-y-2 mt-7">
                <label >Name </label>
                <Input id="name" type="text" placeholder="Enter Your Name" />
              </div>

              <div>
                <label htmlFor="">Mobile Number </label>
                <Input id="name" type="number" placeholder="Enter Your Mobile No." />

              </div>

              <div>
                <label htmlFor="">Password</label>
                <Input id="name" type="text" placeholder="Enter Security Password" />

              </div>
              <div>
                <label htmlFor=""> Confirm Password</label>
                <Input id="name" type="text" placeholder="Enter Security Password" />

              </div>

              <Button type="submit" className="w-full mt-4">
                Sign Up
              </Button>
            </div>

            <div className="w-1/2 z-100 ml-3 bg-black rounded-2xl "> </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
