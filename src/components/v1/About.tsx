export default function About() {
    return (
        <div className="mb-10" id="about">
            <div className="flex items-center justify-between">
                <div className="font-bold text-[28px] text-[var(--body-copy)]">About Me</div>
                <div className="font-gilmer text-[80px] text-gradient-numeral">01</div>
            </div>

            <div className="bg-[var(--section-bg)] p-6 md:px-5 rounded-[20px] -mt-[25px] mb-[42px]">
                <div className="text-[var(--body-copy)]">
                    I'm Ugwuanyi Andrew, a front-end engineer
                    and product designer
                    with a passion for creating compelling
                    user experiences.
                    <br /><br />
                    I started my creative journey years ago
                    with character illustration. Much later,
                    I got introduced to user interface design
                    and then web development.
                    <br /><br />
                    So far I have worked at several agencies,
                    servicing clients in the education,
                    ecommerce and fintech industries.
                    <br /><br />
                    I write short stories and poetry on
                    Medium and create awesome playlists
                    on Spotify, because a good playlist is
                    the real soundtrack to any design or
                    code session.
                    <br /><br />
                    <img src="/images/wink.png" alt="wink emoji" className="w-10" />
                </div>
            </div>
        </div>
    )
}
