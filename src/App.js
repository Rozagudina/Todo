import React, { useState }from 'react';
import './App.css';

function App() {
  const [names, setNames] = useState([]);
  return (
    
    <div style={{ margin: "50px" }} >
			<form>
				<input type="text" />
				<button>submit</button>
				<hi>h1</hi>
			</form>
		</div >
      
  )
}

export default App;
