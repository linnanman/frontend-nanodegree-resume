// BIO

var bio = {
	"name": "Vitali Reif",
	"role": "Front Row Student",
	"skills": ["learning", "thinking", "implementing"],
	"contacts": {
		"mobile": "050 363",
		"email": "vr@gm.com",
		"github": "linna",
		"location": "Espoo, Finland"
	},
	"bioPic": "images/VitaliReif_3-2.jpg",
	"welcomeMessage": "This is my Front-End resume",
}

bio.display = function() {

	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);

	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedName);

	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedLocation);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts").append(formattedMobile);
	$("#footerContacts").append(formattedMobile);

	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").append(formattedEmail);
	$("#footerContacts").append(formattedEmail);

	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").append(formattedGithub);
	$("#footerContacts").append(formattedGithub);

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

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);

	}
}

bio.display();

// WORK EXPERIENCE

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

work.display = function() {

	for (job in work.jobs) {
		// creat new div for work experience
		$("#workExperience").append(HTMLworkStart);
		// concat employer and title
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;

		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

		$(".work-entry:last").append(formattedDescription);

	}
}

work.display();

// PROJECTS

var sideProjects = {

	"projects": [

		{
			"title": "Hakema",
			"description": "Usability evaluation of a digital marketing tool",
			"dates": 2014,
			"images": "images/project1.png"
		},

		{
			"title": "TinyApp",
			"description": "Feedback on user experience of a web/mobile app",
			"dates": 2015,
			"images": "images/project2.png"
		}
	]
}

projects.display = function() {

	for (project in sideProjects.projects) {
		// creat new div for projects
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", sideProjects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", sideProjects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", sideProjects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		var formattedProjectImage = HTMLprojectImage.replace("%data%", sideProjects.projects[project].images);
		$(".project-entry:last").append(formattedProjectImage);

		/*if (sideProjects.projects[project].images.length > 0) {
			for (image in sideProjects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", sideProjects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}*/
	}
}

projects.display();

// EDUCATION

education.display = function() {

var education = {
	
	"schools": [
	
		{
			"name": "Oulu University of Applied Sciences",
			"degree": "BBA",
			"majors": "IT, Business",
			"dates": "2008-2011",
			"url": "http://oamk.fi"
		},

		{
			"name": "University of Oulu",
			"degree": "PhD",
			"majors": "Animal Ecology",
			"dates": "2000-2008",
			"url": "http://www.oulu.fi/english/"
		}
	],

	"onlineCourses": [
		
		{
			"title": "JavaScript",
			"school": "Udacity",
			"dates": 2015,
			"url": "http://www.udacity.com/"
		},

		{
			"title": "<br>Intro to HTML and CSS",
			"school": "Udacity",
			"dates": 2015,
			"url": "http://www.udacity.com/"
		}
	]
}

	for (school in education.schools) {
		
		$("#education").append(HTMLschoolStart);
		
		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		
		var formattedNameDegree = formattedSchoolName + formattedDegree;
			
		$(".education-entry:last").append(formattedNameDegree);

		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedSchoolDates);

		var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
		$(".education-entry:last").append(formattedMajors);

		var url = education.schools[school].url;
		$(".education-entry:last a").attr("href", url);


	}

	$("#education").append(HTMLonlineClasses);

	for (course in education.onlineCourses) {

		$("#education").append(HTMLschoolStart);		

		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
		$(".education-entry:last").append(formattedOnlineTitle);
		
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		$(".education-entry:last").append(formattedOnlineSchool);
		
		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
		$(".education-entry:last").append(formattedOnlineDates);

		var url = education.onlineCourses[course].url;
		$(".education-entry:last a").attr("href", url);
	}
}

education.display();

$("#mapDiv").append(googleMap);

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});

// ANIMATION FOR SECTIONS

$(document).ready(function() {

	$(this).find('h2').css('cursor', 'pointer');

	$('#workExperience').click(function() {
		$('.work-entry').slideToggle();
	});

	$('#projects').click(function() {		
		$('.project-entry').slideToggle();
	});
	
	$('#education').click(function() {
		$('.education-entry').slideToggle();
		$('.online').fadeToggle();
	});
	
	$('#mapDiv').click(function() {
		$('#map').slideToggle();
	});
});


