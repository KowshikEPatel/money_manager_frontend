import './Sidebar.css'
import {Link} from 'react-router-dom'

export default function Sidebar(){
    return <>
    <div class="sidenav">
            <a><Link to="/">Home</Link></a>
            <a><Link to="/users">Users</Link></a>
            <a><Link to="/product">Product</Link></a>
    </div>
    </>
}

