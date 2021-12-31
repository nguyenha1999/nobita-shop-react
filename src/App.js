import './App.css';
import {
  BrowserRouter as Router, Route, Routes
} from 'react-router-dom';
import { Layout } from 'antd';
import Header from "./layouts/Header";
import Footer from './layouts/Footer';
import Home from './pages/Home';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  const { Content } = Layout;
  return (
    <Router>
      <Layout>
        <Header />
        <Content>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Content>
        <Footer />
      </Layout>
    </Router>
  )
}

export default App;
