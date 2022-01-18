import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import { Input } from 'antd';
import { useNavigate} from 'react-router-dom';

export default function MainLayout(){
    const { Search } = Input;
    const navigate = useNavigate();

    const onSearch = () => {
        navigate('/productsearch');
    }

    return (
        <>
            <Header />
            <Search placeholder="search products" onSearch={onSearch} enterButton />
            <Sidebar />
            <div className="content">
                <Outlet />
            </div>
            <Footer />
        </>
    )
}