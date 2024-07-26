import Logo from '../images/Logo.png';

const Header = () => {
    return (
        <div className="flex h-[200px] w-full items-center justify-center bg-black">
            <img src={Logo} alt="logo" />
        </div>
    );
};

export default Header;
