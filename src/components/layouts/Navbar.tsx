import CartIcon from '../ui/CartIcon';
import LoginButton from '../ui/LoginButton';
import Logo from '../ui/Logo';
import UserIcon from '../ui/UserIcon';

const Navbar = () => {
    return (
        <header className="container flex items-center justify-between px-4 py-3 bg-background">
            <Logo />
            <div className="flex items-center gap-4">
                <UserIcon />
                <CartIcon />
                <LoginButton />
            </div>
        </header>
    );
};

export default Navbar;
