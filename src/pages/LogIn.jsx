import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function LogIn() {
    return (
        <>
            <div className="bg-white w-full max-h-screen mt-25">
                <Card className="max-w-full max-h-screen mx-40 my-10 p-10 shadow-2xl">
                    <CardContent className="flex flex-row justify-center">
                        <div className="w-1/2 mr-3 space-y-4">
                            <h1 className="font-bold text-4xl text-center">Log In</h1>
                            <hr />
                            <div className="space-y-2 mt-7">
                                <label>Mobile Number</label>
                                <Input id="mobile" type="number" placeholder="Enter Your Mobile No." />
                            </div>

                            <div>
                                <label htmlFor="password">Password</label>
                                <Input id="password" type="password" placeholder="Enter Your Password" />
                            </div>

                            <Button type="submit" className="w-full mt-4">
                                Log In
                            </Button>

                            <p className="text-center mt-4">
                                Not have an account?{" "}
                                <Link to="/signup" className="text-black underline">
                                    Sign Up
                                </Link>
                            </p>
                        </div>

                        <div className="w-1/2 z-100 ml-3 bg-black rounded-2xl"></div>
                    </CardContent>
                </Card>
            </div>
        </>
    );
}