
/*
 * Article RESTful.
 */

module.exports = {
    read : function(req, res){
        console.log('message from read');
        console.log(req.params.id);
        res.send({id:123});
    },
    create : function(req, res){
        console.log('message from create');
        console.log(req.body);
        res.send({status: true});
    },
    update : function(req, res){
        console.log('message from update');
        console.log(req.body);
        res.send(true);
    },
    delete : function(req, res){
        console.log('message from delete');
        console.log(req.params.id);
        res.send(true);
    }
};
