var schedule = [
   {
        "uid":"talk-226",
        "title":"Javascript: Evolution and Perspectives",
        "description":"Javascript is a programming language, but what kind of language is it? How did it become what it is? Is it 'the right tool for the job'? Does it even matter if it is the right tool or not? Is it improving or getting worse? Do we know what to expect from its future? Do we even know what we want from its future? And if we do, can we influence it?",
        "speaker":{
            "name":"Massimiliano Mantione ",
            "description":"I am an enthusiast software engineer, mostly interested in programming languages and compiler optimizations. I curently work on the V8 Javascript virtual machine in the Chrome team in Google. In the past I have worked on the Mono JIT compiler (the free software CLR reimplementation) in Novell with Miguel de Icaza, and on game servers, virtual tradeshows rendered online in a browser window, embedded systems, GSM networks, J2EE and databases."
        },
        "location":"Keynote",
        "starting_at":"2013-05-15 09:45:00",
        "ending_at":"2013-05-15 10:45:00"
   },
   {
        "uid":"talk-204",
        "title":"Vector Graphics with SVG & RaphaelJS",
        "description":"Computers screens come in all different sizes. To handle graphics for different cases, most web applications serve multiple different sizes of images. Now with retina displays it is only compounding the problem. With SVG Scalable Vector Graphics your graphics can scale up and down with ease. In this session, Marc will teach you how to start using SVG and some of the pros and cons of using it to build web interfaces. He will also cover RaphaelJS and provide you with tools to make working with SVG more efficient and work in a wider amount of web browsers.",
        "speaker":{
            "name":"Marc Grabanski ",
            "description":"Marc Grabanskis background is in open source. He created the jQuery UI Datepicker project. Marc is now focused on connecting experts in order to create the highest quality education possible with workshops and training events. Events he has created include Day of JavaScript on Mobile at Google HQ, Frontend Masters Workshop Series I & II and several other events in and around Minnesota. Marcs deepest area of expertise is in building UI-intensive applications. He has built out countless diverse interfaces through consulting for fortune 50 to silicon valley companies and startups. Lately he has been consulting on projects using SVG/RaphaelJS, web applications built on top of jQuery mobile and is running a premium training website for web developers at http://frontendmasters.com Speaking History: 2012 - MN Web Design - JavaScript MN - Responsive Web Design Summit - DevCon5 in New York - JS Day in Verona, Italy - DevCon5 in Santa Clara CA - Zenith Social Media 2011 - Mobile JavaScript Summit - MinneBar - MinneWebCon 2010 - jQuery Summit - Epicenter Ireland in Dublin, Ireland - jQuery Conference in Mountain View, CA - MinneWebCon - Ruby MN User Group - Israel Internet Association Web in Tel Aviv, Israel 2009 - jQuery Summit - jQuery Conference in Boston, MA - Epicenter in Dublin, Ireland - MinneWebCon - Twin Cities Web Design 2007 - jQueryCamp in Boston, MA - CakeFest in Orlando, FL Events I've Created: - Frontend Masters Workshop Series I & II - Evening of jQuery Mobile - Day of JavaScript on Mobile at Google HQ http://dayofjs.com - Evening of Canvas, jQuery and Node.JS - Evening of jQuery and HTML5 2010"
        },
        "location":"Track 1",
        "starting_at":"2013-05-15 11:00:00",
        "ending_at":"2013-05-15 11:30:00"
   },
   {
        "uid":"talk-173",
        "title":"When WebSockets are not an option",
        "description":"WebSockets have been with us for quite a while, but there are still people using ancient browsers or being held back by selfish proxies. Because of that, it's difficult to find out which type of connection is best for a client, so Pusher needed a flexible way to tell clients how to establish a real-time connection efficiently and also monitor their behaviour. This talk will give you an overview on how it works, what interesting metrics we got out of it and how we evaluated them. # Agenda 1. Why can't we just stick with WebSockets? 2. Why Websockets are generally superior? 3. Why doesn't Pusher just change JS on the fly? 4. Goals: a) improve initial connection latency, b) provide clients with best possible transport, c) keep costs reasonable, d) get to know our connections, e) have another way to balance the load. 5. Design of our connection strategy mechanism. 6. Our awesome JSON DSL for specifying strategies. 7. Modifying client behaviour on the fly. 8. Pushing client status as a timeline. 9. Interesting stats and what we learned from them.",
        "speaker":{
            "name":"Paweł Ledwoń ",
            "description":"I'm a programmer at Pusher and for the last year I've been working on numerous JavaScript projects on both client-side and using Node."
        },
        "location":"Track 2",
        "starting_at":"2013-05-15 11:00:00",
        "ending_at":"2013-05-15 11:30:00"
   },
   {
        "uid":"talk-165",
        "title":"JS in browsers - WTF!",
        "description":"We would like to show you some of the weirdness going on when trying to execute seemingly straightforward JavaScript. Not least should you be painfully aware of the browser and document modes that your website is interpreted in, as this can radically affect the behavior of your scripts. This talk will be full of examples of JS code that has caused us some headaches and 'WTF' experiences.",
        "speaker":{
            "name":"Anne-Sofie Nielsen ",
            "description":"I'm the VP of R&D at Kapow Software, which is a company in the rapid application integration space. I'd like to give this talk together with a colleague of mine, Benjamin Owe, who is a senior software engineer at Kapow. One of the things we've had the pleasure of working with is reengineering Internet Explorer with the purpose of creating a fully controllable browser for automation purposes, which has taught us a great deal about the mysterious ways of IE."
        },
        "location":"Track 1",
        "starting_at":"2013-05-15 11:30:00",
        "ending_at":"2013-05-15 12:00:00"
   },
   {
        "uid":"talk-169",
        "title":"Automated Cross-browser Testing with Node",
        "description":"Web apps have proven to be a solid foundation for many tasks that were reserved for 'serious' desktop apps not that long ago. Their complexity grows rapidly making codebase hard to grasp. Errors during implementation are inevitable (at least for us - humans ;) ). As application grows, probability of unwanted effects and regression is becoming a real issue that can ruin project in a long term. Furthermore, development cycle that does not give immediate feedback to development team about effects of changes on the application behavior makes them unaware of the real effects of their code modifications. As if this was not enough, web developers need to live in an ecosystem of diversified browsers on which their app might be used. Solutions to such problems are available to the public as an open source projects. Selenium has been created to imitate real user behavior as closely as possible. Creating integration tests as a part of development process is really fun as it's basically writing code in your favorite language. During my talk I will present optimal development cycle for rich user interface apps, show the difference between unit and integration tests, show how to start your first test, talk about best practices, show both pros and cons, present handful tools that will make creating tests even easier, share some tips that will make you tests rock and make a little sneak peak into the future of test automation!",
        "speaker":{
            "name":"Bernard Kobos ",
            "description":"I started creating first programs during primary school being inspired by older brothers' IT class home assignments. During years I developed bigger and smaller applications in various programming languages, both as a professional assignments and personal pet projects. I started my professional career by winning a programming competition organized by vehicle tracking company at the collage. I was a lead developer on some startups that turned out to be a huge success in Poland (ankietka.pl is now number one survey system in Poland). I was also a lead front-end developer who created a ‘virtual assessment center’ system for one of the biggest Polish telecom companies. Not being satisfied with innovativeness of the tasks, I started applying for fully remote positions at startup companies to work on cutting edge projects which could better utilize my skill set. Currently I'm working in a test-centered company that strongly believes in automated testing solutions. We provide infrastructure and work on making testing more accessible for every developer. I've been contributing to open source projects such as: WD.js, Selenium Builder, Appium."
        },
        "location":"Track 2",
        "starting_at":"2013-05-15 11:30:00",
        "ending_at":"2013-05-15 12:00:00"
   },
   {
        "uid":"talk-170",
        "title":"The anatomy of an infographic",
        "description":"We have a lot of data at our disposal, and we are ever more producing and collecting data from multiple sources. Data visualizations let us turn raw data into relevant information and make it easier to extract meaning from the information and to reason about it. My talk will show you three visualizations of increasing complexity all developed with d3js and we'll  analyze how they are built. We'll see how the different parts fit together to transform a set of raw data into an interactive experience that allows exploring and understanding the information hidden inside it.",
        "speaker":{
            "name":"Luca Mearelli ",
            "description":"I'm a software craftsman, striving to find the best tools for the work I'm doing, and looking forward to build 'things' that are useful and beautiful. I love optimizing whatever I need to do and always look for ways to automate my processes. I've been working as a developer for many years on web applications, ERP systems and telecom projects in a variety of projects. A few past notable works of mine: I'm the lead developer for the miojob.repubblica.it web site and the community section of www.adviseonly.com."
        },
        "location":"Track 1",
        "starting_at":"2013-05-15 12:00:00",
        "ending_at":"2013-05-15 13:00:00"
   },
   {
        "uid":"talk-168",
        "title":"Manage those dependencies!",
        "description":"Package- and dependency management is like source control; somehow we can manage to survive without it, but it's a pain in the ass. For some reason, web development has been a place of medival darkness without proper tools for handling packages and dependencies. Until now. This presentation will showcase how you can leverage NPM, Browserify, Yarnify, Bower, Jam, RequireJS and all of their friends to bring your application and your development process to the age of Enlightenment.",
        "speaker":{
            "name":"Jakob Mattsson ",
            "description":"Jakob is an entrepreneur. His current company, which he co-founded as CTO, is his third startup. He is a developer at heart and started out building games using C++, but ended up building web based services and fell in love with JavaScript. Lately he has also become a huge fan of Node.js. When Jakob is involved, JavaScript is everywhere and great architecture is the top priority. Over the last years he has been sharing his thoughts and experiences on programming languages, working in startups and building better software at a large number of universities and conferences all over Europe."
        },
        "location":"Track 2",
        "starting_at":"2013-05-15 12:00:00",
        "ending_at":"2013-05-15 13:00:00"
   },
   {
        "uid":"talk-171",
        "title":"ECMAScript 6: Get Ready For the Future. Now.",
        "description":"New version of ECMAScript, the standard behind JavaScript, has been in the making for few years and went through several iterations. The specification is still not final, but it is mature enough to justify a closer look. The talk will explain important new features of the language. Learn about modules, lexical scoping, proxies and see how they will change the way you write JavaScript.",
        "speaker":{
            "name":"Krzysztof Szafranek ",
            "description":"I created my first website in 2000. Since 2005 I've been working professionally as a front-end developer, architect and manager for companies like Roche and Nokia. Since last year I've been a developer at Wooga in Berlin, where I worked on an HTML5 mobile game. I'm currently having an affair with native game development for the iOS platform."
        },
        "location":"Track 1",
        "starting_at":"2013-05-15 14:30:00",
        "ending_at":"2013-05-15 15:00:00"
   },
   {
        "uid":"talk-160",
        "title":"Attack of the drones! Flying helicopters with Arduino & node.js",
        "description":"'The Parrot AR.Drone is basically a flying linux server. Arduino is an open-source electronic prototyping platform. In this session, we mash them up and build our own analog PS like remote to fly the quadcopter. All with JavaScript and node.js!'",
        "speaker":{
            "name":"Gilles Ruppert ",
            "description":"I am a client-side developer with server-side tendencies and a love for all things JavaScript and vim. I used to work at the BBC working on Topgear.com, BBC Homepage and BBC iPlayer. Since then, I have build my fair share of SPAs (single page web apps) and am now developing at Nelm.io."
        },
        "location":"Track 2",
        "starting_at":"2013-05-15 14:30:00",
        "ending_at":"2013-05-15 15:00:00"
   },
   {
        "uid":"talk-177",
        "title":"So you wanna make a jQuery plugin… jHERE deconstructed.",
        "description":"Out there on the Internet web developers can find a big universe of jQuery plugins for any need you can think of. Do you need a tooltip? There's a plugin for that. Do you need to handle cookies? There's a plugin for that. Do you want a map in your website? You are in luck, there's jHERE for that! Why do people create all these plugins? Mostly because they need a reusable component that can be easily be included into their web apps. So they build it, and then they are nice enough to make it available to everybody. A few months back I created jHERE, with the goal of providing a super simple API for something usually complicated: maps. With jHERE you can create maps, markers, info bubbles, heatmaps and even render KMLs with one line of code. To make life easier for the users, jHERE is however quite a complex jQuery plugin. First of all it depends on a 3rd-party API (HERE Maps) that is lazy-loaded when the plugin is first instantiated. Additionally it was built to work not only with jQuery, but with other jQuery-compatible APIs as well, e.g. Zepto.js and Tire.js. Finally, jHERE is extensible. In order to save bytes, only a small set of simple functionalities is included in the core. More advanced features can be added by writing extensions. This talk is about the journey from the first prototype of jHERE to the final, polished version of the plugin. I will start with the basics of writing a jQuery plugin, I will dive into leveraging Promises/Deferreds when 3rd-party libraries are required for the plugin to work, and I will show how to write the minimum amount of code that is essential to guarantee compatibility with other jQuery-like libraries. Then I will go into extensibility and talk about a way to support plugins for a plugin. And finally, how can you make sure a piece of code maintains the right behavior after you make changes and across releases? You can't, unless you write tests for it, so we'll have a look at unit testing for jQuery plugins. I promise you will see quite some code but also pretty slides.",
        "speaker":{
            "name":"Massimiliano Marcon ",
            "description":"After working for a few years as a R&D engineer on some obscure stuff like network protocols, service discovery and infrastructures for information sharing, I decided to try something different and became a full-stack web developer. Now I am an engineer at Nokia Berlin, where I spend my time playing with maps and developing the next big thing you will soon see on HERE.com. In my free time I work on jHERE, my open source jQuery plugin that helps developers embedding beautiful maps in their websites and web apps. Since I believe coding is mostly fun, I work on many other - often crazy - side projects, as you can tell by looking at my Github account."
        },
        "location":"Track 1",
        "starting_at":"2013-05-15 15:00:00",
        "ending_at":"2013-05-15 16:00:00"
   },
   {
        "uid":"talk-159",
        "title":"Modern JavaScript Debugging",
        "description":"There are several tools and some not so well-known methods to debug JavaScript today. In this talk, I'll discuss modern techniques for debugging JavaScript. These include Source Maps, MutationObservers, DOM Breakpoints, Event Listener Breakpoints, Object.observe and Remote Debugging. In addition to providing useful tips and tricks for debugging JavaScript efficiently, I'll also discuss the Console API, lesser-known features of Chrome DevTools and its command line API, as well as browser tools to debug HTML5 features.",
        "speaker":{
            "name":"Ashutosh Sharma ",
            "description":"I’m a Senior Computer Scientist at Adobe. My work involves exploring web technologies and building prototypes of web development tools. I’ve also been one of the architects of Adobe AIR (Linux, Android and iOS) and have worked on the Adobe Reader (Linux)."
        },
        "location":"Track 2",
        "starting_at":"2013-05-15 15:00:00",
        "ending_at":"2013-05-15 16:00:00"
   },
   {
        "uid":"talk-162",
        "title":"Audio and Video on the Web - It's all happening!",
        "description":"In this talk we'll take a look at the basic building blocks of web based audio and video, what can and cannot be achieved and the issues to watch out for when developing for various platforms. We'll then find out about newer media libraries and APIs. Topics will include the advanced and recently standardised Web Audio API, and the highly disruptive WebRTC and libraries such as Popcorn.js, Howler.js and Peer.js all of which help us manipulate the wonderful world of web-based media. Oh and there'll be a couple of groovy demos.",
        "speaker":{
            "name":"Mark Boas ",
            "description":"Mark founded a small web-agency called Happyworm back in 2001 and has worked there ever since. He is the project co-ordinator of jPlayer the popular JS audio/video library. In 2012 Mark worked with Al Jazeera as part of the Knight-Mozilla Open News program and produced several interactives published on aljazeera.com. Mark has also worked with the BBC R&D on Perceptive Media. Mark blogs a lot, mostly about new and emerging HTML5 APIs and JavaScript libraries and has run courses for the W3C on HTML5 Audio and Video. He also runs a course on web media at the University of Florence. Mark's current passion is to push web based audio to the limit and to this end has recently set up Hyperaudio Incorporated as a non-profit in the US."
        },
        "location":"Track 1",
        "starting_at":"2013-05-15 16:30:00",
        "ending_at":"2013-05-15 17:30:00"
   },
   {
        "uid":"talk-234",
        "title":"Writing testable code",
        "description":"We've been told many times that we should write unit tests for our code. We have read the theory and we have applied automatic testing to our projects, sometimes successfully but often times not so. Why it seems to be so hard to test our code? However we look at it, automatic testing doesn't work like a 'plug & play' peripheral. It just doesn't seem to fit with our project. A dependency is missing here; we have a hard to mock object there; and so on. What is _that_ thing we might be doing wrong but we fail to notice? In this talk we will argue that the problem lays in our code, in its structure, in the way we pass data around and even how we write for loops! This won't be your everyday 'code quality' tech talk, since we are going to attack the problem of code quality from different points of view and paradigms like Functional Programming and the Unix philosophy of simplicity and reuse.",
        "speaker":{
            "name":"Alvaro Videla ",
            "description":"Alvaro Videla works at VMware as Developer Advocate for Cloud Foundry. Before moving to Europe he used to work in Shanghai where he helped building one of Germany biggest dating websites. He co-authored the book ''RabbitMQ in Action'' for Manning Publishing. Some of his open source projects can be found here: http://github.com/videlalvaro. Apart from code related stuff he likes traveling with his wife, listening/playing music and reading books."
        },
        "location":"Track 2",
        "starting_at":"2013-05-15 16:30:00",
        "ending_at":"2013-05-15 17:30:00"
   },
   {
        "uid":"talk-214",
        "title":"GitHub's Long-distance Relationships with Robots ",
        "description":"GitHub is a fundamentally remote company, with less than 20% of the company heading in to the office each day. This is no accident: absence makes the team grow stronger. In this talk, we'll show some of the tools, conventions, and culture that make this a better way to work than working side-by-side.",
        "speaker":{
            "name":"Ben Lavender ",
            "description":"Ben Lavender is GitHub's only developer in New Orleans. He sits alone most days, listening to loud headphones and making websites with exploding dinosaurs. Somehow this results in work useful enough that he's an ad-hoc organizer of the local tech community. He's @bhuga everywhere."
        },
        "location":"Track 1",
        "starting_at":"2013-05-15 17:30:00",
        "ending_at":"2013-05-15 18:00:00"
   },
   {
        "uid":"talk-172",
        "title":"JavaScript ♥ Unicode",
        "description":"In this presentation we’ll take a look at the various ways JavaScript relies on Unicode, what the consequences are for JavaScript developers, and how ECMAScript 6 will make our lives a bit easier in this regard. First off, the basics of Unicode will be explained. Once that’s out of the way, I’ll talk a little bit about different character encodings, only to determine the internal character encoding that JavaScript uses internally (which is kind of a mixture between UCS-2/UTF-16). Then I’ll explore the various consequences of JavaScript exposing “characters” according to UCS-2/UTF-16, and explain why it can be problematic. Finally, I’ll present robust ECMAScript 5-compatible workarounds to the issues encountered, and explain how ECMAScript 6 will make it easier to support full Unicode in JavaScript strings",
        "speaker":{
            "name":"Mathias Bynens ",
            "description":"Front-end developer. Creator of jsPerf.com. Creator of the Punycode conversion library that’s part of Node.js. Core dev team member of the HTML5 Boilerplate project."
        },
        "location":"Track 2",
        "starting_at":"2013-05-15 17:30:00",
        "ending_at":"2013-05-15 18:00:00"
   },
   {
        "uid":"talk-174",
        "title":"Develop and test custom components for Sencha Touch",
        "description":"How to develop and test custom UI components for your Sencha Touch application. In this talk I will show you how to develop your own reusable UI components for your Sencha Touch Apps. Showcased with a custom 'slide rule value selector' with two scales and a custom display component we will see how to create custom UI classes and use them in your App. We will also look into how to test our components with the Siesta JavaScript testing suite.",
        "speaker":{
            "name":"Nils Dehl",
            "description":"I'm senior developer and trainer at dkd Internet Service GmbH in Frankfurt Germany. I develop Sencha Touch and Ext JS application and extensions for the TYPO3 CMS. Beside developing i held trainings for both Sencha Touch and ExtJS. I'm active in the Sencha community, organizer of the Sencha meetup Frankfurt and did talks at conferences like SenchaCon, JSDay.it, SourcDevcon and several TYPO3 conferences. "
        },
        "location":"Track 1",
        "starting_at":"2013-05-16 11:00:00",
        "ending_at":"2013-05-16 11:00:00"
   },
   {
        "uid":"talk-202",
        "title":"Building a unified back-end for your apps",
        "description":"In this session, we will explore a way to build a single back-end for your iOS, Android, Windows Phone, Windows 8 and HTML/JS apps using Azure Mobile Services, a magic box service, that seamlessly and easily allow you to have a database, a way to use different identity providers like Facebook, Twitter, Google and Microsoft account. In addition, it supports different push notification services via server-side JavaScript APIs that you can leverage in your solution!",
        "speaker":{
            "name":"Pietro Brambati ",
            "description":"Pietro Brambati is a passionate developer ninja. He likes working with different kind of languages and framework, working on different size applications, scaling from mobile device apps to large, enterprise- ready applications. He has been working with Microsoft where he has the opportunity to work with developer and academic community. You can reach him at the main developer events and hackathon all around Italy."
        },
        "location":"Track 2",
        "starting_at":"2013-05-16 11:00:00",
        "ending_at":"2013-05-16 11:30:00"
   },
   {
        "uid":"talk-166",
        "title":"Yo mama’s so ugly, she makes onions cry.",
        "description":"Since we have WebCam access in our browsers, web facial recognition system becomes a fact. We can now use JavaScript to automatically identify or verify a person from a digital image or a video frame from a video source. Let’s check if it could be useful in HTML5 games!",
        "speaker":{
            "name":"Michal Budzynski ",
            "description":"Michal is a Tabasco fan from Poland, addicted to TV series and working at Mozilla on FirefoxOS. He currently lives in Paris, where he eats snails, frog legs and croissants. He is also the organizer of onGameStart, the world's first large scale HTML5 gaming conference. He is also JsDay veteran, attending the conference since the very first edition."
        },
        "location":"Track 1",
        "starting_at":"2013-05-16 11:30:00",
        "ending_at":"2013-05-16 12:00:00"
   },
   {
        "uid":"talk-163",
        "title":"Zombie code",
        "description":"'Have you ever had the need to figure out how to survive a Javascript Zombiecodepocalipse? Have you ever dreamed about loads of living legacy code and the urge to run away from it? Hundreds of lines of code tightly coupled and hardly understandable there were trying to catch you? I've been there and I'm a survivor because I learned the art of refactoring. This talk is about how to deal with features request, deadlines and still increase the maintainability of your code.'",
        "speaker":{
            "name":"Marco Cedaro ",
            "description":"Marco is a Javascript Pirate. Father of two, meteoropathic and with an insane passion for lo-fi music. Frontend developer since he was able to grow a beard, he worked for Yoox Group for 5 years and then, after 1 year with Spreaker.com, decided to move to London. Now he is employed at Shazam, where he's currently using the experience of his years spent designing and maintaining clientside architectures, APIs and continuous integration processes. He is proudly involved in the organization of From The Front conferences."
        },
        "location":"Track 2",
        "starting_at":"2013-05-16 11:30:00",
        "ending_at":"2013-05-16 12:00:00"
   },
   {
        "uid":"talk-176",
        "title":"How to build single page applications in Javascript",
        "description":"Learn how to build modern browser-based apps that take advantage of stronger client platforms. You'll discover the optimal design approach and the right techniques to develop and test SPA.",
        "speaker":{
            "name":"Giulio Cesare Solaroli ",
            "description":"Clipperz.com co-founder"
        },
        "location":"Track 1",
        "starting_at":"2013-05-16 12:00:00",
        "ending_at":"2013-05-16 13:00:00"
   },
   {
        "uid":"talk-167",
        "title":"Cloud Messaging with Node.js and RabbitMQ",
        "description":"In this talk I'd like to present CloudStagram an Instagram clone prototype that has been built with ''real time'' features from the get go. New uploaded images are broadcasted for processing using RabbitMQ from the node.js frontend to the Clojure backend. From there real time updates are pushed back to the node.js servers and then to the browser via sock.js. All this implemented in such a fashion that allows horizontal scalability of both the frontend app and the workers app with the requirement of deploying the app to a public Cloud. In this talk you will learn about the advantages of a message oriented architecture to be able to mash up together a polyglot system of apps and services.",
        "speaker":{
            "name":"Alvaro Videla ",
            "description":"Alvaro Videla works at VMware as Developer Advocate for Cloud Foundry. Before moving to Europe he used to work in Shanghai where he helped building one of Germany biggest dating websites. He co-authored the book ''RabbitMQ in Action'' for Manning Publishing. Some of his open source projects can be found here: http://github.com/videlalvaro. Apart from code related stuff he likes traveling with his wife, listening/playing music and reading books."
        },
        "location":"Track 2",
        "starting_at":"2013-05-16 12:00:00",
        "ending_at":"2013-05-16 13:00:00"
   },
   {
        "uid":"talk-175",
        "title":"Practical Responsive Web Design",
        "description":"Responsive web design is rapidly becoming the pattern of choice for building websites that work across all devices.  Unfortunately, this pattern comes with performance and maintainability concerns if not executed the right way.  This talk will explore precise strategies that you can use to make responsive sites that look great and perform well.  You will walk away knowing how to handle retina images, what breakpoints to use, how to treat older browsers, and other tactical tips that you need to know to be successful with RWD.",
        "speaker":{
            "name":"Jonathan Klein ",
            "description":"Jonathan is a software engineer at Etsy, where he focuses on solving web performance and scalability challenges. Prior to working at Etsy he spent almost four years at Wayfair, where he led the team that converted the primary tech stack to PHP/Lighttpd/FreeBSD. He started and organizes the Boston Web Performance Meetup Group, and he contributes to a few open source projects, including the HTTPArchive and CSSLint. Jonathan blogs regularly at http://www.jonathanklein.net and can be found on Twitter at @jonathanklein."
        },
        "location":"Track 1",
        "starting_at":"2013-05-16 14:30:00",
        "ending_at":"2013-05-16 15:00:00"
   },
   {
        "uid":"talk-235",
        "title":"You are not service-oriented enough",
        "description":"The UNIX philosophy of doing one thing and doing it well applies to web apps as well. Ruby gems, NPM and all of their cousins are great for modularizing code. Yet most developers bundle dozens after dozens of modules together into monolithic projects when building their customer facing products. It is true for the servers and it is especially true for clients. But what if there was a way to truly stick to the UNIX philosophy? What if we could pipe products together on the highest level and not just on the module level? This talk will show you a way of doing this. It will be a roller-coaster ride through service-oriented architecture, showing you common problems as well as some cool ideas you can start using right away!",
        "speaker":{
            "name":"Jakob Mattsson ",
            "description":"Jakob is an entrepreneur. His current company, which he co-founded as CTO, is his third startup. He is a developer at heart and started out building games using C++, but ended up building web based services and fell in love with JavaScript. Lately he has also become a huge fan of Node.js. When Jakob is involved, JavaScript is everywhere and great architecture is the top priority. Over the last years he has been sharing his thoughts and experiences on programming languages, working in startups and building better software at a large number of universities and conferences all over Europe."
        },
        "location":"Track 2",
        "starting_at":"2013-05-16 14:30:00",
        "ending_at":"2013-05-16 15:00:00"
   },
   {
        "uid":"talk-164",
        "title":"An introduction to Knockout.js",
        "description":"New generation browsers are virtual machines in which you can run real javascript applications. That means that the size of your javascript code is growing fast and its design must be maintainable during its lifetime using the same patterns that we apply to our server side code. Knockout.js is a javascript library that implement the MVVM pattern on the client side of your web applications using the well known pattern and a strong binding engine that keeps your data synchronized with the view. During the session we will see how to use knockout.js with our web applications, with examples, tips and consideration about its use.",
        "speaker":{
            "name":"Emanuele DelBono ",
            "description":"I'm a web developer that writes application in C#, Ruby and Javascript."
        },
        "location":"Track 1",
        "starting_at":"2013-05-16 15:00:00",
        "ending_at":"2013-05-16 16:00:00"
   },
   {
        "uid":"talk-178",
        "title":"Taming asynchronous programming (beyond promises)",
        "description":"Description: JS developers must deal with asynchronous programming everyday. This is a complex subject and one of the most common causes of spaghetti code and hard to maintain code bases, specially if they are large. In this talk I'll highlight the main problems of callback based programming, then we will explore some tools to solve this problems like AsyncJS and the promises approach. Finally we will discover that promises are not our last tool against asynchronous problems. Contents: Continuation Passing Style (callback hell), Some functional programming can help us, Asynchronous control flow (probably I'll use AsyncJS to illustrate some examples), Promises, Promises are not silver bullets, Event Streams (a.k.a. Reactive Programming)",
        "speaker":{
            "name":"Enrique Amodeo ",
            "description":"I'm an independent consultant and coacher based at Madrid, a very eclectic professional with very different interests and more than 12 years of experience. Some of my areas of expertise are JS, REST, noSQL, compilers, object oriented programming and functional programming. As an agile practitioner, I use TDD/BDD and emergent design in my every day work and tries to travel light. With experience in both front end and server side development, I think of myself as a full stack engineer. Although I've worked with several technical stacks, including JAVA/JEE, in 2005 I fell in love with JS. Since then I focus on working with JS and HTML5. Nowadays I'm very happy to be able to apply my JS knowledge to the server side thanks to projects like NodeJS. Self published writer, I'm writing what seems to be the first book about REST APIs design in spanish at lean pub (https://leanpub.com/introduccion_apis_rest). In my free time run a (kind of controversial) blog in spanish about software engineering: http://eamodeorubio.wordpress.com/ Currently I'm collaborating with Agilar (http://www.agilar.org/) as a XP Coacher & Trainer, and recently I became the CTO of a startup called HipHunters (a fashion social network). An active member of the JS community, I'm cofounder and coorganizer of MadridJS local developers group (http://www.meetup.com/madridjs/) and the SpainJS international conference (http://spainjs.org/)."
        },
        "location":"Track 2",
        "starting_at":"2013-05-16 15:00:00",
        "ending_at":"2013-05-16 16:00:00"
   },
   {
        "uid":"talk-225",
        "title":"Writing Efficient Javascript Code",
        "description":"Modern web applications often include fairly complex Javascript code on the client side, and the performance of this code can become a critical factor limiting application features. From the perspective of an engineer in the V8 team I will explain the essential rules for getting better performance out of modern Javascript engines (obviously with a particular focus on V8).",
        "speaker":{
            "name":"Massimiliano Mantione ",
            "description":"I am an enthusiast software engineer, mostly interested in programming languages and compiler optimizations. I curently work on the V8 Javascript virtual machine in the Chrome team in Google. In the past I have worked on the Mono JIT compiler (the free software CLR reimplementation) in Novell with Miguel de Icaza, and on game servers, virtual tradeshows rendered online in a browser window, embedded systems, GSM networks, J2EE and databases."
        },
        "location":"Track 1",
        "starting_at":"2013-05-16 16:00:00",
        "ending_at":"2013-05-16 17:00:00"
   },
   {
        "uid":"talk-179",
        "title":"A highly scalable cross-platform mobile app development strategy",
        "description":"When it comes to deciding what technologies to use in creating a cross-platform mobile app, there’s plenty to choose from.  Each has their own benefits, but to be able to target all the major platforms with ease, such as iOS, Android, BlackBerry and Windows Phone requires a highly capable application framework.  This is where Sencha can help. Sencha has been building frameworks and tools built around HTML5 for several years.  In this session you will get a sense for how the Sencha Touch framework, with its MVC architecture, can be easily used for building powerful cross-platform apps, and how Sencha Architect can aid in the overall design and development process.",
        "speaker":{
            "name":"Daniel Gallo ",
            "description":"Dan has over 8 years experience developing innovative web-based applications using a variety of technologies, and specialises in ASP.NET C# and JavaScript. He established the South-West England Sencha Meetup Group in 2011, to help bring the Sencha developer community together in the region. In early 2012, Dan joined Sencha as one of their Sales Engineers in Europe, where he provides pre-sales technical assistance regarding the Sencha product line."
        },
        "location":"Track 2",
        "starting_at":"2013-05-16 16:00:00",
        "ending_at":"2013-05-16 17:00:00"
   },
   {
        "uid":"talk-156",
        "title":"Excessive Enhancement - Are we taking proper care of the Web?",
        "description":"We all love to see exciting and innovative 'interface shizzle' driven by JavaScript and the ever increasing rendering capabilities of modern browsers, but are we getting these at the expense of the Web? This talk will explore the good, the bad, and the fugly of rich interfaces, while examining how and why we should take care not to damage the Web.",
        "speaker":{
            "name":"Phil Hawksworth ",
            "description":"Phil is a JavaScript developer who has been developing web applications since the late 90s. These days in his role as a Technical Director at R/GA in London, working for clients like Nike, O2, Beats By Dre and Getty Images, he focuses on technical architectures, wrangling developers and designers, and banging on about things like unobtrusive JavaScript, open web standards and tasty browser shenanigans. Some say that his Instagram feed contains more photos of cats than might be considered healthy for a grown man, but he's convinced that he doesn't have a problem."
        },
        "location":"Keynote",
        "starting_at":"2013-05-16 09:45:00",
        "ending_at":"2013-05-16 10:45:00"
   }
];