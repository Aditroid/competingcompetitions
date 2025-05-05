export default function Trending({ posts }) {
    return (
        <div className="space-y-3" >
            {posts.map((post, index) => {
                const [mainTitle, subTitle] = post.title.split(':');
                return (

                    <div key={index} className="flex items-start gap-2 hover:scale-105 transition duration-300 hover:cursor-pointer">
                        <div className="text-xl font-bold text-gray-500">{index + 1}.</div>
                        <div>
                            <h3 className="font-semibold leading-snug text-black">
                                <div className="text-lg">{mainTitle}</div>
                                <div className="italic text-gray-600 text-md">
                                    {subTitle && (
                                        <>
                                            {subTitle.trim()}
                                        </>
                                    )}
                                </div>
                            </h3>
                            <div className="text-sm text-gray-600 italic mt-1">
                                <img src="user.png" alt="User" className="w-3 inline me-1" />
                                <div className="inline">{post.authors.join(", ")}</div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
