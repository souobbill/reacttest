import { extendObservable } from 'mobx';
import '../App.css';
class UserStore {
    constructor() {
        extendObservable(this, {

            loading: true,
            isLoggedIn : false,
            username: ''

        })
    }
}

export default new UserStore();