
/*
*/

var fullName       = "Meshack Shabalala";
var role           = "Computer Vision Research Engineer";

var contacts       = {};
contacts.office = "0128414391";
contacts.mobile = "0794998061";
contacts.officeEmail = "mshabalala@csir.co.za"; 
contacts.email = "bafana5@gmail.com";
contacts.github = "bafana5";
contacts.twitter = "@meshackbafana5";
contacts.instagram = "@meshackbafana";
contacts.facebook = "meshacks";
contacts.location = "Pretoria";
contacts.blog = "";
contacts.linkedin = "https://www.linkedin.com/in/meshack-shabalala-7b269a39";

var skills         = ["Computer Skills (Microsoft Office Word, Excel, Projects, Visio and PowerPoint)",
                      "Object Orientated Programming (C++, C#, Python and Java)", 
                      "Procedural Programming (C programming)",
                      "MATLAB/OCTAVE Coding & Simulink (Model Based Simulator)",
                      "HyperText Markup Language (HTML)",
                      "Cascading Style Sheets (CSS)",
                      "PHP: Hypertext Preprocessor",
                      "JavaScript", 
                      "jQuery",
                      "Machine Learning (TensorFlow)", 
                      "Server and Sun Blade CPU Cluser Maintenace",
                      "Speak, read and write English and Sepedi excellently",
                      "Speak, read and write Zulu competently",
                      "Armature Acoustic Guitar Player"];

var bio = {
	"name" : fullName,
	"role" : role,
	"contacts" : contacts,
	"picture" : "images/profile_1.jpg",
	"welcome" : "Welcome to my github C.V., Meshack B. Shabalala is an Electrical Engineer by training and \
    s currently studying towards an MSc degree in Electrical Engineering, in the \
    area of Signal Processing and Intelligent Computing, at the University of the \
    Witwatersrand in South Africa, Johannesburg. He has worked in the Power \
    Generation industry for two years. He has worked for the Council of Scientific \
    and Industrial Research (CSIR), as a Smart Card Development Engineer/Researcher \
    in the Information Security competency area which resides in the Modelling & \
    Digital Science unit for three years developing chip car based security \
    applications. He is currently embarked on a new career path at the Council of \
    Scientific and Industrial Research (CSIR) as a Image Processing Researcher in \
    the Optronics Sensor Systems competency area which resides in the Defence Peace \
    afety & Security unit.",
	"skills"  : skills
};

