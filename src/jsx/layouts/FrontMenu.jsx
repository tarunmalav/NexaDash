import { useLocation, Link } from 'react-router-dom';

const FrontMenu = () => {
  const location = useLocation();
  const hideOnRoutes = ['/dashboard', '/','/crm', '/finance', '/ecommerce', '/course', '/medical'];  

  const shouldHide = hideOnRoutes.includes(location.pathname);

  if (shouldHide) return null; 
  return (
    <div className="front-menu">
      <Link to="/chat" className={location.pathname === '/chat' ? '' : 'active'}>Apps</Link>
      <Link to="/page-login" className={location.pathname === '/page-login' ? 'active' : ''}>Pages</Link>
      <Link to="/uc-lightgallery" className={location.pathname === '/uc-lightgallery' ? 'active' : ''}>Plugins</Link>
    </div>
  );
};

export default FrontMenu;
