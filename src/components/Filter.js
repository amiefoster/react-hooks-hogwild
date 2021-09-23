

const Filter = (props) => {

    const handleToggleGreased = (event) => {
        props.setDisplayGreased(event.target.checked)

    }

    return(
        <div>
        <label>Greased? </label>
        <input 
            type="checkbox" 
            value="greased" 
            checked={props.displayGreased} 
            onChange={handleToggleGreased}/> 
        </div>
    )

}

export default Filter;