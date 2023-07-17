import React from 'react';
import { Link } from 'react-router-dom';
import './StickyButton.css';

interface StickyButtonProps {
  linkTo: string;
  buttonLabel: string;
}

const StickyButton: React.FC<StickyButtonProps> = ({ linkTo, buttonLabel }) => {
  const [isSticky, setIsSticky] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY >= 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`sticky-button-container ${isSticky ? 'sticky' : ''}`}>
      <Link to={linkTo}>
        <button className="sticky-button">{buttonLabel}</button>
      </Link>
    </div>
  );
};

export default StickyButton;
