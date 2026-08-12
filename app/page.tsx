"use client"

import Image from "next/image";
import Hero from "./hero";
import { PersonalDetails } from "@/type";
import { useState } from "react";


export default function Home() {

  const[personalDetailsForm , setPersonalDetailsForm] = useState<PersonalDetails | null >(null)
  const[file , setFile] = useState(null)


  return (
    <>
      <Hero />

      <div className="flex w-full min-h-screen">
        <div className="w-1/3 bg-base-100">
          section1
          <button className="btn btn-secondary">Primary</button>
        </div>
        <div
          className="w-2/3 min-h-62.5"
          style={{
            backgroundImage: "url('/file.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          section2
        </div>
      </div>
    </>

  );
}
