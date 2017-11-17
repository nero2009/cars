import {LOGINURL} from './Constants'

export const Service=(baseUrl,Axios,token)=>{
    const instance = Axios.create({
      baseURL: baseUrl,
      headers: {'Authorization': token}
    });
    
    
        
      const getApiUrl=(controller,action)=>{
        return `${controller}/${action}/`;
    }
    
     const getItem=(controller,action,id)=>{
        //const id=parseInt(window.location.href.split('/').pop());
        return instance.get(getApiUrl(controller,action)+id);
    }
    const login=(controller,action,data)=>{
        return instance.post(getApiUrl(controller,action),data);
     }

     const getAllItems=(controller,action,data)=>{
        return instance.post(getApiUrl(controller,action),data);
     }
   
     const updateItem=(controller,action,data,id)=>{
        return instance.put(getApiUrl(controller,action)+id,data);
    }
    
     const createItem=(data,controller,action)=>{
        return instance.post(getApiUrl(controller,action),data);
    }
    
     const deleteItem=(controller,action,id,data={})=>{
        return instance.delete(getApiUrl(controller,action)+id,data);
    }
    
    
        return {
            getItem,
            getAllItems,
            updateItem,
            createItem,
            deleteItem
        }
    
    }

    export const AuthService=(baseUrl,Axios)=>{
        const instance = Axios.create({
          baseURL: baseUrl
        });
        
        const login=data=>instance.post(LOGINURL,data)
    
        
        
            return {
                login
            }
        
        }
    
  