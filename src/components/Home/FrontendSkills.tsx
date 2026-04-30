interface FrontendSkillsProps {
    svgSizes: string
}

const FrontendSkills = ({svgSizes}: FrontendSkillsProps) => {
    return (
        <>
            <div className="flex flex-col items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" data-testid="geist-icon" height="48" stroke-linejoin="round" viewBox="0 0 16 16" width="48"><g clip-path="url(#clip0_53_108)">
                    <circle cx="8" cy="8" r="7.375" fill="black" stroke="var(--ds-gray-1000)" strokeWidth="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M10.63 11V5" stroke="url(#paint0_linear_53_108vsxrmxu21)" strokeWidth="1.25" stroke-miterlimit="1.41421"/>
                    <path fill-rule="evenodd" clipRule="evenodd" d="M5.995 5.00087V5H4.745V11H5.995V6.96798L12.3615 14.7076C12.712 14.4793 13.0434 14.2242 13.353 13.9453L5.99527 5.00065L5.995 5.00087Z" fill="url(#paint1_linear_53_108vsxrmxu21)"/>
                    </g>
                    <defs>
                    <linearGradient id="paint0_linear_53_108vsxrmxu21" x1="11.13" y1="5" x2="11.13" y2="11" gradientUnits="userSpaceOnUse">
                    <stop stop-color="white"/>
                    <stop offset="0.609375" stop-color="white" stop-opacity="0.57"/>
                    <stop offset="0.796875" stop-color="white" stop-opacity="0"/>
                    <stop offset="1" stop-color="white" stop-opacity="0"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_53_108vsxrmxu21" x1="9.9375" y1="9.0625" x2="13.5574" y2="13.3992" gradientUnits="userSpaceOnUse">
                    <stop stop-color="white"/>
                    <stop offset="1" stop-color="white" stop-opacity="0"/>
                    </linearGradient>
                    <clipPath id="clip0_53_108">
                        <rect width="16" height="16" fill="red"/>
                    </clipPath>
                    </defs>
                </svg>
                <p className="text-sm">Next.js</p>
            </div>
            <div className="flex flex-col items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348" className={svgSizes}>
                    <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
                    <g stroke="#61dafb" strokeWidth="1" fill="none">
                        <ellipse rx="11" ry="4.2"/>
                        <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
                        <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
                    </g>
                </svg>
                <p className="text-sm">React</p>
            </div>
            <div className="flex flex-col items-center gap-1">
                <svg className={svgSizes}viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
                <g>
                    <polygon fill="#007ACC" transform="translate(128.000000, 128.000000) scale(1, -1) translate(-128.000000, -128.000000) " points="0 128 0 0 128 0 256 0 256 128 256 256 128 256 0 256">
                    </polygon>
                    <path d="M146.658132,223.436863 L146.739401,212.953054 L130.079084,212.953054 L113.418767,212.953054 L113.418767,165.613371 L113.418767,118.273689 L101.63464,118.273689 L89.8505126,118.273689 L89.8505126,165.613371 L89.8505126,212.953054 L73.1901951,212.953054 L56.5298776,212.953054 L56.5298776,223.233689 C56.5298776,228.922577 56.6517824,233.676863 56.8143221,233.798768 C56.9362269,233.961308 77.2130522,234.042577 101.797179,234.001943 L146.536227,233.880038 L146.658132,223.436863 Z" fill="#FFFFFF" transform="translate(101.634640, 176.142993) rotate(-180.000000) translate(-101.634640, -176.142993) ">
                    </path>
                    <path d="M206.566631,234.272145 C213.068219,232.646748 218.025679,229.761668 222.57679,225.048018 C224.933616,222.528653 228.428219,217.936907 228.712663,216.839764 C228.793933,216.514684 217.659965,209.037859 210.914568,204.852462 C210.670758,204.689922 209.69552,205.74643 208.598377,207.371827 C205.306949,212.166748 201.852981,214.239129 196.570441,214.604843 C188.809171,215.133097 183.811076,211.069605 183.851711,204.283573 C183.851711,202.292462 184.136155,201.114049 184.948854,199.488653 C186.65552,195.953414 189.825044,193.840399 199.7806,189.533097 C218.106949,181.649922 225.949489,176.448653 230.825679,169.053097 C236.270758,160.804208 237.489806,147.638494 233.792028,137.845478 C229.728536,127.199129 219.651076,119.966113 205.469489,117.568653 C201.080917,116.796589 190.678377,116.918494 185.964727,117.771827 C175.684092,119.600399 165.931711,124.679764 159.917743,131.343891 C157.560917,133.944526 152.969171,140.730557 153.253616,141.218176 C153.37552,141.380716 154.432028,142.030875 155.610441,142.721668 C156.748219,143.371827 161.05552,145.850557 165.119012,148.207383 L172.473933,152.474049 L174.01806,150.198494 C176.171711,146.907065 180.885362,142.396589 183.729806,140.893097 C191.897425,136.585795 203.112663,137.195319 208.639012,142.15278 C210.995838,144.30643 211.971076,146.541351 211.971076,149.83278 C211.971076,152.799129 211.605362,154.099446 210.061235,156.334367 C208.070123,159.178811 204.006631,161.576272 192.466314,166.574367 C179.259965,172.263256 173.571076,175.798494 168.369806,181.406113 C165.362822,184.656907 162.518377,189.858176 161.339965,194.206113 C160.364727,197.822621 160.120917,206.884208 160.892981,210.541351 C163.61552,223.300716 173.245996,232.199764 187.143139,234.841034 C191.653616,235.694367 202.137425,235.369287 206.566631,234.272145 Z" fill="#FFFFFF" transform="translate(194.578507, 176.190240) scale(1, -1) translate(-194.578507, -176.190240) ">
                    </path>
                </g>
                </svg>
                <p className="text-sm">TypeScript</p>
            </div>
        </>
    )
}

export default FrontendSkills;