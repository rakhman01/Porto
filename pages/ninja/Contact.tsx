import { useRouter } from 'next/router'
import React from 'react'

const Route = () => {

    const router = useRouter()
    const { dev } = router.query

    const containerStyle = {
        width: '100%',
        height: '280px'
    };

    interface typecenter {
        lat: number,
        lng: number
    }

    const center: typecenter = {
        lat: -3.745,
        lng: -38.523

    }

    return (
        <div>
            <div className='w-full h-screen flex justify-center p-4 bg-background'>
                <div className='w-4/12 h-96 p-4 rounded-md bg-white'>
                    <p>Get In Thouch</p>
                    <form>
                        <div className="flex flex-col justify-around">
                            <label htmlFor="name">Name</label>
                            <input
                                id="name"
                                name="name"
                                placeholder="rakhman"
                                type={"text"}
                                className="outline outline-1 w-full bg-white outline-slate-400 py-2 px-2 mt-2"
                            //   value={formik.values.email}
                            //   onChange={formik.handleChange}
                            />
                        </div>
                        <div className="flex flex-col justify-around">
                            <label htmlFor="email">Email</label>
                            <input
                                id="email"
                                name="email"
                                placeholder="rakhman"
                                type={"email"}
                                className="outline outline-1 w-full bg-white outline-slate-400 py-2 px-2 mt-2"
                            //   value={formik.values.email}
                            //   onChange={formik.handleChange}
                            />
                        </div>
                        <div className="flex flex-col justify-around">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="rakhman"
                                className="outline outline-1 w-full bg-white outline-slate-400 py-2 px-2 mt-2"
                            //   value={formik.values.email}
                            //   onChange={formik.handleChange}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Route