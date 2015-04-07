var bio = {
	"name": "Vitali",
	"role": "Front Row Student",
	"skills": ["learning", "thinking"],
	"contacts": {
		"mobile": "050 363",
		"email": "vr@gm.com",
		"github": "linna",
		"location": "Finland"
	},
	"bioPic": "images/VitaliReif_3-2.jpg",
	"welcomeMessage": "This is my Front-End resume",
}

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);

var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedName);

var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedLocation);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(formattedMobile);

var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedEmail);

var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedGithub);

var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(formattedPic);

var formattedWelcomeMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedWelcomeMessage);


if(bio.skills.length > 0) {

$("#header").append(HTMLskillsStart);

var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
$("#skills").append(formattedSkill);

var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
$("#skills").append(formattedSkill);

}

var education = {
	"schools": [
		{
			"name": "Oulu University of Applied Sciences",
			"location": "Oulu",
			"degree": "BBA",
			"majors": ["IT", "Business"],
			"dates": "2008-2011",
			"url": "http://oamk.fi"
		},

		{
			"name": "University of Oulu",
			"location": "Oulu",
			"degree": "PhD",
			"majors": "Animal Ecology",
			"dates": "2000-2008",
			"url": "http://oulu.fi"
		}
	],

	"onlineCourses": [
		{
			"title": "JavaScript",
			"school": "Udacity",
			"dates": 2015,
			"url": "http://www.udacity.com/course/ud804"
		},

		{
			"title": "Intro to HTML and CSS",
			"school": "Udacity",
			"dates": 2015,
			"url": "http://www.udacity.com/course/ud804"
		}
	]
}

var work = {
	"jobs": [
		{
			"title": "Web Specialist",
			"employer": "F-Secure",
			"location": "Helsinki",
			"dates": 2014,
			"description": "content editing"
		},

		{
			"title": "UX Specialist",
			"employer": "LumoLink",
			"location": "Oulu",
			"dates": 2013,
			"description": "user studies, usability testing"
		},

		{
			"title": "UX trainee",
			"employer": "FixUi",
			"location": "Oulu",
			"dates": 2012,
			"description": "usability evaluation, lecture materials"
		}
	]	
}

for (job in work.jobs) {

	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;

	$(".work-entry:last").append(formattedEmployerTitle);

	var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);

	$(".work-entry:last").append(formattedWorkLocation);

	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	
	$(".work-entry:last").append(formattedDates);

	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

	$(".work-entry:last").append(formattedDescription);

}



var projects = {
	"projects": [
		{
			"name": "Usability evaluation of a digital marketing tool",
			"customer": "Hakema",
			"dates": 2014
		},

		{
			"name": "Feedback on user experience of a web/mobile app",
			"customer": "TinyApp",
			"dates": 2015
		}
	]
}

/*
for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;

	$(".work-entry:last").append(formattedEmployerTitle);

}

 */