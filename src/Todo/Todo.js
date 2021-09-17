import React, { useState }from 'react'

const Todo = () => {
    const [name ,setNames] = useState([]);
    const [name ,setNames] = useState("")
    const handleClick = () => {
        // e.preventDefault();
        setNames([...name,setSingleNames])
    }
    const editName = (index) => {
        let newNames = [...names];
        newNames[index] = singleName;
        setNames(newNames);
        setSingleNames("")
    }
    const deleteName = (index) => {
        let newNames = [...names]
        let filterdNames = newNames.filter((item, i) => i !== index);  //I is value
        setNames(filterdNames);
        console.log(filterdNames);
    }

    return (
       <div style={{margin:"50px"}} >
			<form>
                <input type="text"
                    onChange={(e) => {
                        setSingleNames(e.target.value)

                    }}
                    />
				<button onClick= {handleClick}>submit</button>
			 
            </form>
            {name.map((name, index) =>
            <div key={index}>
                    <h2>{index}{name}</h2>
                    <button onClick={() => editName(index)}>edit</button>
                    <button onClick={() => deleteName(index)} >delete</button>
                </div>
    )}
                
		</div>
    )
}

export default Todo
