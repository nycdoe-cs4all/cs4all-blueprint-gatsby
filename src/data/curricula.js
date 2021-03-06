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
      activityGrade: "Grades K-5",
      activityTitle: "Software Engineering Program Junior",
      activityOffered: false,
      activityDevices: "Grade K-5 Sequence",
      activityConcepts:
        "Concepts: Abstraction, Algorithms, Programming, Data, Networks",
    },
    {
      link: "/curriculum/k-2-integrated-units",
      pic: k2Units,
      activityGrade: "Grades K-2",
      activityTitle: "K-2 Integrated Units",
      activityOffered: false,
      activityDevices: "16-20 Hour Unit",
      activityConcepts: "Concepts: Abstraction, Algorithms, Programming",
    },
    {
      link: "/curriculum/3-5-integrated-units",
      pic: three5Units,
      activityGrade: "Grades 3-5",
      activityTitle: "3-5 Integrated Units",
      activityOffered: false,
      activityDevices: "16-20 Hour Unit",
      activityConcepts: "Concepts: Abstraction, Algorithms, Programming",
    },
  ],
  middle: [
    {
      link: "/curriculum/software-engineering-program/",
      pic: sepHackathon,
      activityGrade: "Grade 6-12",
      activityTitle: "Software Engineering Program",
      activityOffered: false,
      activityDevices: "Grade 6-12 Sequence",
      activityConcepts: "Concepts: Abstraction, Algorithms, Programming",
    },
    {
      link: "/curriculum/6-8-integrated-units",
      pic: six8Units,
      activityGrade: "Grades 6-8",
      activityTitle: "6-8 Integrated Units",
      activityOffered: false,
      activityDevices: "16-20 Hour Unit",
      activityConcepts: "Concepts: Abstraction, Algorithms, Programming",
    },
    {
      link: "/curriculum/creative-computing/",
      pic: creativeComputing,
      activityGrade: "Grade 6",
      activityTitle: "Creative Computing",
      activityOffered: false,
      activityDevices: "54 Hour Course",
      activityConcepts: "Concepts: Abstraction, Algorithms, Programming, Data",
    },
    {
      link: "/curriculum/critical-computing/",
      pic: criticalComputing,
      activityGrade: "Grade 6",
      activityTitle: "Critical Computing",
      activityOffered: true,
      activityDevices: "54 Hour Course",
      activityConcepts: "Concepts: Abstraction, Algorithms, Programming, Data",
    },
    {
      link: "/curriculum/creative-web/",
      pic: creativeWeb,
      activityGrade: "Grade 7",
      activityTitle: "Creative Web",
      activityOffered: true,
      activityDevices: "54 Hour Course",
      activityConcepts:
        "Concepts: Abstraction, Algorithms, Programming, Data, Networks",
    },
    {
      link: "/curriculum/intro-to-pcomp/",
      pic: physicalComputing,
      activityGrade: "Grade 7",
      activityTitle: "Introduction to Physical Computing",
      activityOffered: false,
      activityDevices: "54 Hour Course",
      activityConcepts:
        "Concepts: Abstraction, Algorithms, Programming, Data, Networks",
    },
    {
      link: "/curriculum/cs-discoveries/",
      pic: csDiscoveries,
      activityGrade: "Grades 6-8",
      activityTitle: "code.org CS Discoveries",
      activityOffered: false,
      activityDevices: "108 Hour Course",
      activityConcepts:
        "Concepts: Abstraction, Algorithms, Programming, Data, Networks",
    },
  ],
  high: [
    {
      link: "/curriculum/software-engineering-program/",
      pic: sepHackathon,
      activityGrade: "Grade 6-12",
      activityTitle: "Software Engineering Program",
      activityOffered: false,
      activityDevices: "Grade 6-12 Sequence",
      activityConcepts: "Concepts: Abstraction, Algorithms, Programming",
    },
    {
      link: "/curriculum/bootstrap-data-science/",
      pic: bootstrapDataScience,
      activityGrade: "Grades 9-10",
      activityTitle: "Bootstrap: Data Science",
      activityOffered: true,
      activityDevices: "54 Hour Course",
      activityConcepts: "Concepts: Abstraction, Algorithms, Programming, Data",
    },
    {
      link: "/curriculum/exploring-cs/",
      pic: exploringCS,
      activityGrade: "Grades 9-10",
      activityTitle: "Exploring Computer Science",
      activityOffered: true,
      activityDevices: "108 Hour Course",
      activityConcepts:
        "Concepts: Abstraction, Algorithms, Programming, Data, Networks",
    },
    {
      link: "/curriculum/teals-intro-to-cs/",
      pic: teals,
      activityGrade: "Grade 9-10",
      activityTitle: "TEALS Introduction to Computer Science",
      activityOffered: true,
      activityDevices: "54 Hour Course",
      activityConcepts: "Concepts: Abstraction, Algorithms, Programming, Data",
    },
    {
      link: "/curriculum/intro-to-computational-media/",
      pic: introToCompMedia,
      activityGrade: "Grade 9-10",
      activityTitle: "Introduction to Computational Media",
      activityOffered: false,
      activityDevices: "108 Hour Course",
      activityConcepts: "Concepts: Abstraction, Algorithms, Programming, Data",
    },
    {
      link: "/curriculum/tangible-interfaces/",
      pic: tangibleInterfaces,
      activityGrade: "Grade 10-11",
      activityTitle: "Tangible Interfaces (Pilot)",
      activityOffered: false,
      activityDevices: "108 Hour Course",
      activityConcepts:
        "Concepts: Abstraction, Algorithms, Programming, Data, Networks",
    },
    {
      link: "/curriculum/cs-principles/",
      pic: csP,
      activityGrade: "Grades 10-12",
      activityTitle: "Computer Science Principles (Advance Placement optional)",
      activityOffered: true,
      activityDevices: "108 Hour Course",
      activityConcepts:
        "Concepts: Abstraction, Algorithms, Programming, Data, Networks",
    },
    {
      link: "/curriculum/cs-a/",
      pic: csA,
      activityGrade: "Grades 11-12",
      activityTitle: "Advanced Placement Computer Science A",
      activityOffered: true,
      activityDevices: "108 Hour Course",
      activityConcepts:
        "Concepts: Abstraction, Algorithms, Programming, Data, Networks",
    },
    {
      link: "/curriculum/cs-and-the-city/",
      pic: csAndTheCity,
      activityGrade: "Grades 11-12",
      activityTitle: "CS and the City",
      activityOffered: true,
      activityDevices: "108 Hour Course",
      activityConcepts:
        "Concepts: Abstraction, Algorithms, Programming, Data, Networks",
    },
  ],
}

export default curricula
