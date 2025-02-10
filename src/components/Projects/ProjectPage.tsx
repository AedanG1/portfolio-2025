const ProjectPage = () => {
    return (
        <div className="space-y-20 mb-40">
            <div className="space-y-2">
                <p>2025 · personal project</p>
                <h1 className="text-4xl font-semibold w-full">Video Sharing Webapp</h1>
            </div>
            <div className="flex flex-col-reverse md:flex-row gap-8">
                <article className="basis-3/4 space-y-8">
                    <div className="space-y-2">
                        <img src="/bjjvs-hero.png" />
                        <h2 id="overview" className="text-3xl mt-2 scroll-mt-24">Overview</h2>
                        <p>This video sharing webapp allows users to watch and favorite videos uploaded by the admin.
                            The admin can create, edit, and delete tags as well as uploaded videos. Upon uploading a video,
                            the admin is able to choose a frame out of the uploaded video to set as a thumbnail. Videos are uploaded
                            directly to an AWS S3 bucket with a pre-signed url, then optimized for filesize through AWS MediaConvert
                            saving storage space.
                        </p>
                    </div>
                    <h2 id="screenshots" className="text-3xl mt-2 mb-4 scroll-mt-24">Screenshots</h2>
                    <div className="space-y-2">
                        <h3 id="library" className="text-2xl mt-2 scroll-mt-24">Library</h3>
                        <img src="/library.png"/>
                        <p>Users can filter videos in Library, This week, and Favorites using tags created by an admin.</p>
                    </div>
                    <div className="space-y-2">
                        <h3 id="upload-video" className="text-2xl mt-2 scroll-mt-24">Upload Video</h3>
                        <img src="/upload-video.png"/>
                        <p>Admins can drag and drop or click to upload videos, add tags that have been created, set the skill level,
                            and set the instructor in the video.
                        </p>
                    </div>
                    <div className="space-y-2">
                        <h3 id="thumbnail" className="text-2xl mt-2 scroll-mt-24">Choosing a Thumbnail</h3>
                        <img src="/thumbnail.png"/>
                        <p>Admins can then select a frame from the uploaded video to set as a thumbnail for the user.</p>
                    </div>
                    <div className="space-y-2">
                        <h3 id="tags" className="text-2xl mt-2 scroll-mt-24">Managing Tags</h3>
                        <img src="/tags.png"/>
                        <p>Admins create, edit, and delete tags to attach to videos for users to filter videos with.</p>
                    </div>
                    <div className="space-y-2">
                        <h3 id="videos" className="text-2xl mt-2 scroll-mt-24">Managing Videos</h3>
                        <img src="/videos.png"/>
                        <p>Here admins can update or delete titles, tags, and videos</p>
                    </div>
                </article>
                <aside className="basis-1/4 md:sticky md:top-32 md:self-start space-y-4">
                    <h2 className="text-2xl">View Project</h2>
                    <a className="px-4 py-2 bg-sky-700/60 rounded-md text-white" href="https://bjjvs.dev" target="/blank">
                        ↖︎ View live
                    </a>
                    <div className="space-y-2 mt-6">
                        <h2 className="text-2xl mt-2">Tech Stack</h2>
                        <ul className="flex flex-row gap-1 flex-wrap">
                            <li className="border border-neutral-400 px-2">React</li>
                            <li className="border border-neutral-400 px-2">Tailwind</li>
                            <li className="border border-neutral-400 px-2">Express.js</li>
                            <li className="border border-neutral-400 px-2">PostgreSQL</li>
                            <li className="border border-neutral-400 px-2">AWS</li>
                        </ul>
                    </div>
                    <div className="hidden md:block">
                        <h2 className="text-2xl mt-2">Contents</h2>
                        <ul>
                            <li><a href="#overview" className="transition duration-200 hover:text-sky-700/80">Overview</a></li>
                            <li><a href="#screenshots" className="transition duration-200 hover:text-sky-700/80">Screenshots</a></li>
                            <li><a href="#library" className="ml-8 transition duration-200 hover:text-sky-700/80">⌙ Library</a></li>
                            <li><a href="#upload-video" className="ml-8 transition duration-200 hover:text-sky-700/80">⌙ Upload Video</a></li>
                            <li><a href="#thumbnail" className="ml-8 transition duration-200 hover:text-sky-700/80">⌙ Choosing a Thumbnail</a></li>
                            <li><a href="#tags" className="ml-8 transition duration-200 hover:text-sky-700/80">⌙ Managing Tags</a></li>
                            <li><a href="#videos" className="ml-8 transition duration-200 hover:text-sky-700/80">⌙ Managing Videos</a></li>
                        </ul>
                    </div>
                </aside>
            </div>
        </div> 
    )
}

export default ProjectPage;