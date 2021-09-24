import Tile from "./Tile"

const Tiles = ({ hogData }) => {
    //console.log(hogData) //returns array of each hog object
    //sending info to Tile so we can render a tile for each hog with all the information
    
            const renderHogTiles = () => {
                return hogData.map(hog => {
                    return(
                        <Tile 
                            key={hog.image} 
                            name={hog.name} 
                            image={hog.image} 
                            specialty={hog.specialty} 
                            weight={hog.weight} 
                            greased={hog.greased} 
                            metal={hog["highest medal achieved"]} />
                    )
                })
            }
    //this is the return for tiles
    return(
        <div className="tileContainer">
            {renderHogTiles()}
        </div>
    )
}
    

export default Tiles;