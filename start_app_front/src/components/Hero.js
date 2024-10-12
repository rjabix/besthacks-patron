export default function Hero(setShowApp, setPrompt) {
    return (
        <div className='h-screen grid grid-cols-2' style={{backgroundImage: `url(/z19.jpg)`, backgroundSize: 'cover'}}>

            <div className='w-full h-full bg-hero bg-cover bg-center flex justify-center items-center flex-col'>
                <h1 className='text-white text-7xl font-semibold' style={{letterSpacing: '2px'}}>patron.</h1>

                <h1 className='text-white text-3xl font-semibold mt-10'>powerful search for <br/> modern days.</h1>
            </div>

            <div className='w-full h-full bg-hero bg-cover bg-center flex flex-col justify-center items-center'>
                <h1 className='text-gray-400 text-5xl italic'>Search</h1>
                <div className='h-[20px]'/>
                <textarea id='hero-area'
                    className='w-[500px] h-[350px] border-2 border-gray-950 bg-transparent text-gray-300 rounded-xl p-2 resize-none'
                    placeholder='Enter your prompt'/>
                <div className='mt-6 w-[500px] justify-around flex'>
                    <button className='bg-black text-white p-2 rounded-xl w-[200px]'>Clear</button>
                    <button className='bg-black text-white p-2 rounded-xl w-[200px]'
                            onClick={() => {
                                setShowApp(true);
                                setPrompt=document.getElementById('hero-area').value;}
                            }>Submit
                    </button>
                </div>

            </div>
        </div>
    )
}