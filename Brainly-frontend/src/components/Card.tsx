import { ShareIcon } from "../icon/ShareIcon"

export const Card = () => {
  return <div>
    <div className="p-4 bg-white rounded-md border-gray-200 max-w-72 boder">
        <div className="flex justify-between">
            <div className="flex items-center text-md">
                <div className="text-gray-500 pr-4">
                <ShareIcon />
                </div>
                Project Ideas
            </div>
            <div className="flex">
                <div className="pr-2 text-gray-500">
                <ShareIcon />
                </div>
                <div className="text-gray-500">
                <ShareIcon />
                </div>
            </div>
        </div>

        <div className="pt-4">
        {/* <iframe className="w-full" src="https://www.youtube.com/embed/STfIzJV2BwE?si=pWsSYg9T7_1XPpPZ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> */}

        <blockquote className="twitter-tweet">
          <a href="https://twitter.com/username/status/807811447862468608"></a>
        </blockquote>
        </div>
        
    </div>
  </div>
}