import Navbar from "../../components/layouts/navbar/Navbar"
import DetailsSection from "../../components/layouts/detailssection/DetailsSection"
import Footer from "../../components/layouts/footer/Footer"


const BookDetailsPage = () => {
    return (
        <div>
            <Navbar darkTheme={true} />
            <DetailsSection />
            <Footer />
        </div>
    )
}

export default BookDetailsPage