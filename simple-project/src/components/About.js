

 
  import Header from './Header';
  import Menu from './Menu';
  import Footer from './Footer';
  import Login from './Login';
  import {Link,Outlet} from 'react-router-dom';
  
  const  About=() => {
      
    return (
      <div style={{ padding: 20 }}>
      <h2>About View</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
      <Link to="/" style={{ padding: 5 }}>
        Home
      </Link>
      <Outlet />
    </div>
    );
    };
    export default About;