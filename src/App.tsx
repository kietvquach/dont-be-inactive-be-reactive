import { ApolloProvider } from '@apollo/client';
import { Col, Row } from 'antd';
import Layout, { Content, Footer, Header } from 'antd/lib/layout/layout';
import apolloClient from './ApolloClient';
import './App.css';
import AddForm from './components/AddForm';
import ItemList from './components/ItemList';
import Timer from './components/Timer';

const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <Layout style={{ minHeight: '100vh' }}>
        <Header 
          style={{ backgroundColor: 'white', textAlign: 'center' }}>
            <h1>Don't be inactive, be reactive!</h1>
        </Header>
        <Content style={{ backgroundColor: 'white' }}>
          <Row justify='center' align='top' gutter={[16, 16]}>
            <Col span={8}>
              <AddForm />
            </Col>
            <Col span={8}>
              <ItemList />
            </Col>
          </Row>
        </Content>
        <Footer style={{ backgroundColor: 'white', position: 'sticky', bottom: '0', textAlign: 'center' }}>
            <Timer />
        </Footer>
      </Layout>
    </ApolloProvider>
  );
}

export default App;
