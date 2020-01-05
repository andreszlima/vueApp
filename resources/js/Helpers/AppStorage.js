class AppStorage{

    storeUser(user){
        localStorage.setItem('user', user);
    }

    storeToken(token){
        localStorage.setItem('token', token);
    }

    store(user, token){
        this.storeUser(user);
        this.storeToken(token);
    }

    clear(){
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    }

    getToken(){
        return localStorage.getItem('token')
    }

    getUser(){
        return localStorage.getItem('user')
    }
}

export default AppStorage = new AppStorage();
