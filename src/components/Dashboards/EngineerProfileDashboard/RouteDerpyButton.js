import React from 'react';
import { MemoryRouter as Router } from 'react-router';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Routes from '../../Routing/Routes';

export default function RouteDerpyButton() {
  return (
    <Router>
        <Button color="primary" component={Link} to="/engineers/derpy">
          More
        </Button>
        <Link to="/engineers/derpy"> MORE </Link>
    </Router>
  );
}
