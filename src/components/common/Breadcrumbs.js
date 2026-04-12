import React from 'react';
import { Link } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const Breadcrumbs = ({ items }) => {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '4px' }}>
          <Link to="/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>
            Home
          </Link>
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <NavigateNextIcon style={{ fontSize: '18px', color: 'var(--text-muted)' }} />
              {index === items.length - 1 ? (
                <span className="current">{item.label}</span>
              ) : (
                <Link to={item.path} style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>
                  {item.label}
                </Link>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Breadcrumbs;
