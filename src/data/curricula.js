/* Curriculum pictures */
import k2Units from "../assets/images/k2-units.jpg"
import three5Units from "../assets/images/35-units.jpg"
import six8Units from "../assets/images/68-units.jpg"
import sepJr from "../assets/images/pic14.jpg"
import creativeComputing from "../assets/images/creative-computing.gif"
import creativeWeb from "../assets/images/creative-web.gif"
import criticalComputing from "../assets/images/critical-computing.png"
import physicalComputing from "../assets/images/intro-to-pcomp.gif"
import csDiscoveries from "../assets/images/csDiscoveries.jpg"
import sepHackathon from "../assets/images/SEP-Hackathon.jpg"
import bootstrapDataScience from "../assets/images/bootstrap-data-science.png"
import tangibleInterfaces from "../assets/images/tangible-interfaces.gif"
import exploringCS from "../assets/images/exploringCS.jpeg"
import teals from "../assets/images/TEALS.gif"
import introToCompMedia from "../assets/images/intro-to-comp-media.gif"
import csP from "../assets/images/cs-principles.jpg"
import csA from "../assets/images/cs-a.gif"
import csAndTheCity from "../assets/images/cs-and-the-city.gif"

// Curriculum data
const curricula = {
  elementary: [
    {
      link: "/curriculum/software-engineering-program-jr",
      pic: sepJr,
      altText: "Software Engineering Program Jr",
      activityGrade: "Grades K-5",
      activityTitle: "Software Engineering Program Junior",
      activityDevices: "K-5 Sequence",
      activityConcepts:
        "Concepts: Abstraction, Algorithms, Programming, Data, Networks",
    },
    {
      link: "/curriculum/k-2-integrated-units",
      pic: k2Units,
      altText: "K-2 Integrated Units",
      activityGrade: "Grades K-2",
      activityTitle: "K-2 Integrated Units",
      activityDevices: "16-20 Hour Unit",
      activityConcepts: "Concepts: Abstraction, Algorithms, Programming",
    },
    {
      link: "/curriculum/3-5-integrated-units",
      pic: three5Units,
      altText: "3-5 Integrated Units",
      activityGrade: "Grades 3-5",
      activityTitle: "3-5 Integrated Units",
      activityDevices: "16-20 Hour Unit",
      activityConcepts: "Concepts: Abstraction, Algorithms, Programming",
    },
  ],
  middle: [
    {
      link: "/curriculum/software-engineering-program/",
      pic: sepHackathon,
      altText: "Software Engineering Program",
      activityGrade: "Grade 6-12",
      activityTitle: "Software Engineering Program",
      activityDevices: "6-12 Sequence",
      activityConcepts: "Concepts: Abstraction, Algorithms, Programming",
    },
    {
      link: "/curriculum/6-8-integrated-units",
      pic: six8Units,
      altText: "6-8 Integrated Units",
      activityGrade: "Grades 6-8",
      activityTitle: "6-8 Integrated Units",
      activityDevices: "16-20 Hour Unit",
      activityConcepts: "Concepts: Abstraction, Algorithms, Programming",
    },
    {
      link: "/curriculum/creative-computing/",
      pic: creativeComputing,
      altText: "Creative Computing",
      activityGrade: "Grade 6",
      activityTitle: "Creative Computing",
      activityDevices: "Software Engineering Program: 54 Hour Course",
      activityConcepts: "Concepts: Abstraction, Algorithms, Programming, Data",
    },
    {
      link: "/curriculum/critical-computing/",
      pic: criticalComputing,
      altText: "Critical Computing",
      activityGrade: "Grade 6",
      activityTitle: "Critical Computing",
      activityDevices: "Software Engineering Program: 54 Hour Course",
      activityConcepts: "Concepts: Abstraction, Algorithms, Programming, Data",
    },
    {
      link: "/curriculum/creative-web/",
      pic: creativeWeb,
      altText: "Creative Web",
      activityGrade: "Grade 7",
      activityTitle: "Creative Web",
      activityDevices: "Software Engineering Program: 54 Hour Course",
      activityConcepts:
        "Concepts: Abstraction, Algorithms, Programming, Data, Networks",
    },
    {
      link: "/curriculum/intro-to-pcomp/",
      pic: physicalComputing,
      altText: "Introduction to Physical Computing",
      activityGrade: "Grade 7",
      activityTitle: "Introduction to Physical Computing",
      activityDevices: "Software Engineering Program: 54 Hour Course",
      activityConcepts:
        "Concepts: Abstraction, Algorithms, Programming, Data, Networks",
    },
    {
      link: "/curriculum/cs-discoveries/",
      pic: csDiscoveries,
      altText: "code.org CS Discoveries",
      activityGrade: "Grades 6-8",
      activityTitle: "code.org CS Discoveries",
      activityDevices: "108 Hour Course",
      activityConcepts:
        "Concepts: Abstraction, Algorithms, Programming, Data, Networks",
    },
  ],
  high: [
    {
      link: "/curriculum/software-engineering-program/",
      pic: sepHackathon,
      altText: "Software Engineering Program",
      activityGrade: "Grade 6-12",
      activityTitle: "Software Engineering Program",
      activityDevices: "6-12 Sequence",
      activityConcepts: "Concepts: Abstraction, Algorithms, Programming",
    },
    {
      link: "/curriculum/bootstrap-data-science/",
      pic: bootstrapDataScience,
      altText: "Bootstrap Data Science",
      activityGrade: "Grades 9-10",
      activityTitle: "Bootstrap: Data Science",
      activityDevices: "54 Hour Course",
      activityConcepts: "Concepts: Abstraction, Algorithms, Programming, Data",
    },
    {
      link: "/curriculum/exploring-cs/",
      pic: exploringCS,
      altText: "Exploring Computer Science",
      activityGrade: "Grades 9-10",
      activityTitle: "Exploring Computer Science",
      activityDevices: "108 Hour Course",
      activityConcepts:
        "Concepts: Abstraction, Algorithms, Programming, Data, Networks",
    },
    {
      link: "/curriculum/teals-intro-to-cs/",
      pic: teals,
      altText: "TEALS Introduction to Computer Science",
      activityGrade: "Grade 9-10",
      activityTitle: "TEALS Introduction to Computer Science",
      activityDevices: "54 Hour Course",
      activityConcepts: "Concepts: Abstraction, Algorithms, Programming, Data",
    },
    {
      link: "/curriculum/intro-to-computational-media/",
      pic: introToCompMedia,
      altText: "Introduction to Computational Media",
      activityGrade: "Grade 9-10",
      activityTitle: "Introduction to Computational Media",
      activityDevices: "Software Engineering Program: 108 Hour Course",
      activityConcepts: "Concepts: Abstraction, Algorithms, Programming, Data",
    },
    {
      link: "/curriculum/tangible-interfaces/",
      pic: tangibleInterfaces,
      altText: "Tangible Interfaces",
      activityGrade: "Grade 10-11",
      activityTitle: "Tangible Interfaces (Pilot)",
      activityDevices: "Software Engineering Program: 108 Hour Course",
      activityConcepts:
        "Concepts: Abstraction, Algorithms, Programming, Data, Networks",
    },
    {
      link: "/curriculum/cs-principles/",
      pic: csP,
      altText: "Computer Science Principles",
      activityGrade: "Grades 10-12",
      activityTitle:
        "Computer Science Principles (Advanced Placement optional)",
      activityDevices: "108 Hour Course",
      activityConcepts:
        "Concepts: Abstraction, Algorithms, Programming, Data, Networks",
    },
    {
      link: "/curriculum/cs-a/",
      pic: csA,
      altText: "AP Computer Science A",
      activityGrade: "Grades 11-12",
      activityTitle: "Advanced Placement Computer Science A",
      activityDevices: "108 Hour Course",
      activityConcepts:
        "Concepts: Abstraction, Algorithms, Programming, Data, Networks",
    },
    {
      link: "/curriculum/cs-and-the-city/",
      pic: csAndTheCity,
      altText: "CS and the City",
      activityGrade: "Grades 11-12",
      activityTitle: "CS and the City",
      activityDevices: "108 Hour Course",
      activityConcepts:
        "Concepts: Abstraction, Algorithms, Programming, Data, Networks",
    },
  ],
}

export default curricula
