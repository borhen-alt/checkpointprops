
import './App.css';
import Profile from "./Profile/profile";

function App() {
  const handleName = (fullName) => alert(fullName);
  const styleProfile = {
    margin: 30,
    padding: 20,
    fontFamily: "Barlow Condensed",
    textAlign: "center",
    border: "5px solid rgb(0,76,63)",
    backgroundColor: "red",
    border: 25,
  };
  const styleImg = { width: 300 };
  //handleName sends an alert message with the name of the profile user.
  return (
    <div style={styleProfile}>
      <Profile
        fullName="MIMOUNI BORHENE"
        profession="senior technician in marketing and multimedia"
        handleName={handleName}
      >
        <img src="/moimeme.png" alt="" style={styleImg} />
      </Profile>
    </div>
  );
}

export default App;
