import { useNavigate } from 'react-router-dom';
import Button from '../components/commons/Button';

export default function TestHub() {
  const navigate = useNavigate();

  const pageItems = [
    { to: '/home', label: 'Home' },
    { to: '/check-in', label: 'CheckIn' },
    { to: '/my-meds', label: 'Meds' },
    { to: '/calender', label: 'Calender' },
    { to: '/insights', label: 'Insights' },
  ];

  const testItems = [
    { to: '/test/ThemeTest', label: 'ThemeTest' },
    { to: '/test/ButtonTest', label: 'ButtonTest' },
  ];

  return (
    <div className="mx-auto max-w-2xl p-6">
      <h1 className="mb-4 text-2xl font-bold">Page</h1>
      <div className="mb-6 grid grid-cols-3 gap-3">
        {pageItems.map((i) => (
          <Button key={i.to} onClick={() => navigate(i.to)}>
            {i.label}
          </Button>
        ))}
      </div>
      <h1 className="mb-4 text-2xl font-bold">Test Hub</h1>
      <div className="mb-6 grid grid-cols-3 gap-3">
        {testItems.map((i) => (
          <Button variant="secondary" key={i.to} onClick={() => navigate(i.to)}>
            {i.label}
          </Button>
        ))}
      </div>
    </div>
  );
}
