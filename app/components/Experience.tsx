import { Experience } from "@/type"
import { Dispatch, SetStateAction, useRef } from "react"




type Props = {
    experiences: Experience[],
    setExperiences: Dispatch<SetStateAction<Experience[]>>

}

export default function ExperiencePage({ experiences, setExperiences }: Props) {


    const handleAddExperience = (e: React.MouseEvent<HTMLButtonElement>) => {
        setExperiences((prev) => [
            ...experiences,
            {
                id: String(prev.length + 1),
                jobTitle: "",
                companyName: "",
                startDate: "",
                endDate: "",
                description: "",
            },
        ])
    }

    return (
        <div className="w-full h-fit">

            {experiences.map((exp, index) => (
                <div key={index} className="flex flex-col justify-baseline mt-8">
                    <input placeholder="jobTitle" value={exp.jobTitle} onChange={(e) => setExperiences(prev =>
                        prev.map((item, i) => (i === index ? { ...item, jobTitle: e.target.value } : item)))} className="border border-file mt-4 m-8 rounded-lg border-file input input-bordered w-lg" />
                    <div className="flex gap-8 mx-8 w-lg">
                        <input placeholder="startDate" value={exp.startDate} onChange={(e) => setExperiences(prev => prev.map((item, i) => index === i ? { ...item, startDate: e.target.value } : item))} className="border border-file rounded-lg border-file input input-bordered w-lg" />
                        <input placeholder="endDate" value={exp.endDate} onChange={(e) => setExperiences(prev => prev.map((item, i) => index === i ? { ...item, endDate: e.target.value } : item))} className="border border-file rounded-lg border-file input input-bordered w-lg" />
                    </div>
                    <input placeholder="companyname" value={exp.companyName} onChange={(e) => setExperiences(prev => prev.map((item, i) => index === i ? { ...item, companyName: e.target.value } : item))} className="border border-file m-8 rounded-lg border-file input input-bordered w-lg" />
                    <textarea placeholder="Description" value={exp.description} onChange={(e) => setExperiences(prev => prev.map((item, i) => index === i ? { ...item, description: e.target.value } : item))} className="border border-file mx-8 rounded-lg border-file textarea textarea-bordered w-lg h-20 resize-none align-bottom" ></textarea>

                    <hr className=" w-lg  ml-8 mt-8 text-primary"></hr>
                </div>


            ))}

            <button className="m-8 flex  bg-primary text-white p-2 rounded-lg" onClick={handleAddExperience}>Ajouter</button>
        </div>
    )
}