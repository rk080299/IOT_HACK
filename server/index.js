// var marker = require('../static/app.js');
var server = require('ws').Server;
var s = new server({port: 5001});
var s1 = new server({port: 5002});
const shell = require('shelljs');


s.on('connection',function(ws){
	 ws.on('message',function(message){
	 	//console.log("RFID : " + message);
	var mess = message.split(",");
	var name =mess[0];
	var emer_cont = mess[1];
	var license = mess[2];
	var lat = mess[3];
	var longi = mess[4];
	var acc = mess[5];
	var date = new Date();
	if(name=="John_Doe")
	{
	console.log("\n\n\n_____________________________________\n\nAccident occured at     : (" + lat+","+longi+")"+
															 "\nName                    : "+ name +
															 "\nEmergency Contact       :"+emer_cont+
															 "\nvehicle license plate   :"+license+
															 "\nNet acc                 :"+acc+
															 "\nDate and Time           :"+date+
															 "\n_____________________________________\n\n");
	}
		// console.log(obj);
		 const fs = require('fs');
		 const PDFDocument = require('pdfkit');
		// Create a document
	const doc = new PDFDocument;
	doc.pipe(fs.createWriteStream('Result1.pdf'));
		doc.fontSize(25)
			 .text("\n       Proof of Accident\n\n",{align:'center'});
		doc.fontSize(15)
			 .text("This is to certify that " + name + " car having license no "
			+license+" met with an accident at"+date+" and Experienced max acceleration of "
			+acc+"ms-2.");

	 doc.end();
	 //var cmd= emer_cont +" "+ name+ " "+license+" "+lat+" "+longi+" "+date
	 const exec = require('child_process').exec;

	 s.clients.forEach(function e(client){
 	 	if(client==ws){
		 console.log("RFID and Location : " +  message);

			if(name=="John_Doe"){

				var yourscript = exec('sh script.sh' ,
								(error, stdout, stderr) => {
										console.log(stdout);
										console.log(stderr);
										if (error !== null) {
												console.log(`exec error: ${error}`);
										}
								});
			// //	shell.exec("./script");
			}
			}
			console.log("Hello");
		client.send(String(lat)+ "," +String(longi));
	 });

	 });
});


s1.on('connection',function(ws){
	 ws.on('message',function(message){
	 //console.log("RFID and Location : " +  message);
	 // var dat = message.split(",");
	 // marker.markerposition(null,null);
	 // marker.markerposition(dat[0],dat[1]);
	 s1.clients.forEach(function e(client){
	 	if(client==ws)
     console.log(message);
	 		client.send(message);

	 });

});
});
