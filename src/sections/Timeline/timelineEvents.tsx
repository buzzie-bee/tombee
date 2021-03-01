export type TimelineEventsType = {
  year: string;
  title: string;
  description: string[];
}[];

export const timelineEvents: TimelineEventsType = [
  {
    year: '2021',
    title: 'Moving to Munich',
    description: [
      'After my partner has accepted a job offer at the University BW in Munich we are moving to Munich in March 2021 and am I looking for React Developer opportunities.',
    ],
  },
  {
    year: '2021',
    title: 'LetsPop.to',
    description: [
      'Wanting to add to my portfolio I decided to build this inspirational flight finding web app to solve some of the frustrations I have faced when searching for holiday destinations in the past.',
      'Further details are in the Projects section above.',
    ],
  },
  {
    year: '2020',
    title: 'Moved to Germany',
    description: [
      'I left my Senior Consulting Engineer position at Keyence UK and moved to Germany in December 2020 to become a full time Web Developer.',
      'I am now a resident of Germany with full working rights (Erwerbstätigkeit erlaubt), am learning the language every day, and am looking for opportunities to add value to businesses and expand my skill base.',
    ],
  },
  {
    year: '2020',
    title: 'RoboDK',
    description: [
      'Working with one of our customers who was developing an automated robot pick and place system using a universal robot, a 2D laser profiler, and the RoboDK software platform I coded in Python 3 an automated robot guidance program.',
      'This program had the robot search across a pallet for straps using the 2D profiler, identify the xyza position of the straps, and send the robot to pick them up in sequence.',
    ],
  },
  {
    year: '2020',
    title: 'Machine Builders',
    description: [
      "After experiencing the difficulties that Keyence's customers had with finding the correct machine builders for their automation projects I built the machinebuilders.co.uk tender platform using React, Redux, and Firebase.",
      'Further details on this project are in the Projects section.',
    ],
  },
  {
    year: '2020',
    title: 'Conflict Data Entry',
    description: [
      "This was a personal project for my partner and her colleagues to develop a data entry application for the 'Impact of Mercenaries and PMSCs on Civil War Dynamics' research project at the University of Liverpool.",
      "The data entry application was used for manual coding of data for the 'Commercial Military Actor Database' funded by the 'Gerda Henkel Foundation'.",
      'This involved parsing and normalising thousands of manually created excel dataset entries via a python flask api, then rendering the data for each record in a usable manner using React.',
      'This custom data entry application platform enabled the coding of each conflict in seconds instead of minutes, saving hundreds of man hours.',
      'The data was then stored and once a conflict was fully coded a new excel was generated with all of the conflict and coding data.',
    ],
  },
  {
    year: '2019',
    title: 'SR-2000 Web UI',
    description: [
      'The SR-2000 series barcode readers have a built in web server and a web interface for monitoring the status of the units, but it was quite limited in functionality and was built using jquery and not very extensible.',
      'Analysing the existing web code I found that there was a hidden api end point which allowed you to execute commands on the device.',
      'Using this knowlege I built a proof of concept web ui for the embedded web server using React which would allow you to perform the same set up procedure via a web url as you normally need to use the 1.5Gb windows app to do.',
    ],
  },
  {
    year: '2019',
    title: 'SRG Data logger',
    description: [
      'Unilever in South Wales wanted to use our barcode readers to both validate the correct products were in the correct packaging as well as track volume from their operators.',
      'I built a proof of concept system communicating with our SR-G handheld barcode scanners which gave visual error information if the incorrect products were combined as well as stored all the shift data.',
    ],
  },
  {
    year: '2019',
    title: 'IG Data logger',
    description: [
      'This was another project for a customer at Keyence',
      'I built a data logger for a customer using a number of our laser micrometers measuring the guage of wires used in aircraft composite manufacturing.',
      'This was a simple data logger communicating with the devices via RS232 and storing the results in a csv format.',
      'Providing this solution has ensured Keyence will win the repeat business from that customer.',
    ],
  },

  {
    year: '2019',
    title: 'React',
    description: [
      'Ruby was great for template websites, and python is great for data handling, but I wanted to build really good user interfaces so I decided to expand my Javascript knowlege and learnt React and ES6 syntax.',
    ],
  },
  {
    year: '2019',
    title: 'SR-G Data logger',
    description: [
      'One of my customers at work had a requirement to use one of our industrial barcode readers to count batches of product and to log defective parts',
      'In order to win the business from a competitor I built a data logger and operator interface using Python 3, kivy, & SQLlite which is still in operation today.',
    ],
  },
  {
    year: '2018',
    title: 'Python 3',
    description: [
      'After coming across challenges at work with demonstrating or extending hardware functionality I was looking for a general purpose programming language so I decided to learn Python 3.',
      'Python 3 was a great help in my role at Keyence as it allowed me to automate many of the repetetive tasks so I could focus on value added work.',
      'It was invaluable to helping me solve customer challenges as it allowed me to build more comprehensive solutions using hardware and software.',
    ],
  },
  {
    year: '2018',
    title: 'Window Beez',
    description: [
      'I decided to start working on a side-project using my new Rails skills',
      'After having issues paying my window cleaner as I was travelling a lot for work I decided to build a recurring payment platform for window cleaners to more effectively set up recurring payments from their customer base.',
      'More information about this project is listed in the Projects section.',
    ],
  },
  {
    year: '2018',
    title: 'Ruby on Rails',
    description: [
      'In my free time I decided to start learning programming more seriously and picked Ruby on Rails back up after playing around with it in the past.',
    ],
  },

  {
    year: '2015',
    title: 'Started @ Keyence UK',
    description: [
      'After completing my Mechanical Engineering degree I started my role as a Sales Engineer at Keyence UK.',
      "Keyence is Japan's fourth largest company by market cap and is the leader in factory automation sensing equipment for the manufacturing industry.",
      'This was a multi-discipliniary role involving mechanical, electrical, and software design and integration.',
      'Projects I was involved in covered a huge range of different challenges.',
      'From SAP, SCADA, and MRP systems integration, through to industrial machine vision systems and AI.',
      'From robot cell guidance and safety systems to high precision inline and offline measurement and validation systems.',
      "I worked as a Sales Engineer for a few years working directly with my own customer base before I transitioned into a Senior Consulting Engineer as a technical specialist where I worked with across the whole UK to come up with innovative and winning solutions to our customer's challenges.",
      'A particular strength of mine was the Auto ID industrial barcode readers for traceability systems. I used my knowlege of python and databases to help customers design new traceability systems, and my knowlege of lua for embedded script programming ensured I could integrate with almost any existing system.',
      'I learnt an incredible amount during my time at Keyence and the constant innovation and problem solving involved has helped me pick up programming languages and software engineering practices quite quickly.',
    ],
  },
  {
    year: '2015',
    title: 'Graduated BEng',
    description: [
      'I graduated with a B.Eng with Honors in Mechanical Engineering.',
      'This year was also when I started playing around with Ruby on Rails.',
    ],
  },
  {
    year: '2014',
    title: 'Back to Uni',
    description: [
      'I returned to complete my final year of my studies after my sabbatical years as Vice President.',
    ],
  },
  {
    year: '2014',
    title: 'QAA',
    description: [
      'I was trained as a reviewer for the Quality Assurance Agency and conducted a review of a Higher Education provider in Bolton.',
      'This involved thoroughly reviewing all of the existing standards documentation of the institution as well as conducting on site interviews to get the full picture of the Quality Procedures.',
      'Finally I was tasked with writing up all of my findings and producing a report alongside the other 2 reviewers.',
    ],
  },
  {
    year: '2012',
    title: 'Elected',
    description: [
      'I ran for Vice President of the Liverpool Guild of Students and was elected twice.',
      'I was leading a £2m turnover charity with hundreds of members of staff.',
      'I enjoyed runing campaigns to improve the student experience, my favourite of which was pushing the University to move all teaching resources online which probably made the Covid transistion a bit easier.',
      'Part of my role was to work with the University serving on high level commitees to advocate for improvements as well as to help set policy and standards.',
      'I also represented the students of Liverpool on a national level and attended events with both the NUS, QAA, and other national HE bodies.',
      "A particularly large project was to oversee the much needed £1.4m rennovation of the Students' Union building as well as select and guide graphics design agencies to conduct a rebrand.",
      'This was a full time role for 2 years which I took as a sabbatical. I had a great time serving in it and I feel like I made some real changes.',
    ],
  },
  {
    year: '2009',
    title: 'Started at University',
    description: [
      'I went to the University of Liverpool to study Mechanical Engineering.',
      'My course involved using matlab a lot as well as digital electronics foundational courses.',
      'I was also quite proficient in PTC Creo for 3D cad work.',
      'I was also President of the Engineering society which was great fun.',
    ],
  },
  {
    year: '1990',
    title: 'Born and Raised',
    description: [
      'I was born in Blackpool, UK and grew up in nearby Poulton-Le-Fylde.',
      'Growing up I always wanted to be an inventor like Doc Martin from back to the future and loved tinkering with knex and electronics.',
      "My first computer was a vtech kids laptop which I spent hours tinkering with and playing with the DOS interface, so I guess you could say I've been programming for about 20 years!",
      "I also played around with HTML at an early age and set up geocities sites which looked just like you imagine a 90's homepage would look.",
    ],
  },
];
