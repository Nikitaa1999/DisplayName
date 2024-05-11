
import {useEffect, useState} from 'react';


function App() {
   const [firstName, setFirstName]= useState("");
   const [lastName, setLastName]= useState("")
   const [fullName, setFullName]=useState("")
   const [isSubmitEnabled, setIsSubmitEnabled]=useState(false)

  // const handleClick=()=>{


  //  setClicked(true);
    
  // }

  // useEffect(()=>{
  //   setFullName({firstName}+" "+{LastName});
  //   return fullName;
  // },[clicked])

  // const handleFirstName=(e)=>{
  //   setFirstName(e.target.value);
  // }

  // const handleLastName=(e)=>{
  //   setLastName(e.target.value);
  // }
  // return (
  //   <div className="App">
  //    <h1>Full Name Display</h1>
  //    First Name <input label="First Name" onChange={(e)=>handleFirstName(e)}/>
  //    <br />
  //    Last Name  <input label="First Name" onChange={(e)=>handleLastName(e)}/>
  //    <br />
  //    <button onClick={handleClick()}>Submit</button>
  //    {clicked?
  //     (<div>Full Name: {fullName}</div>):(<div></div>)
  //    }
     
  //   </div>
  // );


  // function search(formData) {
  //   const firstName = formData.get("firstName");
  //   const lastName = formData.get("latstName");
  //   const fn = `${firstName} ${lastName}`;
  //   setFullName(fn);
    
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    const fullName = `${firstName} ${lastName}`;
    
    setIsSubmitEnabled(firstName && lastName);
setFullName(fullName);
  };

  
  

  return (
    <>
    <h1>Full Name Display</h1>
    <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit" disabled={isSubmitEnabled}>Submit</button>
        </form>
        <div>
        {fullName && <p>Full Name: {fullName}</p>}
      </div>
    </>
  );
}

export default App;
