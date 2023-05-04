import Navbar from "../../components/layouts/navbar/Navbar"
import Footer from "../../components/layouts/footer/Footer"
import CartItemsContainer from "../../components/layouts/cartitemscontainer/CartItemsContainer"

const CartPage = () => {
    return (
        <section>
            <Navbar darkTheme={true} />
            <CartItemsContainer />
            <Footer />
        </section>
    )
}

export default CartPage