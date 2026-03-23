const mediumArticles = [
    {
        title: 'Supernal',
        link: 'https://medium.com/@ugwuanyiandrew/supernal-ba2bc0b4a766',
        cover: '/images/other/supernal.jpeg',
    },
    {
        title: 'Homecoming',
        link: 'https://medium.com/@ugwuanyiandrew/homecoming-f38a4e534b65',
        cover: '/images/other/homecoming.jpeg',
    },
]

const spotifyPlaylists = [
    {
        link: 'https://open.spotify.com/playlist/04ohXtKy83z6hXIl4o72Mm?si=59e6dc89b86840c5',
        cover: '/images/other/play1.jpg',
    },
    {
        link: 'https://open.spotify.com/playlist/2HTzhf4FAaSi8UenHypkXv?si=95c57f88f23d4481',
        cover: '/images/other/play3.jpg',
    },
    {
        link: 'https://open.spotify.com/playlist/0UBuoOUTiKhhSXPkH0RwX6?si=579c6d6366ff40ba',
        cover: '/images/other/play5.jpg',
    },
    {
        link: 'https://open.spotify.com/playlist/13HKw49vVOby2lltx8GhBc?si=3a9ca49acfe34a5b',
        cover: '/images/other/play7.jpg',
    },
    {
        link: 'https://open.spotify.com/playlist/0FkgxE3XSAaqi5VNfIu9Eb?si=d99c6264a5b14131',
        cover: '/images/other/play6.jpg',
    },
]

export default function Play() {
    return (
        <div className="mb-10">
            <div className="flex items-center justify-between">
                <div className="font-bold text-[28px] text-[var(--body-copy)]">Play</div>
                <div className="font-gilmer text-[80px] text-gradient-numeral">03</div>
            </div>

            <div className="bg-[var(--section-bg)] p-6 md:px-5 rounded-[20px] -mt-[25px] mb-[42px]">
                <div className="font-poppins text-sm text-[var(--body-copy)] font-light leading-[21px] tracking-[-0.02em] mb-4">
                    Aside from design and development, I
                    write on Medium and curate on Spotify...
                </div>

                <div className="font-poppins text-base text-[var(--body-copy)] font-semibold leading-[21px] tracking-[-0.02em] pl-[10px]">
                    Medium
                </div>
                <div className="flex overflow-x-auto items-center mb-3 pt-[10px] pl-[10px]">
                    {mediumArticles.map((article, index) => (
                        <a
                            key={index}
                            href={article.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mr-4 min-w-[150px] mb-3"
                        >
                            <img
                                src={article.cover}
                                alt={article.title}
                                className="w-[150px] h-[100px] object-cover rounded-md transition-transform duration-500 hover:scale-105"
                            />
                            <div className="text-xs font-poppins text-[var(--body-copy)] font-medium mt-1">
                                {article.title}
                            </div>
                        </a>
                    ))}
                </div>

                <div className="font-poppins text-base text-[var(--body-copy)] font-semibold leading-[21px] tracking-[-0.02em] pl-[10px]">
                    Spotify
                </div>
                <div className="flex overflow-x-auto items-center mb-3 pt-[10px] pl-[10px]">
                    {spotifyPlaylists.map((playlist, index) => (
                        <a
                            key={index}
                            href={playlist.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mr-4 min-w-[140px] mb-3"
                        >
                            <img
                                src={playlist.cover}
                                alt="Spotify Playlist"
                                className="w-[140px] h-[140px] object-cover rounded-md transition-transform duration-500 hover:scale-105"
                            />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}
