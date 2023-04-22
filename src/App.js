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
import Authorization from './Auth/Authorization';
import NotAuthorize from './Auth/NotAuthorize';
import ReviewOrder from './components/Content/Cart/ReviewOrder/ReviewOrder';

const { Header, Content } = Layout;

function App() {
  // const isAuthLogin = useSelector((state) => state.Login);
  // const isAuthSignUp = useSelector((state) => state.SignUp);
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
            <Route path='/login' element={ <Authorization>  <LoginContainer/>  </Authorization>} />
            <Route path='/SignUp' element={<Authorization>   <SignUpContainer/>   </Authorization> } />
            <Route path='/Products/:id' element={<ProductContainer/>} />           
            <Route path='/Search/:filterData' element={<SearchPage/>} />  
            <Route path='/Cart' element={<CartContainer/>} />
            <Route path='/profile/:id' element={<NotAuthorize> <ProfileContainer/> </NotAuthorize> } />
            <Route path='/Order' element={<ReviewOrder/>} />      
                        
          </Routes>
          </Content>

        </Layout>
        
      
    </Provider>
    </BrowserRouter>
  );
}

export default App;
