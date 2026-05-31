import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import Button from '../commons/Button';

export default function MedsAddButton() {
  return (
    <Link to={ROUTES.CHECK_IN}>
      <Button variant="primary" size="sm">
        약 추가
      </Button>
    </Link>
  );
}
