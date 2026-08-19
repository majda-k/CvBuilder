import { PersonalDetails } from "@/type";


type Props = {
    personalDetails: PersonalDetails,
    setPersonalDetails: (pd: PersonalDetails) => void,
    setFile: (file: File | null) => void,
}


export default function PersonalDetailsForm({ personalDetails, setPersonalDetails, setFile }: Props) {

    const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const File = e.target.files?.[0]
        if (File) {
            setFile(File)
        }
    }

    return (
        <div className="w-full h-fit">
            <input placeholder="Nom Complet" value={personalDetails.fullName} onChange={(e) => setPersonalDetails({ ...personalDetails, fullName: e.target.value })} className="border border-file m-8 rounded-lg border-file input input-bordered w-lg" />
            <div className="flex gap-8 mx-8 w-lg">
                <input placeholder="Email" value={personalDetails.email} onChange={(e) => setPersonalDetails({ ...personalDetails, email: e.target.value })} className="border border-file rounded-lg border-file input input-bordered w-lg" />
                <input placeholder="Numero de telephone" value={personalDetails.phone} onChange={(e) => setPersonalDetails({ ...personalDetails, phone: e.target.value })} className="border border-file rounded-lg border-file input input-bordered w-lg" />
            </div>
            <input placeholder="Adresse" value={personalDetails.address} onChange={(e) => setPersonalDetails({ ...personalDetails, address: e.target.value })} className="border border-file m-8 rounded-lg border-file input input-bordered w-lg" />
            <input type="file" accept="image/*" onChange={(handleFile)} className="border border-file  mx-8 rounded-lg file-input file-input-bordered file:bg-primary file:text-white border-primary w-lg" />

            <input placeholder="Post Recherche" value={personalDetails.postSeeking} onChange={(e) => setPersonalDetails({ ...personalDetails, postSeeking: e.target.value })} className="border border-file m-8 rounded-lg border-file input input-bordered w-lg" />
            <textarea placeholder="Description" value={personalDetails.description} onChange={(e) => setPersonalDetails({ ...personalDetails, description: e.target.value })} className="border border-file mx-8 rounded-lg border-file textarea textarea-bordered w-lg h-40 resize-none align-bottom" ></textarea>

        </div>
    )

}