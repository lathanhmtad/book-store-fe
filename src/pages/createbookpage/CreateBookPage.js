import Navbar from '../../components/layouts/navbar/Navbar'
import Footer from '../../components/layouts/footer/Footer'

import CreateBookForm from '../../components/forms/createbookform/CreateBookForm'

import './createbookpage.style.css'

const CreateBookPage = () => {
    return (
        <section>
            <Navbar darkTheme={true}/>
            
            <CreateBookForm />

            <Footer />
        </section>
    )
}

export default CreateBookPage