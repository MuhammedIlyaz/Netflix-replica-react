function Navbar(){
return(

    <nav className="navbar">
        <img src="{`${import.meta.env.BASE_URL}/images/Netflix_logo.svg`}" alt="logo"/>

        <button className="sign-in-btn">
            Sign In
        </button>

    </nav>
   
)

}
export default Navbar