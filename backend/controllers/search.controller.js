import User from "../models/user.model.js"
import { fetchFromTMDB } from "../services/tmdb.service.js"

export const serachPerson = async (req, res) => {
    const { query } = req.params;

    try {
        const response = await fetchFromTMDB(`https://api.themoviedb.org/3/search/person?query=${query}&include_adult=false&language=en-US&page=1`);

        if (!response || response.results.length === 0) {
            return res.status(404).send(null);
        }

        await User.findByIdAndUpdate(req.user._id, {
            $push: {
                searchHistory: {
                    id: response.results[0].id,
                    image: response.results[0].profile_path,
                    title: response.results[0].name,
                    searchType: "person",
                    createdAt: new Date(),
                }
            }
        });

        res.status(200).json({ success: true, content: response.results });
    } catch (error) {
        console.log("Error in searchPerson controller:", error.message);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};


export const serachMovie = async ( req , res ) => {
    const { query } = req.params

    try {
        const response = await fetchFromTMDB(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1'`)

        if (response.results.length === 0) {
            return res.status(404).send(null)
        }

        await User.findByIdAndUpdate(req.user._id , {
            $push : {
                searchHistory : {
                    id : response.results[0].id,
                    image : response.results[0].profile_path , 
                    title : response.results[0].name ,
                    searchType : "movie" ,
                    createdAt : new Date(),
                }
            }
        }) // user._id got from protectRoutes's req.user = user 

        res.status(200).json({ success : true , content : response.results})
    } catch (error) {
        console.log("Error in serachMovie controller:" , error.message)
        res.status(500).json({ success : false , messsage : "Internal Server Error"})
    }
}


export const serachTv = async ( req , res ) => {
    const { query } = req.params

    try {
        const response = await fetchFromTMDB(`https://api.themoviedb.org/3/search/tv?query=${query}&include_adult=false&language=en-US&page=1`)

        if (response.results.length === 0) {
            return res.status(404).send(null)
        }

        await User.findByIdAndUpdate(req.user._id , {
            $push : {
                searchHistory : {
                    id : response.results[0].id,
                    image : response.results[0].profile_path , 
                    title : response.results[0].name ,
                    searchType : "tv" ,
                    createdAt : new Date(),
                }
            }
        }) // user._id got from protectRoutes's req.user = user 

        res.status(200).json({ success : true , content : response.results})
    } catch (error) {
        console.log("Error in serachTv controller:" , error.message)
        res.status(500).json({ success : false , messsage : "Internal Server Error"})
    }
}

export const getSearchHistory = async (req, res) => {
    try {
        res.status(200).json({ success: true, content: req.user.searchHistory });
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};

export const removeItemFromSearchHistory = async ( req , res ) => {
    let  { id } = req.params 

    id = parseInt(id) // converted because string can't be delete from mongodb

    try {
        await User.findByIdAndDelete(req.user._id , {
            $pull : {
                searchHistory : { id : id}
            }
        })

        res.status(200).json({ success : true , message : "Item removed from search history"})
    } catch (error) {
        res.status(500).json({ success : false , messsage : "Internal Server Error"})
    }
}