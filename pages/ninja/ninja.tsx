import React, { useEffect } from 'react'

const ninja = () => {

    const api: string = "https://my-json-server.typicode.com/typicode/demo/db"

    const getData = async () => {
        try {
            const result = await fetch(
                api,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    method: "GET"
                }
            )

            console.log(result)
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        getData()
    }, [])

    return (
        <div>ninja</div>
    )
}

export default ninja
