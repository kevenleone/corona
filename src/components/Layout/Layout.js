import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'reactstrap';
import Sidebar from './Sidebar';
import Header from './Header';
import './Layout.scss';

export default function Layout({ children }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: 'GET_ALL_INSIGHTS_SAGA', payload: { showLoading: true } });
    setInterval(() => {
      dispatch({ type: 'GET_ALL_INSIGHTS_SAGA' });
    }, 60000);
  }, [dispatch]);

  return (
    <div className="Layout">
      <Header />
      <Sidebar />
      <main className="content">
        <div className="children_content">
          <Button active color="secondary">Mapa Mundi</Button>
          <Button>Mapa Mundi</Button>
          { children }
        </div>
      </main>
    </div>
  );
}
