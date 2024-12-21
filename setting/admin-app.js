import { sqlmap } from "../server.js"
export const admin_func= function (req, res){
// res.send('this is admin router...')
sqlmap.query('SELECT * FROM person ORDER BY id',(err, data)=>{
    if(err) throw new Array('My Error: ', err);
    else res.json({data})
})

}

