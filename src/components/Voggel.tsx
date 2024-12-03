import { RiRadioButtonFill } from "react-icons/ri"

export function GoodJob() {

    return (<>
        <div className='w-full'>
            <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
                <div className='absolute left-0 w-full h-[30vh] lg:h-40vh bg-black/50 z-10' />
                <div className='absolute w-full bg-cover h-[30vh] lg:h-40vh bg-center z-[1]' style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/projects/voggel.png)` }} >
                    <video className='object-cover' playsInline muted loop autoPlay={true} src={`${process.env.PUBLIC_URL}/assets/projects/voggel.mp4`} />
                </div>
                <div className='absolute top-[70%] lg:top-[50%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                    <h2 className='py-2'>Voggel</h2>
                    <h3>
                        Publisher: Soedesco
                        <br />
                        Engine: Unity3D
                    </h3>
                </div>
            </div>

            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
                <div className='col-span-3'>
                    <p>Project</p>
                    <h2>Overview</h2>
                    <p>
                        I worked on Voggel with a 4 fellow students under our own company named RockitBit. In Voggel you steal flocks of birds from you friends to weaken them and send them flying, much like Smash Brothers.

                        We didn't continue the development as everyone wanted to go separate ways after finishing University, however we did go to events to showcase our game and even went through the whole process of negotiating with a publisher.                    </p>
                </div>
                <div className='col-span-4 md:col-span-1 bg-bg-300 shadow-square p-4'>
                    <div className='p-2'>
                        <h4>Contributions</h4>
                        <div>
                            <p className='flex items-center my-2'><RiRadioButtonFill className='min-w-[10px] max-w-[10px] mr-1' />Gameplay & Design</p>
                            <p className='flex items-center my-2'><RiRadioButtonFill className='min-w-[10px] max-w-[10px] mr-1' />Shaders</p>
                            <p className='flex items-center my-2'><RiRadioButtonFill className='min-w-[10px] max-w-[10px] mr-1' />3D / UI Animations</p>
                        </div>
                    </div>
                </div>
                <div className='col-span-4 md:col-span-1 bg-bg-300 shadow-square p-4'>
                    <div className='p-2'>
                        <h4>Achievements</h4>
                        <div>
                            <p className='flex items-center my-2'><RiRadioButtonFill className='min-w-[10px] max-w-[10px] mr-1' />Showcasing at multiple events</p>
                            <p className='flex items-center my-2'><RiRadioButtonFill className='min-w-[10px] max-w-[10px] mr-1' />Signing publishing contract</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default GoodJob