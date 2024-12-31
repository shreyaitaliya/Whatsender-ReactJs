import React from 'react';
import { Route, Routes as RouterRoutes } from 'react-router-dom';
import Home from '../Pages/Home';
import Main from '../Components/Main';
import Register from '../Pages/Register';
import Login from '../Pages/Login';
import Order from '../Pages/Order';
import Subscription from '../Pages/Subscription';
import Addsubscription from '../Pages/Addsubscription';
import Device from '../Pages/Device';
import Apps from '../Pages/Apps';
import Contacts from '../Pages/Contacts';
import Templates from '../Pages/Templates';
import Schedual from '../Pages/Schedual';
import Message from '../Pages/Message';
import Notification from '../Pages/Notification';
import Blog from '../Pages/Blog';
import Blogcreate from '../Pages/Blogcreate';
import Category from '../Pages/Category';
import Tag from '../Pages/Tag';
import Faq from '../Pages/Faq';
import Feature from '../Pages/Feature';
import Addfeature from '../Pages/Addfeature';
import Editfeature from '../Pages/Editfeature';
import Testimonial from '../Pages/Testimonial';

const Routes = () => {
    return (
        <RouterRoutes>
            <Route path='/' element={<Login />} />
            <Route path='/register' element={<Register />} />

            <Route path='/' element={<Main />}>
                <Route path='/dashboard' element={<Home />} />

                <Route path='/order' element={<Order />} />

                <Route path='/subscription' element={<Subscription />} />

                <Route path='/add_plan' element={<Addsubscription />} />

                <Route path='/device' element={<Device />} />

                <Route path='/app' element={<Apps />} />

                <Route path='/contact' element={<Contacts />} />

                <Route path='/template' element={<Templates />} />

                <Route path='/schedual' element={<Schedual />} />

                <Route path='/message' element={<Message />} />

                <Route path='/notification' element={<Notification />} />

                <Route path='/blog' element={<Blog />} />

                <Route path='/create_blog' element={<Blogcreate />} />

                <Route path='/category' element={<Category />} />

                <Route path='/tag' element={<Tag />} />

                <Route path='/faq' element={<Faq />} />

                <Route path='/feature' element={<Feature />} />

                <Route path='/add_feature' element={<Addfeature />} />

                <Route path='/edit_feature' element={<Editfeature />} />

                <Route path='/testimonial' element={<Testimonial />} />

            </Route >


        </RouterRoutes >
    );
}

export default Routes;