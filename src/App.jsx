import VideoPlayerOne from "./VideoPlayerOne";
import {useState} from "react";
//2.Effect是在render执行结束，，页面更新之后，再执行的
function App() {
    const [isPlaying,setIsPlaying] = useState(true);

    function handleBtnClick(){
        setIsPlaying(!isPlaying);
    }
    return (
            <div>
                <VideoPlayerOne src="http://localhost:3000/a.mp4" isPlaying={isPlaying}/>
                <button onClick={handleBtnClick}>
                   Toggle
                </button>
            </div>
        )
}
export default App;