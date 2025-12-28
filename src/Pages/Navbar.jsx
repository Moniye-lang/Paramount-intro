

    export default function Navbar(){
        return(
            <div className=" ">
                <div>
                    <img src="/img" alt="Hairnesse Logo" />
                </div>
                <div>
                    <Link>Home</Link>
                    <Link>About</Link>
                    <Link>Reservation</Link>
                    <Link>Hairstyles</Link>
                    <Link>Contact</Link>
                </div>
                <div>
                    <Link>Book Now</Link>
                </div>
            </div>
        )
    }