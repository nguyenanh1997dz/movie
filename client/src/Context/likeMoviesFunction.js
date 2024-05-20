import toast from "react-hot-toast";
import { likeMovieAction } from "../Redux/Action/userAction";

const likeMovieFunc = (id,userInfo,dispatch) => {
    if (!userInfo) {
       return toast.error("You need login to like a movie")
    }
    dispatch(likeMovieAction(id))
}

export {likeMovieFunc,isLikeMovie}
