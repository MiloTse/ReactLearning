import Menu from "./Menu";
import Content from "./Content";

function Body({nameBody}) {
    return (
        <div>
            <Menu/>
            <Content nameContent={nameBody}/>

        </div>

    )
}

export default Body