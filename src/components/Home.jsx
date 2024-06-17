import React from 'react'

const Home = () => {
  return (
    <div>
        <main className="p-4">
            <section className="text-center my-8">
                <h2 className="text-2xl font-semibold">Find the Best Health Specialists</h2>
                <p className="mt-2">Search and connect with top-rated health professionals.</p>
            </section>
            <section className="my-8">
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden md:max-w-2xl">
                    <div className="md:flex">
                    <div className="md:flex-shrink-0">
                        <img className="h-48 w-full object-cover md:w-48" src="https://via.placeholder.com/150" alt="A doctor"/>
                    </div>
                    <div className="p-8">
                        <h3 className="uppercase tracking-wide text-sm text-slate-500 font-semibold">Specialist</h3>
                        <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Dr. John Doe</a>
                        <p className="mt-2 text-gray-500">Experienced cardiologist with over 20 years of experience in providing top-notch medical care.</p>
                    </div>
                    </div>
                </div>
            </section>
            <section className="my-8 text-center">
             <button className="bg-slate-700 text-white px-4 py-2 rounded-full hover:bg-slate-500">Get Started</button>
            </section>
        </main>
    </div>
  )
}

export default Home