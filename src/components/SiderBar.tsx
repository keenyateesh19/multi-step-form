const SideBar = () => {
    const stepHeading = ["YOUR INFO", "SELECT PLAN", "ADD-ONS", "SUMMARY"]
    return ( <div className="min-h-[25svh] bg-[url(assets/bg-sidebar-mobile.svg)] bg-cover bg-no-repeat bg-center pt-8 lg:bg-[url(assets/bg-sidebar-desktop.svg)] lg:w-[25%] lg:rounded-xl">
        <div className="flex justify-center gap-4 w-full lg:flex-col lg:p-8 lg:gap-6">
            {Array.from({length: 4}).map((_, i) => (
                <div className="flex text-white gap-4 items-center" key={i}>
                    <p className=" text-sm font-semibold border-white border-2 rounded-full w-10 h-10 grid place-items-center">{i + 1}</p>
                    <div className="hidden lg:block">
                        <p className="font-light text-sm">STEP {i + 1}</p>
                        <p className="text-lg font-semibold tracking-wide">{stepHeading[i]}</p>
                    </div>
                </div>
            ))}
        </div>
    </div> );
}
 
export default SideBar;