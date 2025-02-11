const WelcomebookPage = () => {
    return (
        <div className="space-y-20 mb-40">
            <div className="space-y-2">
                <p>2024 · personal project</p>
                <h1 className="text-4xl font-semibold w-full">Welcomebook App</h1>
            </div>
            <div className="place-self-center">
                <iframe
                width="853"
                height="480"
                src={`https://www.youtube.com/embed/UbpKlGAmYkk?si=RlwsfHlMUh5kKHE2`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Welcomebook App"
                />
            </div>
        </div> 
    )
}

export default WelcomebookPage;