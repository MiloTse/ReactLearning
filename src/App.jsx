// import VideoPlayerOne from "./VideoPlayerOne";
import {useState} from "react";
import VideoPlayerTwo from "./VideoPlayerTwo";
//2.Effect是在render执行结束，，页面更新之后，再执行的
//2. The Effect is executed after the render has completed and the page has been updated.
function App() {
    //play status
    const [isPlaying,setIsPlaying] = useState(true);

    function handleBtnClick(){
        setIsPlaying(!isPlaying);
    }
    return (
            <div>
                {/*<VideoPlayerOne src="http://localhost:3000/a.mp4" isPlaying={isPlaying}/>*/}
                <VideoPlayerTwo src="http://localhost:3000/a.mp4" isPlaying={isPlaying}/>
                <button onClick={handleBtnClick}>
                   Toggle
                </button>
            </div>
        )
}
export default App;