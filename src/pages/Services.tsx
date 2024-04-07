import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import EmployeesImage2 from "../components/EmployeesImage2";
import Footer from "../components/Footer";

function Services() {
  console.log("tjänster");
  return (
    <>
      <Navbar />
      <Banner />
      <div style={{ color: "white" }}>Tjänster</div>
<EmployeesImage2/>
      <Footer />
    </>
  );
}

export default Services;
