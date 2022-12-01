export const renderHome=(req,res)=>{
    res.render('home',{
        'variable': Math.PI
    })
}