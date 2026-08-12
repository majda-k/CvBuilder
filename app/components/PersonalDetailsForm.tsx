import { PersonalDetails } from "@/type";
import { Eye } from "lucide-react";

  type Props ={
    personalDetails : PersonalDetails,
    setPersonalDetails : (pd:PersonalDetails) => void,
    setFile : (file : File | null) => void,
  }


 export default function PersonalDetailsForm({personalDetails , setPersonalDetails ,setFile } : Props){

    return (
        <>
        <div>
            <h2>Cv <span>Builder</span></h2>

            <button>
                Previsualiser <span><Eye /></span>

            </button>
        </div>
        </>
    )

 }