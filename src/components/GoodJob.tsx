import { RiRadioButtonFill } from "react-icons/ri"

export function GoodJob() {

    return (<>
        <div className='w-full'>
            <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
                <div className='absolute left-0 w-full h-[30vh] lg:h-40vh bg-black/50 z-10' />
                <div className='absolute w-full bg-cover h-[30vh] lg:h-40vh bg-center z-[1]' style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/projects/goodjob.jpg)` }} />
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                    <h2 className='py-2'>Good Job!</h2>
                    <h3>
                        Publisher: Nintendo
                        Unity3D

                        Android/iOS/WebGL/Steam
                    </h3>
                </div>
            </div>

            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
                <div className='col-span-4'>
                    <p>Project</p>
                    <h2>Overview</h2>
                    <p>
                        Good Job! is published by Nintendo and during the project they helped to guide Paladin Studios to realize this game. My role during this project varied a lot and I worked on different aspects of the game. My first contribution was during the earliest prototype of the game where I implemented some fun physics features like sitting in chairs & pushing those around. Later on I joined the production team and worked together with level designers where we worked in tandem to ideate and implement specific gameplay for levels. Sometimes this resulted in the need for tools or shaders which I also built. During the last phase of the project I took responsibility for implementing the UI of the game which includes both the technical and the visual parts. Based on mockups & preview videos I've realized the vision of the UI artist.
                    </p>
                    <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
                    <button className='px-8 py-2 mt-4'>Code</button>
                </div>
                <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='p-2'>
                        <p>Main Contributions</p>
                        <div>
                            <p><RiRadioButtonFill />UI Animations, Flow & Logic Programming</p>
                            <p><RiRadioButtonFill />Developing tools to be used by Level Designers</p>
                            <p><RiRadioButtonFill />Implementing specific gameplay features & animations</p>
                        </div>
                    </div>
                </div>
                <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='p-2'>
                        <p>Achievements</p>
                        <div>
                            <p><RiRadioButtonFill />Working together with a bigger team and a succesful console launch</p>
                            <p><RiRadioButtonFill />Developing tools to be used by Level Designers</p>
                            <p><RiRadioButtonFill />Implementing specific gameplay features & animations</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        - Working together with a bigger team and a succesful console launch
        - Finding technical issues with the core of the game and implementing solutions that leave the least impact on development
        - Finishing all known UI bugs before leaving the project


        Nintendo E-Shop
    </>)
}

export default GoodJob