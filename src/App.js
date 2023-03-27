import './App.scss';
import store  from './redux/store';
import { Provider } from 'react-redux';
import { Layout } from 'antd';
import MainHeader from './components/Header/MainHeader';
import MainContent from './components/Content/mainContent/MainContent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginContainer from './components/Content/Login-SignUp/LoginContainer';
import SignUpContainer from './components/Content/Login-SignUp/SignUpContainer';
import ProductContainer from './components/Content/Products/ProductContainer';
import SearchPage from './components/Header/SearchPage';
import CartContainer from './components/Content/Cart/CartContainer';
import ProfileContainer from './components/Content/Profile/ProfileContainer';

const { Header, Content } = Layout;

function App() {
  return (
    <BrowserRouter>
    <Provider store={store}>
        <Layout>

          <Header className='headerStyle'> 
            <MainHeader/>
          </Header>

          <Content className='contentStyle'>
          <Routes>
           
            <Route path='/' element={<MainContent/>}/>
            <Route path='/login' element={<LoginContainer/>} />
            <Route path='/SignUp' element={<SignUpContainer/>} />
            <Route path='/Products/:id' element={<ProductContainer/>} />           
            <Route path='/Search/:filterData' element={<SearchPage/>} />  
            <Route path='/Cart' element={<CartContainer/>} />
            <Route path='/profile/:id' element={<ProfileContainer/>} />
                   
                        
          </Routes>
          </Content>

        </Layout>
        
      
    </Provider>
    </BrowserRouter>
  );
}

export default App;
