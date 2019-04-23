*  Postman control
*  Post error handling
*  findByIdAndRemove (id, options, callback)
*  findByIdAndUpdate (id, update, options, callback
*  index: "2dsphere" 是一个球体，A点去B点，能从前面也能从后面到达
*  ref html tag

<p>在database做完schema和model, exports出去</p>

``` javascript
const Yz = mongoose.model('collectionName', 'schemaName')
module.exports = Yz
```

<p>在需要require进来的文件夹</p>

``` javascript
const Yz = require('urlDataBase');
```

<p>记得要连接database，不必去做 在Schema和model那边命名，没有的话他会自动create</p>

``` javascript
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/yee', { useNewUrlParser: true }, (err) => {
    if(!err){console.log('Mongoose connected')}
    else{console.log('Error in DB connection')}
});
```

-----------------

## POST Error handling

#### 如果在post时出现error，要怎样handle error呢
<p>出现error catch next，意思是去找middleware的 error handling</p>

``` javascript
router.post('/yz', (req, res, next) => {
    Yz.create(req.body)
      .then( yz => { 

    }).catch(next);
}
```

<p>注意：要写到 route的下面，status 422是设置422 然后再send err里message的信息看看是什么错误</p>

``` javascript
app.use(function(err, req, res, next){
    res.status(422).send({error: err.message});
})
```

---------------

## ref html tag
<p>为了进入里面拿取value</p>

``` html
<input type="text" ref="lng" placeholder="longtitude" required />
```

``` javascript 
handleSubmit: function(e){
    e.preventDefault();
    let lng = this.refs.lng.value;
    let lat = this.refs.lat.value;
}
```


#### React 解说
<p>第一步就是submit后，它拿取lng和lat的value，过后就去backend app.get那边</p>
<p>然后json储存下来更新state的资料，过后对json map 渲染去网页</p>

