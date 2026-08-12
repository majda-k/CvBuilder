import Image from "next/image"

export default function Hero() {
    return (
        <div className="hero bg-base-200 min-h-screen lg:hidden">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-2xl font-bold">Desole, le CV Builder est uniquement accessible sur ordinateur.</h1>
                    <img src="/sad-sorry.png" className="mx-auto mt-4" />
                    <p className="py-6">
                        Pour creer et personaliser votre Cv, veuillez utiliser un ordinateur. Nous vous remercions de votre comprehension.
                    </p>
                    
                </div>
            </div>
        </div>
    )
}