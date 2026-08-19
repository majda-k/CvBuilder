import { Language } from "@/type"
import { Dispatch, SetStateAction } from "react"


type Props = {
    langues: Language[],
    setLangues: Dispatch<SetStateAction<Language[]>>
}


export default function Langues({ langues, setLangues }: Props) {


const handleAddLangue= (e : React.MouseEvent<HTMLButtonElement>) => {
        setLangues((prev)=> [
            ...langues , 
            {
                id : "",
                language : "",
                proficiency:"",
            }
        ])
}


    return (
        <div className="w-full h-full">
            {langues.map((e, index) => (
                <div key={index} className="flex flex-row justify-baseline m-8 gap-4 w-lg">
                    <input placeholder="Langue" className="input" value={e.language} onChange={(e) => setLangues((prev) => prev.map((langue, i) => index === i ? { ...langue, language: e.target.value } : langue))} />
                    <select className="input cursor-pointer" value={e.proficiency} onChange={(e) => setLangues((prev) => prev.map((langue, i) => index === i ? { ...langue, proficiency: e.target.value } : langue))}>
                        <option value="Débutant">Débutant</option>
                        <option value="Intermédiaire">Intermédiaire</option>
                        <option value="Avancé">Avancé</option>
                    </select>
                </div>

            ))}

                 <button className="flex justify-start p-2 m-8 bg-primary text-white rounded-lg w-fit" onClick={handleAddLangue}>Ajouter</button>
        </div>
    )
}