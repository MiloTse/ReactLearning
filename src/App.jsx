// import VideoPlayerOne from "./VideoPlayerOne";
import {useState} from "react";
import VideoPlayerTwo from "./VideoPlayerTwo";



//2.Effect并不是跟随render 属性执行的，而是在render执行结束，页面更新之后，再执行的
//2. The Effect does not execute alongside the render properties;
//instead, it runs after the render has completed and the page has been updated.

function App() {
    //play status
    const [isPlaying,setIsPlaying] = useState(true);

    function handleBtnClick(){
        setIsPlaying(!isPlaying);
    }
    return (
            <div>
                {/*<VideoPlayerOne src="http://localhost:3000/a.mp4" isPlaying={isPlaying}/>*/}
                <VideoPlayerTwo src="https://media.w3.org/2010/05/sintel/trailer.mp4" isPlaying={isPlaying}/>

                <button onClick={handleBtnClick}>
                   Play/Pause
                </button>
            </div>
        )
}
export default App;