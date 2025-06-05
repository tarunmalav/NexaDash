import { useLocation, Link } from 'react-router-dom';

const SidebarToggle = ({ toggleClass }) => {
  const location = useLocation();
  const showOnRoutes = ['/dashboard', '/analytics', '/'];

  const shouldShow = showOnRoutes.includes(location.pathname);

  if (!shouldShow) return null;

  return (
    <li className="nav-item dropdown notification_dropdown sidebar-close" onClick={toggleClass}>
      <Link className="nav-link" to="#">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-chevron-right"
        >
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </Link>
    </li>
  );
};

export default SidebarToggle;
