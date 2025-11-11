import Icons from "../Icons/Icons";

const BjjvsPage = () => {
    return (
        <main className="space-y-20 mb-40">
            <header className="space-y-2">
                <p>2025 · personal project</p>
                <h1 className="text-4xl font-semibold w-full">Video Sharing Web App</h1>
            </header>
            <div className="flex flex-col-reverse md:flex-row gap-8">
                <article className="basis-3/4 space-y-8">
                    <div className="space-y-2">
                        <img src="/bjjvs-hero.png" alt="A screenshot of the homepage for a Video Sharing app. Shows a grid of videos"/>
                        <h2 id="overview" className="text-3xl mt-2 scroll-mt-24">Overview</h2>
                        <p>
                            This video sharing webapp for a martial arts gym allows members to watch and favorite instructional videos uploaded by the admin.
                            Users are authenticated and authorized using express sessions stored in a Redis database.
                            The admin creates tags for the video in order to allow members to filter their searches. Upon uploading a video,
                            a frame is chosen out of the uploaded video to set as a thumbnail. Videos are uploaded
                            directly to an AWS S3 bucket with a pre-signed url, then optimized for filesize through AWS MediaConvert
                            saving storage space.
                        </p>
                    </div>
                    <h2 id="screenshots" className="text-3xl mt-2 mb-4 scroll-mt-24">Screenshots</h2>
                    <div className="space-y-2">
                        <h3 id="library" className="text-2xl mt-2 scroll-mt-24">Library</h3>
                        <img src="/library.png" alt="A screenshot of a the Library page of the Video Sharing app. A filter dropdown is shown"/>
                        <p>Members can filter videos in Library, This week, and Favorites using tags created by an admin.</p>
                    </div>
                    <div className="space-y-2">
                        <h3 id="upload-video" className="text-2xl mt-2 scroll-mt-24">Upload Video</h3>
                        <img src="/upload-video.png" alt="A screenshot of the admin dashboard"/>
                        <p>
                            Admins can drag and drop or click to upload videos, add tags that have been created, set the skill level,
                            and include the instructor's name.
                        </p>
                    </div>
                    <div className="space-y-2">
                        <h3 id="aws" className="text-2xl mt-2 scroll-mt-24">AWS Pipeline</h3>
                        <img src="/aws.png" alt="A diagram of the AWS pipeline"/>
                        <p>
                            Upon uploading a video (1,2) the client sends a request to the server for a pre-signed url to upload to an AWS S3 bucket.
                            (3) The client then sends the uploaded video and thumbnail to the input S3 bucket. (4) Using a lambda function, (5) a MediaConvert
                            job is started that is configured to optimize the video's file size. (6) Once upload is complete, the MediaConvert job outputs
                            the new optimized video to the S3 output bucket. (7) The client is then able to request the optimized video from the S3 output bucket.
                        </p>
                    </div>
                    <div className="space-y-2">
                        <h3 id="thumbnail" className="text-2xl mt-2 scroll-mt-24">Choosing a Thumbnail</h3>
                        <img src="/thumbnail.png" alt="A screenshot of the thumbnail choosing feature"/>
                        <p>Admins can then select a frame from the uploaded video to set as a thumbnail.</p>
                    </div>
                    <div className="space-y-2">
                        <h3 id="tags" className="text-2xl mt-2 scroll-mt-24">Managing Tags</h3>
                        <img src="/tags.png" alt="A screenshot of the manage tags form"/>
                        <p>Admins create, edit, and delete tags to attach to videos for members to filter videos with.</p>
                    </div>
                    <div className="space-y-2">
                        <h3 id="videos" className="text-2xl mt-2 scroll-mt-24">Managing Videos</h3>
                        <img src="/videos.png" alt="A screenshot of the manage videos form"/>
                        <p>Here admins can update or delete titles, tags, and videos</p>
                    </div>
                </article>
                <aside className="basis-1/4 md:sticky md:top-32 md:self-start space-y-4">
                    <h2 className="text-2xl">View Project</h2>
                    <a className="px-4 py-2 bg-sky-700/60 rounded-md text-white inline-flex gap-2 items-center" href="https://bjjvs.dev" target="/blank">
                        View live <span>{Icons.ArrowTopRight("size-4")}</span>
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
                            <li><a href="#library" className="ml-6 transition duration-200 hover:text-sky-700/80">⌙ Library</a></li>
                            <li><a href="#upload-video" className="ml-6 transition duration-200 hover:text-sky-700/80">⌙ Upload Video</a></li>
                            <li><a href="#aws" className="ml-6 transition duration-200 hover:text-sky-700/80">⌙ AWS Pipeline</a></li>
                            <li><a href="#thumbnail" className="ml-6 transition duration-200 hover:text-sky-700/80">⌙ Choosing a Thumbnail</a></li>
                            <li><a href="#tags" className="ml-6 transition duration-200 hover:text-sky-700/80">⌙ Managing Tags</a></li>
                            <li><a href="#videos" className="ml-6 transition duration-200 hover:text-sky-700/80">⌙ Managing Videos</a></li>
                        </ul>
                    </div>
                </aside>
            </div>
        </main> 
    )
}

export default BjjvsPage;
