
/*
*/
var name      = "Meshack Shabalala";
var role      = "Digital Video & Image Processing Research Engineer";
var contacts  = ["0128414391", "mshabalala@csir.co.za", "bafana5@gmail.com"]
var skills    = ["Java Programming", "C++", "Python"]

var bio = {
	"name" : name,
	"role" : role,
	"contacts" : contacts,
	"picture" : "pic",
	"welcome" : "Hello out there",
	"skills"  : skills
};

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);


$('#header').prepend(formattedName);
$('#header').append(formattedRole);

// console.log(firstName)
// $("#main").append("Meshack Shabalala")