import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Sidebar from './Sidebar';
import Header from './Header';
import './Layout.scss';

export default function Layout({ children }) {
  const dispatch = useDispatch();
  const { location: { hash } } = useSelector((state) => state.general);
  useEffect(() => {
    dispatch({ type: 'GET_ALL_INSIGHTS_SAGA', payload: { showLoading: true } });
    setInterval(() => {
      dispatch({ type: 'GET_ALL_INSIGHTS_SAGA' });
    }, 60000);
  }, [dispatch]);

  function isActive(path) {
    return path === hash ? 'active' : '';
  }
  return (
    <div className="Layout">
      <Header />
      <Sidebar />
      <main className="content">
        <div className="children_content">
          <div className="tabs">
            <Link to="/" className={`btn btn-secondary ${isActive('#/')}`}>Map</Link>
            <Link to="/countries" className={`btn btn-secondary ${isActive('#/countries')}`}>Countries Info</Link>
          </div>
          { children }
        </div>
      </main>
    </div>
  );
}
