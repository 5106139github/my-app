/* eslint-disable react-hooks/exhaustive-deps */
import  { useEffect, useState } from 'react'
import { MENU_URL } from './contents';

const useRestaurentMenu = (resId) => {
    const [resinfo, setresinfo] = useState(null);

    useEffect(() => {
        apidata();
      }, []);
    
      const apidata = async () => {
        const apidata = await fetch(MENU_URL + resId);
        let api = await apidata.json();
        setresinfo(api);
      };

  return resinfo
}

export default useRestaurentMenu
