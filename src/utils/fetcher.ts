import axios from 'axios';
import { getCookie } from '@/utils/cookie';


const fetcher = (url: string) => {

    axios
        .get(url, {
            withCredentials: true,
            headers: {
                "X-ACCESS-TOKEN": getCookie("loginCookie")

            }
        })
        .then((response) => {
            console.log(response.data);

        });
}
export default fetcher;
