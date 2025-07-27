export const addBlog = async (req, res) => {
    try{
        const {title, subTitle, description, category, isPublished, image} = JSON.parse(req.body.blog);

        const imageFile = req.file;

        if(!title || !description || !category || !imageFile){
            return res.json({success: false, message: "missing fields"})
        }

    } catch (error){
        console.log(error.message);
    }
}