var workExperience = {
    "jobs" : [
        {
            "employer" : "Council for Scientific & Industrial Research (CSIR)",
            "position" : "Digital Video & Image Processing Research Engineer",
            "dates" : "1 April 2016 - Current",
            "description" : "Solve problems related to image processing using research-orientated approach. \
            Experiment design and execution of both laboratory and external field environments. \
            Mentor and coach MSc students, interns, vacation work students and employees on lower rungs. \
            Conduct data analysis, modelling and develop algorithms. \
            Publish papers in peer-reviewed journals, books and/or conferences proceedings. \
            Prepare project reports to disseminate information."
        },
        {
            "employer" : "Council for Scientific & Industrial Research (CSIR)",
            "position" : "Smart/Chip Cards & Security Applications Development Engineer/Researcher",
            "dates" : "1 January 2013 - 31 March 2016",
            "city" : "Pretoria",
            "description" : "Designing and developing new smart card applications in the area of identity authentication. \
            Implement on-card software/firmware for smart card microcontrollers. \
            Design and develop applications using secure code implementations together with cryptographic algorithms. \
            Design and implement applications for smart card performance optimisation. \
            Implement and execute software unit and functional test cases. \
            Contribute to software architecture design. \
            Provide support for Common Criteria (CC) security evaluation and payment industry certifications. \
            Contribute to effort estimation and project planning."
        },
        {
            "employer" : "Eskom (Kendal Power Station)",
            "position" : "Engineer in Training Programme",
            "dates" : "1 February 2011 - 31 December 2012",
            "city" : "Witbank",
            "description" : "<strong>Operating Training:</strong><br/> Acquire significant plant knowledge by learning the following key concepts per plant are, and give an oral presentation of each plant area to an evaluation committee. \
            Plant area components and layout. Plant area process flow and functionality. \
            Plant process parameter values (i.e. temperature, pressure & flow values). \
            Plant area control logics. Protections per specific area. Condition monitoring. \
            Plant area operating philosophy. Application of different equipment’s from an engineering point of view. \
            Understand the main function of all equipment’s utilized within the plant areas. \
            Understanding of the maintenance philosophy on different equipment. \
            The plant areas that are referred to are Coal plant, Ash plant, Turbine, Boiler and Auxiliary systems. <br/>\
            <strong>Maintenance Training:</strong><br/> \
            The electrical maintenance training is covered by on-the-job training at \
            Electrical maintenance department, Power Electronics Department, Protection, Telecommunications and Measurements Department. <br/>\
            <strong>Engineering Training:</strong><br/> \
            The engineering training is covered by the on-the-job training and courses that cover the following learning areas, \
            Plant Design and Functionality, Incident Investigations, Deficiency Management System (DMS), Long Term Plant Health, \
            Project Management, Occurrence Management System, Engineering Processes, Plant Safety Regulations & High Voltage Regulations, \
            Occupational Health and Safety Act (OHSA), PFMP, New Engineering Contracts (NEC), Life Of Plant Plan (LOPP) and TECH-PLAN <br/> \
            <strong>Works Management Training:</strong><br/> \
            Understanding the Works Management business processes or business processes, Project planning, Budgeting, \
            SAP i.e. PR and PM, Drafting/ monitoring of contracts, Drafting of task orders, Quality Control Plans, \
            Clearance certificate, Resource management, Spares management, Controlling of costs, Technical knowledge on area of plant, \
            Post outage report Safety"
        },
        {
            "employer" : "University of the Witwatersrand",
            "position" : "Software Development II Tutor",
            "dates" : "2010 - 2010",
            "city" : "Johannesburg",
            "description" : "Conducting the laboratory sessions, facilitating the laboratory review sessions \
            and invigilate exams for Software Development II"
        },
        {
            "employer" : "University of the Witwatersrand",
            "position" : "Intern",
            "dates" : "2008 - 2008",
            "city" : "Johannesburg",
            "description" : "Installed Electricity Power Audit for East Campus which involved \
            visit buildings on East Campus and auditing the installed appliance, recording the audit data, then \
            writing a detailed Technical Report"
        }
    ]
}

workExperience.display = function()
{
    for (job in workExperience.jobs)
    {
        $('#workExperience').append(HTMLworkStart);
        var formattedworkEmployer = HTMLworkEmployer.replace("%data%", workExperience.jobs[job].employer);
        var formattedworkTitle = HTMLworkTitle.replace("%data%", workExperience.jobs[job].position);
        var formattedworkDates = HTMLworkDates.replace("%data%", workExperience.jobs[job].dates);
        var formattedworkLocation = HTMLworkLocation.replace("%data%", workExperience.jobs[job].city);
        var formattedworkDescription = HTMLworkDescription.replace("%data%", workExperience.jobs[job].description);
        $('.work-entry:last').append(formattedworkEmployer);
        $('.work-entry:last').append(formattedworkTitle);
        $('.work-entry:last').append(formattedworkDates);
        $('.work-entry:last').append(formattedworkLocation);
        $('.work-entry:last').append(formattedworkDescription);
    }
}
workExperience.display();

function locationizer(workExperience)
{
    var locationArray = [];

    for (job in workExperience.jobs)
    {
        var location = workExperience.jobs[job].city;
        locationArray.push(location);
    }
    return locationArray;
}

var projects = {
    "projects" : [
        {
            "title" : "Linear Quadratic Tracker Control of the Yaw and Pitch Motions of a Model Helicopter",
            "dates" : "01 July 2010 – 30 November 2010",
            "description" : "Mathematically Model the Helicopter Dynamics, Design a Helicopter Controller \
            , Simulate and Implement the designed controller, Prototype the helicopter controller \
            , Produce a design and implementation report, and Present the solution to external examiners (Defence of the Project Solution)",
            "images" : []
        }
    ]
}
projects.display = function()
{
    for (project in projects.projects)
    {
        $('#projects').append(HTMLprojectStart);

        var formattedprojectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $('.project-entry:last').append(formattedprojectTitle);
        var formattedprojectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $('.project-entry:last').append(formattedprojectDates);
        var formattedprojectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $('.project-entry:last').append(formattedprojectDescription);

        if(projects.projects[project].images.length > 0)
        {
            for(item in projects.projects[project].images)
            {
                var formattedprojectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[item]);
                $('.project-entry:last').append(formattedprojectImage);
            }
        }
    }
}
projects.display();

