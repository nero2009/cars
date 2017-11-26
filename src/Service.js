import {LOGINURL,GET_ALL_CAR_STAND_URL,GET_ALL_STATES_URL,CREATE_CAR_STAND_URL} from './Constants'

export const Service=(baseUrl,Axios,token)=>{
    const instance = Axios.create({
      baseURL: baseUrl,
      headers: {'Authorization': `Bearer ${token}`}
    });
    
    const getAllCarStands=()=>instance.get(GET_ALL_CAR_STAND_URL);
    const getAllStates=()=>instance.get(GET_ALL_STATES_URL);
    const CreateCarStand=data=>instance.post(CREATE_CAR_STAND_URL,data)
        
      const getApiUrl=(controller,action)=>{
        return `${controller}/${action}/`;
    }
    const getApiUrl2=(controller,action)=>{
        return `${controller}/${action}`;
    }
    
     const getItem=(controller,action,id)=>{
        return instance.get(getApiUrl(controller,action)+id);
    }
    const getItems=(controller,action)=>{
        return instance.get(getApiUrl2(controller,action));
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
        return instance.post(getApiUrl2(controller,action),data);
    }
    
     const deleteItem=(controller,action,id,data={})=>{
        return instance.delete(getApiUrl(controller,action)+id,data);
    }
    
    
        return {
            getItem,
            getAllItems,
            updateItem,
            createItem,
            deleteItem,
            getAllCarStands,
            getAllStates,
            CreateCarStand,
            getItems
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
    
  