const MoviewatchlistPage = () => {
    return(
        <main className="space-y-20 mb-40">
            <header className="space-y-2">
                <p>2024 · personal project</p>
                <h1 className="text-4xl font-semibold w-full">Movie Watchlist</h1>
            </header>
            <div className="place-self-center">
                <iframe
                width="853"
                height="480"
                src={`https://www.youtube.com/embed/TU8KsiBva7w?si=oVRDdJk0hf1LLXgA`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Movie Watchlist"
                />
            </div>
        </main> 
    )
}

export default MoviewatchlistPage;