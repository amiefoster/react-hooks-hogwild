import { useState } from "react"
//click on tile to display other details about the hog


const Tile = ({ name, image, specialty, weight, greased, metal}) => {
    // console.log(name, image) //returns name and image for each pig
    // console.log(weight, greased, specialty)
    console.log(metal)

    const [visible, setVisible] = useState(true);
            //set visible initially to true

    const handleClick = () => {
        setVisible(!visible);
            //when this is triggered it changes to false this results in the toggle
    }

    return(
        <div className="pigTile pigTileSize" onClick={handleClick}>
            <h3>Hello, my name is {name} </h3>
            <img src={image} alt="pig"></img>
            <div className={visible ? "notvisible" : "visible"}>
                    {/* asking is visible true? then change the classname */}
                <p>Specialty: {specialty}</p>
                <p>Weight: {weight}</p>
                <p>Greased Status: {greased ? "True" : "False"}</p>
                <p>Highest Metal Achieved: {metal}</p>
            </div>
        
        </div>
    )
}

export default Tile;