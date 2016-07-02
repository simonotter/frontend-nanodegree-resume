var bio = {
	"name": "Simon Otter",
	"role": "Developer",
	"welcome": "Hi this is my welcome message.",
	"photo": "images/myPhotoSmall.jpg",
	"contacts": {
		"email": "test@test.com",
		"location": "Sheffield, United Kingdom",
		"mobile": "+44 1234 123 567",
		"twitter": "@simonotter"
	},
	"skills": ["HTML", "JavaScript", "CSS", "Project Management"] 
};

bio.display = function () {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedBioPic = HTMLbioPic.replace("%data%", bio.photo);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	$("#header").prepend(formattedBioPic);

	if (bio.contacts){
		if (bio.contacts.email){
			var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
			$("#topContacts").append(formattedEmail);	
		}
		if (bio.contacts.mobile){
			var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
			$("#topContacts").append(formattedMobile);	
		}
		if (bio.contacts.location){
			var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
			$("#topContacts").append(formattedLocation);
		}
		if (bio.contacts.twitter){
			var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
			$('#topContacts').append(formattedTwitter);
		}
	}

	var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcome);
	$("#header").append(formattedWelcomeMsg);


	if (bio.skills.length > 0){
		$("#header").append(HTMLskillsStart);
		for (skill in bio.skills){
			var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#skills").append(formattedSkills);
		}
	}
}

var work = {
	"jobs": [
	{
		"employer": "Xactium",
		"title": "Operations Manager",
		"dates": "Nov 2013 - July 2016",
		"location": "Sheffield, UK",
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	},
	{
		"employer": "Univar",
		"title": "Project Manager",
		"dates": "Jan 2008 - Oct 2013",
		"location": "Bradford, UK",
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	}
	]
};

work.display = function(){
	for (job in work.jobs){
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		$(".work-entry:last").append(formattedEmployer + formattedTitle);
		var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedWorkDates);
		var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedWorkLocation);
		var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description)
		$(".work-entry:last").append(formattedWorkDescription);
	}
}

var projects = {
	"projects": [
	{
		"title": "Pricing Management & Control Project",
		"dates": "Sep 2009 - May 2012",
		"description": "Development and rollout of a bespoke pricing system to manage and control product pricing throughout Europe to maximise gross profit in a highly transactional environment.",
		"images" : ["https://s-media-cache-ak0.pinimg.com/236x/56/04/c2/5604c2ccc7d38e094129ea2ca70bcddc.jpg"]
	},
	{
		"title": "Customer Relationship Management (CRM) Project",
		"dates": "Jan 2008 - Jan 2009",
		"description": "Deployment of cloud-based Salesforce.com to over 800 users in 15 countries across Europe",
		"images" : ["http://s1.q4cdn.com/454432842/files/design/newlogo-company.png"]
	}
	]
};

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedHTMLprojectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedHTMLprojectTitle);

		var formattedHTMLprojectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedHTMLprojectDates);

		var formattedHTMLprojectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedHTMLprojectDescription);

		if (projects.projects[project].images.length > 0) {
				for (image in projects.projects[project].images) {
				var formattedHTMLprojectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedHTMLprojectImage);
			}
		}
	}
}

var education = {
	"schools": [
	{
		"name": "Sheffield Hallam University",
		"years": "1995 - 1999",
		"degree": "BSc",
		"majors": ["Computer Science"],
		"location": "Sheffield, United Kingdom"
	},
	{
		"name": "Thomas Rotherham College",
		"years": "1993 - 1995",
		"degree": "A-levels",
		"majors": ["Computing", "Maths", "Physics"],
		"location": "Rotherham, United Kingdom"
	}
	],
	"onlineCourses": [
	{
		"title": "Introduction to Programming Nanodegree",
		"school": "Udacity",
		"dates":  2016,
		"url": "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000"
	},
	{
		"title": "Introduction to Computer Science",
		"school": "Udacity",
		"dates":  2016,
		"url": "https://www.udacity.com/course/intro-to-computer-science--cs101"
	}
	]
};

education.display = function() {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedHTMLschoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedHTMLschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		$(".education-entry:last").append(formattedHTMLschoolName + formattedHTMLschoolDegree);

		var formattedHTMLschoolDates = HTMLschoolDates.replace("%data%", education.schools[school].years);
		$(".education-entry:last").append(formattedHTMLschoolDates);

		var formattedHTMLschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedHTMLschoolLocation);

		var formattedHTMLschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
		$(".education-entry:last").append(formattedHTMLschoolMajor);
	}
	if (education.onlineCourses.length > 0) {
		$("#education").append(HTMLonlineClasses);
		for (onlineCourse in education.onlineCourses) {
			$("#education").append(HTMLschoolStart);

			var formattedHTMLonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
			var formattedHTMLonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
			$(".education-entry:last").append(formattedHTMLonlineTitle + formattedHTMLonlineSchool);

			var formattedHTMLonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
			$(".education-entry:last").append(formattedHTMLonlineDates);

			var formattedHTMLonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
			$(".education-entry:last").append(formattedHTMLonlineURL);
		}
	}
	
}



bio.display();
work.display();
projects.display();
education.display();

$(document).click(function(loc) {
	logClicks(loc.pageX, loc.pageY)
});

$("#main").append(internationalizeButton);

function inName(name){
	name = name.split(" ");
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	return name[0] + " " + name[1];
}

$("#mapDiv").append(googleMap);