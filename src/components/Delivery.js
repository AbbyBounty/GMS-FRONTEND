// import qrcode from '../images/qrcode.jpeg'
import Navbar from './NavBar';

const Delivery = () => {

    const today = new Date()
    var tomorrow = new Date()
    tomorrow.setDate(today.getDate() + 7)
    const t2 = tomorrow.toDateString()



    return (
        <div>


            <div className="float-center m-5">
                <h1 className="lg:text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    <span className="block xl:inline">Your will get your order by </span>{' '}
                    <span className="block text-pink xl:inline">{t2}</span>
                </h1>

                <span className="block xl:inline text-xl text-gray-500">Thank you for shopping with GroceryManagementSystem</span>{' '}
            </div>

            <div className="m-10">
                <a
                    href="/categorylist"
                    className="text-indigo-600 font-medium hover:text-indigo-500 text-2xl">
                    Continue Shopping <span aria-hidden="true"> &rarr;</span>
                </a>
            </div>

            {/* <button
                type="button"
                className="text-indigo-600 font-medium hover:text-indigo-500"
                onClick={() => click()}
            >
                Continue Shopping<span aria-hidden="true"> &rarr;</span>
            </button> */}


        </div >
    )
}

export default Delivery