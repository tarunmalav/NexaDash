import { Link } from "react-router-dom";

const Footer = () => {
  var d = new Date();
  return (
    <div className="footer">
      <div className="copyright">
        <p>
        Copyright © Developed by{" "}
        <Link to="https://dexignzone.com/" target="_blank">DexignZone</Link>{" "}
          {d.getFullYear()}
        </p>
      </div>
    </div>
  );
};

export default Footer;
