// include dependencies [#include]
var express = require('express') // web server , routing
var bodyParser = require('body-parser') // get value from input
var session = require('express-session')
var cookieParser = require('cookie-parser')
var app = express() // call constructor


// middleware
var history = []

var bodyParser = bodyParser.urlencoded({ extended: false })
app.use(cookieParser())
app.use(express.static(__dirname + '/public'))
app.use(session({secret : 'test',resave: false,saveUninitialized: true}))
// set template engine , template folder
app.set('views','./views')
app.set('view engine','ejs')

// Routing
// app.[Method](route path,callback)
// [Method] GET,POST,DELETE,PUT,PATCH
app.get('/login', function(req,res){

	res.render('login',{history: history,ck : req.cookies})
})

app.post('/home',bodyParser, function(req,res){
	var date = new Date()
	var day = date.getDate()
  	var monthIndex = date.getMonth()
  	var year = date.getFullYear()
  	var hour = date.getHours()
  	var min = date.getMinutes()
  	var sec = date.getSeconds()
	var time = day + '/' + monthIndex + '/' + year + ' ' + hour + ':' + min + ':' + sec


//------------------------------------------------------------------------------------------------------------

var router = express.Router(); 
var bodyParser = require('body-parser')
var projects = []

//------------------------------------------------------------------------------------------------------------
	// new user
	var tmp = {
		// unique session id , auto generate
		session_id : req.session.id,
		// usrename from input form
		username : req.body.username,
		// date now
		time : [time]
	}

	var found = false
	for(var i = 0; i < history.length; i++){
		if(history[i].username === req.body.username){
			history[i].session_id = req.session.id
			history[i].time.push(time)
			found = true
			break;
		}
	}

	if(!found)
		history.push(tmp)

	res.cookie('logged',req.body.username)
	res.render('home',{history: history,ck : req.cookies})
	//res.redirect('/index')


//------------------------------------------------------------------------------------------------------------
app.use(express.static('views'))
var idx = 0
router.route('/projects') 	  
    .get(function(req, res) {    	
    	res.json(projects);
    })

	.post(function(req, res) { 
		var project = {}; 
		project.id = idx++;
		project.StudentID = req.body.StudentID
		console.log(req.body.StudentID)
		project.Name = req.body.Name
		project.Room = req.body.Room
		project.Date = req.body.Date
		project.Teacher = req.body.Teacher
		project.Details = req.body.Details
		projects.push(project); 
		res.json({StudentID : 'Success'})
	}) 

router.route('/projects/:project_id')
	.get (function(req,res) {
    	res.json(projects[req.params.project_id])
    })

	.put (function(req,res) {
		var id = req.params.project_id
        projects[id].StudentID = req.body.StudentID;  
        projects[id].Name = req.body.Name;
        projects[id].Room = req.body.Room ;
        projects[id].Date =  req.body.Date;
        projects[id].Teacher = req.body.Teacher ;
        projects[id].Details = req.body.Details ;
        res.json({ StudentID: 'project updated!' });        
     })

	.delete (function(req,res) {
		var id = req.params.project_id
		delete 	projects[id]
        res.json({ StudentID: 'project deleted!' });        
    })
router.get('/', function(req, res) {
    res.json({ StudentID: 'hooray! welcome to our api!' }) 
});

app.use('/api', bodyParser.json(), router);  
 //------------------------------------------------------------------------------------------------------------

})


app.listen(50028,function(){
	console.log("Server is running")
})