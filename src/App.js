import { Route, Routes} from "react-router-dom";
import ContactUs from "./Pages/ContactUs";
import BookingList from "./Pages/Dashboard/BookingList";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Review from "./Pages/Dashboard/Review";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login";
import OurPortfolio from "./Pages/OurPortfolio";
import Ourteam from "./Pages/Ourteam";
import SignUp from "./Pages/SignUp";
import Guide from "./Pages/Dashboard/Guide";
import Payment from "./Pages/Dashboard/Payment";
import BookingPage from "./Pages/BookingPage";
import Wrapper from "./Wrapper";



function App() {
  return (
    <>
      <Wrapper>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route
            path="/our-portfolio"
            element={<OurPortfolio></OurPortfolio>}
          ></Route>
          <Route path="our-team" element={<Ourteam></Ourteam>}></Route>
          <Route path="contact" element={<ContactUs></ContactUs>}></Route>
          <Route path="login" element={<Login></Login>}></Route>
          <Route path="signup" element={<SignUp></SignUp>}></Route>
          <Route path="dashboard" element={<Dashboard></Dashboard>}>
            <Route path="guide" element={<Guide />} />
            <Route path="bookinglist" element={<BookingList />} />
            <Route path="review" element={<Review />} />
            <Route path="booking/:id" element={<BookingPage />}></Route>
            <Route path="payment/:id" element={<Payment />} />
          </Route>
        </Routes>
      </Wrapper>
    </>
  );
}

export default App;
