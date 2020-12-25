import { BrowserRouter, Route, Link } from "react-router-dom"
import React from 'react'
import Page1 from '../Page1/Page1'
import Page2 from '../Page2/Page2'
import Page3 from '../Page3/Page3'
import {Title} from  '../Title/Title'

class Home extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Title title="功能選單" />
                    <ul>
                        {/*Link組件中的to會改變網址，但不會刷新頁面*/}
                        <li><Link to="/Page1">Page1</Link></li>
                        <li><Link to="/Page2">Page2</Link></li>
                        <li><Link to="/Page3">Page3</Link></li>
                    </ul>
                    <hr />
                    <Route path="/Page1" component={Page1} />
                    <Route path="/Page2" component={Page2} />
                    <Route path="/Page3" component={Page3} />
                </div>
            </BrowserRouter>
        )

    }
}
export default Home