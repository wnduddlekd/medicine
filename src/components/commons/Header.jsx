import logo from '@/assets/images/main-logo.svg';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';
import { Settings, X } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState('pillLight');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'pillLight' ? 'pillDark' : 'pillLight'));
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

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
        <button
          className={`cursor-pointer ${btnStyle}`}
          onClick={() => setOpen((prev) => !prev)}
        >
          <Settings className="transition-all duration-500 hover:rotate-180" />
        </button>
        {open && (
          <div
            className="fixed inset-0 bg-black/20 flex items-center justify-center z-50"
            onClick={() => setOpen(false)}
          >
            <div
              className="bg-base-200 p-6 rounded-xl min-w-80"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between ml-22 mb-2.5">
                <p>사용자 설정</p>
                <button
                  className="p-1 bg-primary/20 hover:bg-primary/40 text-neutral rounded-full"
                  onClick={() => setOpen(false)}
                >
                  <X size={19} />
                </button>
              </div>
              <div className="flex items-center justify-between text-base-content">
                <p className="p-3">테마 선택</p>
                <button
                  onClick={toggleTheme}
                  className="p-1 px-2 border border-b-neutral rounded hover:bg-base-100"
                >
                  <small>
                    {theme === 'pillDark' ? '라이트 모드' : '다크 모드'}
                  </small>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
