"use client"

import Image from "next/image";
import Hero from "./hero";
import { Education, Language, PersonalDetails } from "@/type";
import { useState } from "react";
import { educationsPreset, experiencesPreset, languagesPreset, personalDetailsPreset } from "@/presets";
import PersonalDetailsForm from "./components/PersonalDetailsForm";
import { Eye, RotateCw } from "lucide-react";
import CvPreview from "./components/CvPreview";
import { Experience } from "@/type";
import ExperiencePage from "./components/Experience";
import Formations from "./components/Formations";
import Langues from "./components/Langues";




export default function Home() {

  const [personalDetails, setPersonalDetails] = useState<PersonalDetails>(personalDetailsPreset)
  const [file, setFile] = useState<File | null>(null)
  const [theme, setTheme] = useState("corporate")
  const [zoom, setZoom] = useState(150)

  const [experiences, setExperiences] = useState<Experience[]>(experiencesPreset)

  const [formations, setFormations] = useState<Education[]>(educationsPreset)

  const [langues , setLangues] = useState<Language[] >(languagesPreset)


  const themes = [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
    "dim",
    "nord",
    "sunset",
  ]

  const handlePersonalDetails = () => setPersonalDetails({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    photoUrl: "",
    postSeeking: "",
    description: "",
  })


  const handleExperiences = () => setExperiences([])

  const handleFormations = () => setFormations([])

    const handleLangues = () => setLangues([])




  return (
    <>
      <Hero />

      <div className="flex w-full h-300">

        <div className="w-1/3">
          <div className="mt-10 flex justify-between p-8 " >
            <h2 className="text-xl font-bold italic">CV <span className="text-primary">Builder</span></h2>

            <button className="flex text-sm text-center text-black gap-2 bg-primary p-2 rounded-lg justify-center" >
              Previsualiser <span className="flex justify-center"><Eye /></span>
            </button>
          </div>


          <div className="flex justify-between m-8 w-lg">
            <div className="border border-primary rounded-lg p-2">Qui etes vous ? </div>
            <div className="border bg-primary rounded-lg w-6 h-6 text-black" onClick={handlePersonalDetails} ><RotateCw size={20} /></div>
          </div>

          <PersonalDetailsForm personalDetails={personalDetails} setPersonalDetails={setPersonalDetails} setFile={setFile} />


          <div className="flex justify-between m-8 w-lg">
            <div className="border border-primary rounded-lg p-2">Experience</div>
            <div className="border bg-primary rounded-lg w-6 h-6 text-black" onClick={handleExperiences} ><RotateCw size={20} /></div>

          </div>

          <ExperiencePage experiences={experiences} setExperiences={setExperiences} />

          <div className="flex justify-between m-8 w-lg ">
            <div className="border border-primary rounded-lg p-2">Formations</div>
            <div className="border bg-primary rounded-lg w-6 h-6 text-black" onClick={handleFormations} ><RotateCw size={20} /></div>
          </div>

          <Formations formations={formations} setFormations={setFormations} />


          <div className="flex justify-between m-8 w-lg ">
            <div className="border border-primary rounded-lg p-2">Langues</div>
            <div className="border bg-primary rounded-lg w-6 h-6 text-black" onClick={handleLangues} ><RotateCw size={20} /></div>
          </div>

          <Langues langues={langues} setLangues={setLangues} />


        </div>

        <div className="flex">
          <div>
            <input type="range" min={50} max={200}
              className="range range-xs w-50  text-primary flex mt-10 z-9999 ml-20 absolute"
              value={zoom}
              onChange={(e) => setZoom(Number(e.target.value))}
            />
          </div>

          <div className="flex z-9999 mt-17 absolute ml-20 ">
            <select value={theme} onChange={(e) => setTheme(e.target.value)} className="select">

              {themes.map((themeName) => (
                <option key={themeName} value={themeName}>{themeName}</option>
              )

              )}


            </select>
          </div>

        </div>



        <div
          className="w-2/3 min-h-62.5 bg-cover flex"
          style={{
            backgroundImage: "url('/file.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: `Scale(${zoom / 200})`
          }}
        >
          <div data-theme={theme} >



            <CvPreview personalDetails={personalDetails} file={file} theme={theme} zoom={zoom} experience={experiences} formations={formations} langues={langues} />




          </div>


        </div>


      </div>
    </>

  );
}