var education = {
    "schools" : [
        {
            "name" : "Reitumetse Senior Secondary School",
            "qualification" : "National Senior Certificate",
            "years" : "2005",
            "city" : "Pretoria, Gauteng",
            "url" : "",
            "majors" : ["Sepedi: First Language", 
                        "English: Second Language",
                        "Mathematics (HG)",
                        "Physical Science (HG)",
                        "Biology (HG)",
                        "Geography (SG)"]
        },
        {
            "name" : "University of the Witwatersrand",
            "qualification" : "Bachelor of Science in Engineering (Electrical)",
            "years" : "2007 - 2010",
            "city" : "Johannesburg,  Gauteng",
            "url" : "www.wits.ac.za",
            "majors" : ["Electronics",
                        "Electrical Engineering", 
                        "Engineering Mathematics",
                        "Engineering Design",
                        "Software Development",
                        "Algorithms and Data Structures",
                        "Physics"]
        },
        {
            "name" : "University of KwaZulu-Natal",
            "qualification" : "Master of Science in Computer Engineering",
            "years" : "2017 - Current",
            "city" : "Durban, KwaZulu-Natal",
            "url" : "www.ukzn.ac.za",
            "majors" : ["Dissertation Title: Content Classification of Videos using Machine Learning"]
        }
    ],

    "onlineCourses" : [
        {
            "title" : "JavaScript Crash Course",
            "school" : "Udacity",
            "dates" : "2017",
            "url" : "http://www.udacity.com/course/ud804"
        },
        {
            "title" : "Computational Photography",
            "school" : "Udacity",
            "dates" : "2018",
            "url" : "http://www.udacity.com/course"
        }
    ],

    "shortCourses" : [
        {
            "title" : "Java Programming (J2SE)",
            "year" : "2013",
            "school" : "Incusdata",
            "url" : "www.incusdata.com"
        }
    ]
}

var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);
var formattedEmail  =  HTMLemail.replace("%data%", bio.contacts.email);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedInstagram = HTMLinstagram.replace("%data%", bio.contacts.instagram);
var formattedFacebook = HTMLfacebook.replace("%data%", bio.contacts.facebook);
var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
var formattedLinkedIn = HTMLlinkedin.replace("%data%", bio.contacts.linkedin);
var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedWelcomemsg = HTMLwelcomeMsg.replace("%data%", bio.welcome);

var formattedName   = HTMLheaderName.replace("%data%", fullName);
var formattedRole   = HTMLheaderRole.replace("%data%", role);

$('#header').prepend(formattedBlog);
$('#header').prepend(formattedLinkedIn);
$('#header').prepend(formattedFacebook);
$('#header').prepend(formattedInstagram);
$('#header').prepend(formattedGithub);
$('#header').prepend(formattedTwitter);
$('#header').prepend(formattedEmail);
$('#header').prepend(formattedMobile);
$('#header').prepend(formattedRole);
$('#header').prepend(formattedName);
$('#header').prepend(formattedBioPic);

$('#header').append(formattedWelcomemsg);

/* check for skills in Bio */
if(bio.skills.length > 0){
    $('#header').append(HTMLskillsStart);

    var formattedSkills = "";

    for (item in bio.skills)
    {
        formattedSkills = HTMLskills.replace("%data%", bio.skills[item]);
        $('#skills').append(formattedSkills);
    }
}


$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
});

function inName(name)
{
  name = name.trim().split(" ");
  console.log(name);

  var lastElementIndx = name.length -1;
  name[lastElementIndx] = name[lastElementIndx].toUpperCase();

  return name[0] + " " + name[1];
}
$('#main').append(internationalizeButton);
$('#mapDiv').append(googleMap);
