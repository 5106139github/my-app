import { useEffect, useState } from 'react'

const useOnlineStatus = () => {
    let [onlinestatus , setonlinestatus] = useState(true)
    useEffect(() => {
        window.addEventListener("ofline" , () => {setonlinestatus(false)});
        window.addEventListener("online" , () => {setonlinestatus(true)})
    },[])
  return onlinestatus;
}

export default useOnlineStatus
