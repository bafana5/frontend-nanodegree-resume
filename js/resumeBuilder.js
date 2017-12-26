
/*
*/

var fullName       = "Meshack B. Shabalala";
var role           = "Computer Vision Research Engineer";

var contacts       = {};
contacts.office = "0128414391";
contacts.mobile = "0794998061";
contacts.officeEmail = "mshabalala@csir.co.za"; 
contacts.email = "bafana5@gmail.com";

var skills         = ["Java Programming", 
                      "C/C++", 
                      "Python", 
                      "PHP", 
                      "JavaScript", 
                      "HTML/CSS", 
                      "MATLAB/OCTAVE", 
                      "Server and CPU Cluser Maintenace"];
                      
var bio = {
	"name" : fullName,
	"role" : role,
	"contacts" : contacts,
	"picture" : "images/profile_1.jpg",
	"welcome" : "Hello out there",
	"skills"  : skills
};

var workExperience = {
    "jobs" : [
        {
            "employer" : "University of the Witwatersrand",
            "position" : "Software Development II Tutor",
            "dates" : "2010",
            "city" : "Johannesburg, Gauteng",
            "description" : "Conducting the laboratory sessions, facilitating the laboratory review sessions \
            and invigilate exams for Software Development II"
        },
        {
            "employer" : "University of the Witwatersrand",
            "position" : "Intern",
            "dates" : "2008",
            "city" : "Johannesburg, Gauteng",
            "description" : "Installed Electricity Power Audit for East Campus which involved \
            visit buildings on East Campus and auditing the installed appliance, recording the audit data, then \
            writing a detailed Technical Report"
        }
    ]
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
            "school" : "Udacity"
        },
        {
            "title" : "Computational Photography",
            "school" : "Udacity"
        }
    ],

    "shortCourses" : [
        {
            "title" : "Java Programming (J2SE)",
            "year" : "2013",
            "school" : ""
        }
    ]
}

// var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);
// var formattedEmail  =  HTMLemail.replace("%data%", bio.contacts[3]);
// var formattedMobile = HTMLmobile.replace("%data%", bio.contacts[1]);
// var formattedName   = HTMLheaderName.replace("%data%", fullName);
// var formattedRole   = HTMLheaderRole.replace("%data%", role);


// $('#header').prepend(formattedEmail);
// $('#header').prepend(formattedMobile);
// $('#header').prepend(formattedRole);
// $('#header').prepend(formattedName);
// $('#header').prepend(formattedBioPic);
