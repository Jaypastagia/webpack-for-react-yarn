import React from 'react';
import { Link } from 'react-router-dom';

import Layout from './Layout';

const Home2 = () => {
  return (
    <Layout>
      <p>Home 2</p>
      <p>
        <Link to="/">Navigate to Home</Link>
      </p>
    </Layout>
  );
};

export default Home2;