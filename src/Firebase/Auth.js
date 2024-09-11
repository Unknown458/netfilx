import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import config from '../Config/Config'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

class Auth {
    constructor() {
        this.app = initializeApp(config);
        this.analytics = getAnalytics(this.app);
        this.auth = getAuth();
    }
   

    async createUser({ email, password }) {
        try {
          
          const user = await createUserWithEmailAndPassword(this.auth, email, password);
          
          if (user) {
           
           return await this.login({ email, password }); 
          }
        } catch (error) {
          console.error("createUser error:", error);
        }
      }
    
      async login({ email, password }) {
        try {
         
         return await signInWithEmailAndPassword(this.auth, email, password);
      
        } catch (error) {
          console.error("login error:", error);
        }
      }

      onAuthStateChanged(callback) {
        onAuthStateChanged(this.auth, callback);
      }
    
     

           getCurrentUser() {

            return  this.auth.currentUser;
            
            
        }

        async signout(){
          await signOut(this.auth)
         }
    

}

const auth = new Auth()

export default auth