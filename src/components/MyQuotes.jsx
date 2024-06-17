const MyQuotes = () => {
    return (
      <div className="flex flex-col space-y-6 lg:w-1/2">
        <section className="relative isolate overflow-hidden bg-white px-4 py-5 sm:py-10 lg:px-6 rounded-lg">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(135rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
            <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-200 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
            <div className="mx-auto lg:max-w-4xl">          
                <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                <p>
                    “Preventive health care and wellness initiatives are essential to reducing the burden of chronic diseases and ensuring a healthier future for all." – "<br/><small> – Richard Carmona</small>
                </p>
                </blockquote>         
            </div>
        </section>
        <section className="relative isolate overflow-hidden bg-white px-4 py-5 sm:py-10 lg:px-6 rounded-lg">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
            <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-200 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
            <div className="mx-auto max-w-2xl lg:max-w-4xl">          
                <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                <p>
                    “It is health that is real wealth and not pieces of gold and silver. Health is the most important aspect of our lives. It impacts our happiness, relationships, and even our success."<br/><small> – Mahatma Gandhi</small>
                </p>
                </blockquote>         
            </div>
        </section>
      </div>
    )
  }
 export default MyQuotes  