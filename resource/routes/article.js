
/*
 * Article RESTful.
 */

module.exports = {
    read : function(req, res){
        console.log('message from read');
        console.log(req.params.id);
        res.send("read");
    },
    create : function(req, res){
        console.log('message from create');
        console.log(req.body);
        res.send("create");
    },
    update : function(req, res){
        console.log('message from update');
        console.log(req.body);
        res.send("update");
    },
    delete : function(req, res){
        console.log('message from delete');
        console.log(req.params.id);
        res.send("delete");
    }
};
