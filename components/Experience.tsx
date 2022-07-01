import React from 'react'

const Experience = () => {



    interface types {
        title: string,
        company: string,
        date: string,
        descriptions: Array<string>,
    }

    const experience: types[] = [
        {
            title: "Front End",
            company: "PT Carakan",
            date: "February 2021 - Maret 2022",
            descriptions: [
                "I am responsible to create user interface responsive and functional",
                "I worked as a team to create a project",
                "I develop mobile or web application from design"
            ]
        },
        {
            title: "Front End",
            company: "PT Omah Teknologi Indonesia",
            date: "April 2022 - Present",
            descriptions: [
                "I am responsible to create user interface responsive and functional",
                "I worked as a team to create a project",
                "I develop web application from design"
            ]
        },
    ]

    return (
        <div className="w-full h-screen items-center justify-center flex mt-4">
            <div className="w-full h-3/4 flex flex-col justify-evenly items-center font-roboto ">
                <h1 className="font-extrabold text-4xl text-yellow-300">Experience</h1>
                {experience.map((val) => (
                    <>
                        <div className="w-1/2 h-3/4 text-center flex flex-col items-center justify-center my-4">
                            <h2 className="font-bold text-3xl text-white mt-2">{val.title}</h2>
                            <h3 className="font-semibold text-font-semibold text-xl text-yellow-300 px-2 my-2 bg-gray-600 rounded-xl ">{val.company}</h3>
                            <h4 className='font-semibold text-yellow-100 my-2'>{val.date}</h4>
                            <div className="flex flex-col justify-around place-items-start w-full h-1/2 font-normal text-lg text-gray-400">
                                {val.descriptions.map((val) => (
                                    <p>
                                        {val}
                                    </p>

                                ))}
                            </div>
                        </div>
                    </>
                ))}
                <div className="w-24 h-8 md:h-10 md:w-32 mt-4">
                    <button className="w-full h-full text-center bg-yellow-300 font-bold rounded-2xl text-base md:text-lg">Hire Me</button>
                </div>
            </div>
        </div>
    )
}

export default Experience