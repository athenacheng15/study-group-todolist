import Logo from "../images/Logo.png"

const Header = () => {

	return (
		<div className="bg-black w-full h-[200px] flex items-center justify-center">
            <img src={Logo} alt="logo"/>
		</div>
	);
};


export default Header;
