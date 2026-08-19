import { Education, Experience, Language, PersonalDetails } from '@/type'
import { BriefcaseBusiness, GraduationCap, Mail, MapPin, Phone, Scale, Star } from 'lucide-react'
import Image from 'next/image'
import Langues from './Langues'


type Props = {
    personalDetails: PersonalDetails,
    file: File | null,
    theme: string,
    zoom: number,
    experience: Experience[],
    formations: Education[],
    langues: Language[],
}


export default function CvPreview({ personalDetails, file, theme, zoom, experience = [], formations = [], langues = [] }: Props) {

    const getStars = (level: string) => {
  if (level === "Débutant") return 1;
  if (level === "Intermédiaire") return 3;
  if (level === "Avancé") return 5;
  return 0;
};

    return (
        <div className="flex justify-center p-16 w-245 h-350" data-theme={theme} >
            <div className="flex flex-col w-1/3 rounded-lg overflow-hidden" >

                <div className={`h-80 w-50 rounded-full overflow-hidden border-8 border-primary`}>

                    {file && (
                        <Image
                            src={URL.createObjectURL(file)}
                            width={300}
                            height={300}
                            alt="Picture of the author"
                            className='w-full h-full object-cover'
                        />
                    )}


                </div>
                <div className='mt-8'>
                    <h2 className='uppercase font-bold'>Contact</h2>
                    <div className='flex gap-4 mt-4'>
                        <Phone size={20} className='text-primary' />
                        <p>{personalDetails.phone}</p>
                    </div>

                    <div className='flex gap-4 mt-4'>
                        <Mail size={20} className='text-primary' />
                        <p>{personalDetails.email}</p>
                    </div>

                    <div className='flex gap-4 mt-4'>
                        <MapPin size={20} className='text-primary' />
                        <p>{personalDetails.address}</p>
                    </div>

                    <div>

                        <h1 className='uppercase px-2 py-5 text-lg font-bold underline'>Langues</h1>
                        {langues.map((e, index) => (
                            <div className='m-2 flex flex-col gap-4' key={index}>
                                <span className='text-lg'>{e.language}</span>
                                <div className='flex flex-row'>
                                    {Array.from({ length: 5 }).map((_, index) => {
                                        const active = index < (getStars(e.proficiency) )

                                        return (
                                            <Star key={index} size={30} fill={active ? "currentColor" : "none"} stroke='currentColor'
                                                className={active ? "text-yellow-400" : "text-gray-300"}
                                            />
                                        );
                                    })}
                                </div>
                            </div>

                        ))}

                    </div>

                </div>


            </div>

            <div className="flex flex-col w-2/3">
                <div>
                    <h1 className='uppercase mt-2'>{personalDetails.fullName}</h1>
                    <h2 className='uppercase text-6xl mt-4 font-bold text-primary'>{personalDetails.postSeeking}</h2>
                    <p className='mt-4'>{personalDetails.description}</p>
                </div>

                <div>
                    <h1 className='uppercase px-8 py-3 text-lg font-bold underline'>Experiences</h1>

                    <div>
                        {experience.map((e, i) => (
                            <div key={i} className='flex flex-col ml-16'>
                                <div className='flex flex-row gap-10'>
                                    <div>
                                        <p className='p-1 w-8 h-8 rounded-full bg-primary text-white text-center'>{e.id}</p>
                                        <span className='w-5 h-15 bg-primary'></span>
                                    </div>
                                    <div>
                                        <div className='flex '>
                                            <BriefcaseBusiness size={30} />
                                            <h2 key={e.id} className='font-bold text-lg w-full ml-2 uppercase'>{e.jobTitle}</h2>
                                        </div>


                                        <div className='flex flex-col'>

                                            <div className='flex fles-row justify-around p-1 mt-2'>
                                                <p className='border-sm rounded-lg p-1 bg-primary text-white'>{e.companyName}</p>

                                                <div className='flex flex-row gap-4 font-bold text-lg'>
                                                    <p>{e.startDate}</p>
                                                    <p>{e.endDate}</p>
                                                </div>


                                            </div>

                                            <p className='pl-8 text-lg p-1 mb-4'>{e.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>

                <div>
                    <h1 className='uppercase px-8 py-3 text-lg font-bold underline'>Formations</h1>
                    <div>
                        {formations.map((e, i) => (
                            <div className='flex flex-row  ml-16 gap-10' key={i}>
                                <div>
                                    <p className='p-1 w-8 h-8 rounded-full bg-primary text-white text-center'>{e.id}</p>
                                    <span className='w-5 h-15 bg-primary'></span>
                                </div>
                                <div>
                                    <div className='flex '>
                                        <GraduationCap size={30} />
                                        <h2 className='font-bold text-lg w-full ml-2 m-auto uppercase'>{e.degree}</h2>
                                    </div>
                                    <div className='flex fles-row justify-around p-2 mt-2'>
                                        <p className='border-sm rounded-lg p-1 bg-primary text-white'>{e.school}</p>
                                        <div className='flex flex-row gap-4 font-bold text-lg'>
                                            <span>{e.startDate}</span><span>{e.endDate}</span>
                                        </div>
                                    </div>

                                    <p className='pl-8 text-lg p-1 mb-4'>{e.description}</p>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div>

                </div>

            </div>
        </div>
    )
}