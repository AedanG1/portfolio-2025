import Icons from "../Icons/Icons";

const Contact = () => {
    return (
        <div className="flex flex-col mt-40 space-y-6">
            <div className="space-y-2 w-full md:w-1/2">
                <h2 className="text-4xl font-semibold w-full md:w-4/6">Contact</h2>
            </div>
            <div className="space-y-2">
                <h3 className="text-xl">
                    <a 
                        className="flex flex-row items-center gap-2" 
                        href="https://github.com/AedanG1"
                    >
                        {Icons.GitHub("size-6")}GitHub
                    </a>
                </h3>
                <h3 className="text-xl">
                    <a 
                        className="flex flex-row items-center gap-1"
                        href="https://www.linkedin.com/in/aedan-gallivan-0067a21ba/"
                    >
                    {Icons.Linkedin("size-7")}LinkedIn
                    </a>
                </h3>
            </div>
        </div>
    )
}

export default Contact;