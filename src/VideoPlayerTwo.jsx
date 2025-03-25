import {useEffect, useRef} from "react";

//把ref放在useEffect里面了，执行逻辑变化了。
//首先会执行useRef,然后执行渲染dom(return (<video ref={ref} src={src} loop/>)),
//改为了再执行useEffect里面的东西，这时候就不会提示方法不存在，而是资源不存在
function VideoPlayerTwo({src, isPlaying}) {
    const ref = useRef(null);

    useEffect(()=>{
        if(isPlaying){
            ref.current.play();
        }else{
            ref.current.pause();
        }
    })

    return (<video ref={ref} src={src} loop muted={true}/>)
}
export default VideoPlayerTwo;
