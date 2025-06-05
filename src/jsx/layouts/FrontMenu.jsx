import { useLocation, Link } from 'react-router-dom';

const FrontMenu = () => {
  const location = useLocation();

  // Routes where this menu should be hidden
  const hideOnRoutes = ['/dashboard', '/crm', '/finance', '/ecommerce', '/course', '/medical']; // Add as needed

  const shouldHide = hideOnRoutes.some(route => location.pathname.startsWith(route));

  if (shouldHide) return null; // ⛔ Don't render the menu on these pages

  return (
    <div className="front-menu">
      <Link to="/chat" className={location.pathname === '/chat' ? '' : 'active'}>Apps</Link>
      <Link to="/page-login" className={location.pathname === '/page-login' ? 'active' : ''}>Pages</Link>
      <Link to="/uc-lightgallery" className={location.pathname === '/uc-lightgallery' ? 'active' : ''}>Plugins</Link>
    </div>
  );
};

export default FrontMenu;
