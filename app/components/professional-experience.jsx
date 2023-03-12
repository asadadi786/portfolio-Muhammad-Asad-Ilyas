import React from 'react'

function ProfessionalExperience({ data }) {

    const { title, experiences } = data;
    return (
        <section id="experience" className='mb-10'>
            <h1 className="my-10 text-center font-bold text-4xl">
                {title}
                <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
            </h1>


            <div className='flex flex-col gap-6'>
                {experiences.map(({ role, description, current }) => (
                    <div key={role} className='flex  flex-col rounded-lg '>
                        <span className={`w-full mx-auto border-0 h-1 ${current ? "bg-neutral-400" : "bg-neutral-200"}`} />

                        <div className='p-6 drop-shadow-md'>
                            <h3 className='text-lg font-bold'>{role}</h3>
                            <p className='mt-2 text-base'>{description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ProfessionalExperience