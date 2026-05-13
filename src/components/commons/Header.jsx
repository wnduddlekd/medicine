import logo from '@/assets/images/main-logo.svg';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import { Settings } from 'lucide-react';

export default function Header() {
  const btnStyle =
    'px-4 py-2 rounded-full transition-all duration-300 hover:text-primary hover:bg-primary/10';
  return (
    <div className="flex justify-between items-center w-full max-w-205 px-3 py-4">
      <Link to={ROUTES.HOME}>
        <img src={logo} alt="logo" />
      </Link>
      <nav className="flex items-center gap-2 text-neutral">
        <Link to={ROUTES.MY_MEDS}>
          <div className={btnStyle}>약 관리</div>
        </Link>
        |
        <Link to={ROUTES.CALENDER}>
          <div className={btnStyle}>캘린더</div>
        </Link>
        |
        <button className={`cursor-pointer ${btnStyle}`}>
          <Settings className="transition-all duration-500 hover:rotate-180" />
        </button>
      </nav>
    </div>
  );
}
