import { Education } from "@/type"
import { Dispatch, HTMLElementType, SetStateAction } from "react"

type Props = {
    formations: Education[],
    setFormations: Dispatch<SetStateAction<Education[]>>
}


export default function Formations({ formations, setFormations }: Props) {

    const handleAddFormation = (e: React.MouseEvent<HTMLButtonElement>) => {
        setFormations((prev) => [
            ...formations,
            {
                id: String(prev.length+1),
                school: "",
                degree: "",
                startDate: "",
                endDate: "",
                description: "",

            }
        ])
    }

    return (


        <div className="h-fit w-full">
            {formations.map((item, index) => (
                <div key={index} className="flex flex-col justify-baseline m-8 gap-8 w-lg">
                    <div className="flex gap-4 ">
                        <input type="text" placeholder="Nom de l'ecole" className="input" value={item.school} onChange={(e) => setFormations((prev) => prev.map((formation, i) => index === i ? { ...formation, school: e.target.value } : formation))} />
                        <input type="text" placeholder="Diplome" className="input" value={item.degree} onChange={(e) => setFormations((prev) => prev.map((formation, i) => index === i ? { ...formation, degree: e.target.value } : formation))} />
                    </div>
                    <div className="flex gap-4">
                        <input type="string" placeholder="Date de debut" className="input" value={item.startDate} onChange={(e) => setFormations((prev) => prev.map((formation, i) => index === i ? { ...formation, startDate: e.target.value } : formation))} />
                        <input type="string" placeholder="Date de fin" className="input" value={item.endDate} onChange={(e) => setFormations((prev) => prev.map((formation, i) => index === i ? { ...formation, endDate: e.target.value } : formation))} />
                    </div>
                    <textarea placeholder="Descripton" className="w-full textarea  flex gap-4" value={item.description} onChange={(e) => setFormations((prev) => prev.map((formation, i) => index === i ? { ...formation, description: e.target.value } : formation))}></textarea>
                    <hr className="text-primary" />
                    <button className="flex justify-start p-2 bg-primary text-white rounded-lg w-fit" onClick={handleAddFormation}>Ajouter</button>

                </div>
            ))}

        </div>
    )
}