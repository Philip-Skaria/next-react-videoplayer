import {VideoCard} from "./VideoCard"
const VIDEOS=[{
          thumbnail:"thumbnail.png",
      title:"random youtube video",
      channel:"channel.png",
      author:"Philip Skaria",
      views:"200k",
      timestamp:"3 days ago" 
},{
          thumbnail:"thumbnail.png",
      title:"random facebook video",
      channel:"channel.png",
      author:"Philip Skaria",
      views:"200k",
      timestamp:"3 days ago" 
},{
          thumbnail:"thumbnail.png",
      title:"random insta video",
      channel:"channel.png",
      author:"Philip Skaria",
      views:"200k",
      timestamp:"3 days ago" 
},{
          thumbnail:"thumbnail.png",
      title:"random tiktok video",
      channel:"channel.png",
      author:"Philip Skaria",
      views:"200k",
      timestamp:"3 days ago" 
},{
          thumbnail:"thumbnail.png",
      title:"random tiktok video",
      channel:"channel.png",
      author:"Philip Skaria",
      views:"200k",
      timestamp:"3 days ago" 
},{
          thumbnail:"thumbnail.png",
      title:"random tiktok video",
      channel:"channel.png",
      author:"Philip Skaria",
      views:"200k",
      timestamp:"3 days ago" 
},{
          thumbnail:"thumbnail.png",
      title:"random tiktok video",
      channel:"channel.png",
      author:"Philip Skaria",
      views:"200k",
      timestamp:"3 days ago" 
},{
          thumbnail:"thumbnail.png",
      title:"random tiktok video",
      channel:"channel.png",
      author:"Philip Skaria",
      views:"200k",
      timestamp:"3 days ago" 
},{
          thumbnail:"thumbnail.png",
      title:"random tiktok video",
      channel:"channel.png",
      author:"Philip Skaria",
      views:"200k",
      timestamp:"3 days ago" 
},{
          thumbnail:"thumbnail.png",
      title:"random tiktok video",
      channel:"channel.png",
      author:"Philip Skaria",
      views:"200k",
      timestamp:"3 days ago" 
}]

export const VideoGrid=()=>{
    return <div className="grid grid-cols-1
            md:grid-cols-2 lg:grid-cols-4">
            {VIDEOS.map(video=><div>
                <VideoCard
                      thumbnail={video.thumbnail}
                      title={video.title}
                      channel={video.channel}
                      author={video.author}
                      views={video.views}
                      timestamp={video.timestamp}    
                ></VideoCard>
            </div>)}
    </div>
}
