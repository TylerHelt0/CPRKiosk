import CheckInBackground from '../Resources/Images/formimage.jpeg'
import LandingBackground from '../Resources/Images/onphone.jpeg'
// import TicketBackground from '../Resources/Images/pexels-photo-461082.jpeg'
// import ThankYouBackground from '../Resources/Images/thankyouimage.jpeg'

export const App = {
    textAlign:"center",
    width:"100vw",
    minHeight:"100vh",
    backgroundColor:"#3c3f49",
    color:"white",
}

export const AppLogo = {
    display:"flex",
    width:"100%",
    maxWidth:"600px",
    padding:"0 2em 0 0"
}

export const Landing = {
    backgroundImage:`url(${LandingBackground})`,
    backgroundSize: "cover",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    minHeight:"100vh"
}

export const CheckIn = {
    backgroundImage: `url(${CheckInBackground})`,
    backgroundSize: "cover",
    display:"flex",
    justifyContent:"center",
    alignItems:'center',
    flexDirection:"column",
    minHeight:"100vh",

}

export const Form = {
    justifyContent:'center',
    padding:'0 10%'
}

export const FormInputText = {
    padding:"0 10%",
}

export const TransBackground = {
    backgroundColor: "rgba(48, 46, 46, 0.3)",
    margin: "0.5em",
    borderRadius: "1rem",
    padding:"0.5em",
    minWidth:"60%"
}

export const Alert = {
    display:"flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
    maxHeight: "20vh",
    background: "#3c3f49",
    padding:"1em",
    borderRadius: "1em",
    opacity: "0",
    position: "absolute",
    top:"-20vh",
    zIndex: "1",
}