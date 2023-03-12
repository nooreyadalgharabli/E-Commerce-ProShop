import './App.scss';
import store  from './redux/store';
import { Provider } from 'react-redux';
import { Layout } from 'antd';
import MainHeader from './components/Header/MainHeader';
import MainContent from './components/Content/mainContent/MainContent';
const { Header, Content } = Layout;


function App() {
  return (
    <Provider store={store}>
        <Layout>

          <Header className='headerStyle'> 
            <MainHeader/>
          </Header>

          <Content className='contentStyle'>
            <MainContent/>
          </Content>

        </Layout>
        
      
    </Provider>
  );
}

export default App;
