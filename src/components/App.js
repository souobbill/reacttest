import React          from 'react';
import {observer}     from 'mobx-react';
import '../App.css';
import Banner         from './Banner'
import Cart           from './Cart'
import ShoppingList   from './ShoppingList'
import UserStore      from '../stores/UserStore'
import LoginForm      from '../components/LoginForm'
import SubmitButton   from '../components/SubmitButton'
class App extends React.Component {

   async componentDidMount() {

    try {

      let res = await fetch('/isLoggedIn', {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      let result = await res.json();

      if(result && result.success){
        UserStore.loading = false;
        UserStore.isLoggedIn = true;
        UserStore.Username = result.Username;
      }

      else {
        UserStore.loading = false;
        UserStore.isLoggedIn = false;
      }
    }
    catch (e){

      UserStore.loading = false;
      UserStore.isLoggedIn = false;

    }

  }


  async doLogout() {

    try {

      let res = await fetch('/logout', {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      let result = await res.json();

      if(result && result.success){
        UserStore.isLoggedIn = false;
        UserStore.Username = '';
      }

    }
    catch (e){
      console.log(e)
    }
    
  }


  render (){

    if(UserStore.loading){
      return (
        <div className='App'>
          <div className='container'>
            Loading, please wait...
          </div>
        </div>
      );
    }

    else {

        if(UserStore.isLoggedIn){
          return (
            <div className='App'>
              <div className='container'>
               Welcom {UserStore.username}

              <SubmitButton
                  text = {'Log Out'}
                  disable = {false}
                  onClick = { () => this.doLogout() }
              />

              </div>
            </div>
          );
        }
      return (
        <div className='App'>
          {/*<Banner /> 
          <Cart />
          <ShoppingList />
          <SubmitButton
                  text = {'Log Out'}
                  disable = {false}
                  onClick = { () => this.doLogout() }
              />*/}
          <LoginForm /> 
        </div>
      );
    }
}
}

export default observer(App);
