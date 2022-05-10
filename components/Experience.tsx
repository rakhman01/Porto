import React from 'react'

const Experience = () => {

    interface types {
        title: string,
        company: string,
        date: string,
        // descriptions: string[] = [],
    }

    const experience: types[] = [
        {
            title: "Front End",
            company: "PT Carakan",
            date: "February 2021 - Maret 2022",
            // descriptions:[
            //     des1: "I am responsible to create user interface responsive and functional",
            //     des2: "I worked as a team to create a project",
            //     des3: "I develop mobile or web application from design"
            // ]}
        }]

    return (
        <div className="w-full h-screen items-center justify-center flex">
            <div className="w-full h-3/4 flex flex-col justify-evenly items-center font-roboto ">
                <h1 className="font-extrabold text-4xl">Experience</h1>
                <div className="w-1/2 h-3/4 text-center flex flex-col items-center justify-center">
                    <h2 className="font-bold text-3xl">Front End</h2>
                    <h3 className="font-semibold text-xl">CARAKAN</h3>
                    <h4>February 2021 - Maret 2022</h4>
                    <div className="flex flex-col justify-around place-items-start w-full h-1/2 font-semibold text-xl">
                        <p>
                            I am responsible to create user interface responsive and
                            functional
                        </p>
                        <p>I worked as a team to create a project</p>
                        <p>I develop mobile or web application from design</p>
                    </div>
                </div>
                <div>
                    <h2 className="font-bold p-4 border-2 bg-green-700 rounded-md">
                        More Info
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default Experience