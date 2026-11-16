

/* Programming Languages Array and Loop */

const showLanguagesBtn = document.getElementById("showLanguagesBtn");
const languageResults = document.getElementById("languageResults");

if (showLanguagesBtn && languageResults) {
    const languages = ["Python", "Java", "JavaScript", "C++", "C#"];

    showLanguagesBtn.addEventListener("click", () => {
        if (languageResults.hasChildNodes()) {
            languageResults.replaceChildren();
            showLanguagesBtn.setAttribute("aria-expanded", "false");
        } else {
            const list = document.createElement("ul");

            for (let i = 0; i < languages.length; i++) {
                const item = document.createElement("li");
                item.textContent = languages[i];
                list.appendChild(item);
            }

            languageResults.appendChild(list);
            showLanguagesBtn.setAttribute("aria-expanded", "true");
        }
    });

    showLanguagesBtn.setAttribute("aria-expanded", "false");
}



/* Programming Language Recommendation */

const recommendLanguageBtn = document.getElementById("recommendLanguageBtn");
const programmingInterest = document.getElementById("programmingInterest");
const recommendationResult = document.getElementById("recommendationResult");

if (recommendLanguageBtn && programmingInterest && recommendationResult) {
    recommendLanguageBtn.addEventListener("click", () => {
        const interest = programmingInterest.value;
        let recommendation = "";

        if (interest === "web") {
            recommendation = "JavaScript is a great starting point for web development.";
        } else if (interest === "data") {
            recommendation = "Python is a great starting point for data science and artificial intelligence.";
        } else if (interest === "mobile") {
            recommendation = "Java is a useful choice for learning Android application development.";
        } else if (interest === "games") {
            recommendation = "C# is a popular choice for creating games with Unity.";
        } else if (interest === "software") {
            recommendation = "C++ is useful for learning high-performance desktop software development.";
        } else {
            recommendation = "Please select an interest first.";
        }

        recommendationResult.textContent = recommendation;
    });
}


/* Clear Recommendation When No Interest Is Selected */

if (programmingInterest && recommendationResult) {
    programmingInterest.addEventListener("change", () => {
        if (programmingInterest.value === "") {
            recommendationResult.textContent = "";
        }
    });
}



/* Tool Comparisons */
document.addEventListener("DOMContentLoaded", () => {
    const comparisonButton = document.getElementById("show-tools-comparison");
    const comparisonSection = document.getElementById("tools-comparison");

    if (comparisonButton && comparisonSection) {
        comparisonButton.addEventListener("click", (event) => {
            event.preventDefault();

            comparisonSection.hidden = !comparisonSection.hidden;

            comparisonButton.setAttribute(
                "aria-expanded",
                String(!comparisonSection.hidden)
            );

            if (!comparisonSection.hidden) {
                comparisonSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    }
});




/* Career Explorer */

document.addEventListener("DOMContentLoaded", () => {
    const careerForm = document.getElementById("career-search-form");
    const careerSelect = document.getElementById("career-search");
    const careerResults = document.getElementById("career-search-results");

    if (careerForm && careerSelect && careerResults) {

        const careers = {
            "software-engineering": {
                title: "Software Engineering",
                description: "Designs, develops, tests, and maintains software applications and systems.",
                skills: "Programming, problem-solving, debugging, software design, and teamwork.",
                tasks: "Writing code, testing applications, fixing errors, and collaborating with development teams.",
                roles: "Software Engineer, Software Developer, Application Developer, Backend Developer."
            },
            "cybersecurity": {
                title: "Cybersecurity",
                description: "Protects computer systems, networks, and information from security threats.",
                skills: "Network security, risk assessment, security monitoring, and incident response.",
                tasks: "Monitoring threats, investigating security alerts, assessing vulnerabilities, and improving security controls.",
                roles: "Security Analyst, Security Engineer, Security Consultant, Incident Responder."
            },
            "data-science": {
                title: "Data Science",
                description: "Uses statistics, programming, and data analysis to discover patterns and support decisions.",
                skills: "Python, statistics, data visualization, SQL, and analytical thinking.",
                tasks: "Cleaning datasets, analyzing trends, building predictive models, and presenting findings.",
                roles: "Data Scientist, Data Analyst, Research Data Scientist, Analytics Specialist."
            },
            "artificial-intelligence": {
                title: "Artificial Intelligence",
                description: "Develops computer systems that perform tasks involving learning, reasoning, and intelligent decision-making.",
                skills: "Python, machine learning, mathematics, algorithms, and data processing.",
                tasks: "Developing AI applications, preparing training data, evaluating models, and improving system performance.",
                roles: "AI Engineer, AI Developer, AI Research Scientist, Applied AI Specialist."
            },
            "web-development": {
                title: "Web Development",
                description: "Creates and maintains websites and web applications.",
                skills: "HTML, CSS, JavaScript, responsive design, and debugging.",
                tasks: "Building webpages, implementing interactive features, testing websites, and improving accessibility.",
                roles: "Frontend Developer, Backend Web Developer, Full-Stack Developer, Web Developer."
            },
            "computer-science": {
                title: "Computer Science",
                description: "Studies computation, algorithms, data structures, and the principles behind computer systems.",
                skills: "Algorithms, programming, mathematics, data structures, and logical reasoning.",
                tasks: "Designing algorithms, researching computing problems, developing programs, and evaluating solutions.",
                roles: "Computer Scientist, Research Programmer, Software Developer, Computing Researcher."
            },
            "cloud-engineering": {
                title: "Cloud Engineering",
                description: "Builds and maintains computing infrastructure and services hosted on cloud platforms.",
                skills: "Cloud platforms, networking, automation, security, and infrastructure management.",
                tasks: "Deploying cloud resources, monitoring services, configuring access, and managing infrastructure.",
                roles: "Cloud Engineer, Cloud Infrastructure Engineer, Cloud Administrator, Cloud Architect."
            },
            "devops-engineering": {
                title: "DevOps Engineering",
                description: "Improves collaboration between software development and IT operations through automation and reliable delivery.",
                skills: "CI/CD, scripting, containers, infrastructure automation, and monitoring.",
                tasks: "Automating deployments, maintaining pipelines, managing environments, and troubleshooting releases.",
                roles: "DevOps Engineer, Platform Engineer, Build Engineer, Release Engineer."
            },
            "electrical-engineering": {
                title: "Electrical Engineering",
                description: "Designs and evaluates electrical systems, electronic circuits, and power-related technologies.",
                skills: "Circuit analysis, mathematics, electronics, simulation, and technical design.",
                tasks: "Designing circuits, testing electrical equipment, analyzing performance, and documenting specifications.",
                roles: "Electrical Engineer, Electronics Engineer, Power Systems Engineer, Controls Engineer."
            },
            "mechanical-engineering": {
                title: "Mechanical Engineering",
                description: "Designs, analyzes, and improves mechanical devices, machines, and systems.",
                skills: "CAD, physics, mechanics, materials science, and problem-solving.",
                tasks: "Creating mechanical designs, testing prototypes, analyzing performance, and improving machinery.",
                roles: "Mechanical Engineer, Design Engineer, Manufacturing Engineer, Product Development Engineer."
            },
            "aerospace-engineering": {
                title: "Aerospace Engineering",
                description: "Develops aircraft, spacecraft, and related flight systems.",
                skills: "Aerodynamics, mathematics, physics, simulation, and systems engineering.",
                tasks: "Designing flight components, analyzing performance, testing prototypes, and evaluating safety requirements.",
                roles: "Aerospace Engineer, Flight Systems Engineer, Propulsion Engineer, Aeronautical Engineer."
            },
            "sales-engineering": {
                title: "Sales Engineering",
                description: "Combines technical knowledge with customer communication to explain and recommend complex products.",
                skills: "Technical presentations, product knowledge, communication, problem-solving, and customer analysis.",
                tasks: "Demonstrating products, understanding customer requirements, preparing technical proposals, and supporting sales teams.",
                roles: "Sales Engineer, Solutions Consultant, Technical Sales Specialist, Presales Engineer."
            },
            "civil-engineering": {
                title: "Civil Engineering",
                description: "Plans, designs, and oversees infrastructure such as roads, bridges, buildings, and water systems.",
                skills: "Structural analysis, CAD, mathematics, project planning, and construction principles.",
                tasks: "Preparing designs, reviewing site conditions, evaluating materials, and monitoring construction projects.",
                roles: "Civil Engineer, Structural Engineer, Transportation Engineer, Geotechnical Engineer."
            },
            "robotics-engineering": {
                title: "Robotics Engineering",
                description: "Designs and programs robotic machines that interact with physical environments.",
                skills: "Programming, electronics, control systems, mechanics, and sensor integration.",
                tasks: "Building robotic systems, programming movement, integrating sensors, and testing automation.",
                roles: "Robotics Engineer, Robotics Software Engineer, Automation Engineer, Robotics Systems Engineer."
            },
            "biomedical-engineering": {
                title: "Biomedical Engineering",
                description: "Applies engineering principles to medical equipment, healthcare technology, and biological systems.",
                skills: "Biology, engineering design, electronics, testing, and technical analysis.",
                tasks: "Developing medical devices, evaluating prototypes, analyzing equipment performance, and supporting product testing.",
                roles: "Biomedical Engineer, Medical Device Engineer, Clinical Engineer, Biomedical Design Engineer."
            },
            "mechatronics-engineering": {
                title: "Mechatronics Engineering",
                description: "Combines mechanical engineering, electronics, and software to create automated systems.",
                skills: "Control systems, programming, mechanical design, electronics, and automation.",
                tasks: "Integrating sensors, programming controllers, designing automated machines, and troubleshooting equipment.",
                roles: "Mechatronics Engineer, Automation Engineer, Controls Engineer, Systems Integration Engineer."
            },
            "computer-hardware-engineering": {
                title: "Computer Hardware Engineering",
                description: "Designs and tests physical computer components and electronic computing systems.",
                skills: "Digital electronics, circuit design, computer architecture, testing, and hardware troubleshooting.",
                tasks: "Designing hardware components, testing circuit boards, evaluating prototypes, and improving hardware performance.",
                roles: "Computer Hardware Engineer, Hardware Design Engineer, Validation Engineer, Embedded Hardware Engineer."
            },
            "network-engineering": {
                title: "Network Engineering",
                description: "Designs, implements, and maintains networks that connect computers and communication systems.",
                skills: "TCP/IP, routing, switching, network troubleshooting, and network security.",
                tasks: "Configuring network devices, monitoring connectivity, diagnosing outages, and improving network reliability.",
                roles: "Network Engineer, Network Administrator, Network Infrastructure Engineer, Network Operations Engineer."
            },
            "machine-learning-engineering": {
                title: "Machine Learning Engineering",
                description: "Builds and deploys software systems that use machine learning models.",
                skills: "Python, machine learning frameworks, data pipelines, model evaluation, and software engineering.",
                tasks: "Training models, deploying predictions, monitoring accuracy, and improving machine learning workflows.",
                roles: "Machine Learning Engineer, ML Platform Engineer, Applied ML Engineer, MLOps Engineer."
            },
            "data-engineering": {
                title: "Data Engineering",
                description: "Creates systems that collect, organize, transform, and deliver data for analysis.",
                skills: "SQL, Python, databases, ETL pipelines, and cloud data platforms.",
                tasks: "Building data pipelines, managing databases, validating data quality, and optimizing data processing.",
                roles: "Data Engineer, Data Pipeline Engineer, Analytics Engineer, Data Platform Engineer."
            },
            "mobile-app-development": {
                title: "Mobile App Development",
                description: "Develops applications for smartphones, tablets, and other mobile devices.",
                skills: "Swift, Kotlin, mobile UI design, APIs, and application testing.",
                tasks: "Building mobile interfaces, integrating services, fixing bugs, and publishing app updates.",
                roles: "iOS Developer, Android Developer, Mobile Application Developer, Cross-Platform Developer."
            },
            "game-development": {
                title: "Game Development",
                description: "Creates interactive video games by combining programming, design, and digital media.",
                skills: "C#, C++, game engines, debugging, and gameplay programming.",
                tasks: "Implementing game mechanics, developing gameplay systems, testing performance, and fixing bugs.",
                roles: "Game Developer, Gameplay Programmer, Game Engine Programmer, Tools Programmer."
            },
            "it-support": {
                title: "IT Support",
                description: "Helps users troubleshoot and resolve computer hardware, software, and connectivity problems.",
                skills: "Technical troubleshooting, operating systems, communication, hardware, and customer support.",
                tasks: "Responding to support requests, installing software, diagnosing problems, and maintaining devices.",
                roles: "IT Support Specialist, Help Desk Technician, Desktop Support Technician, Technical Support Analyst."
            },
            "systems-administration": {
                title: "Systems Administration",
                description: "Maintains computer servers, operating systems, user accounts, and organizational IT services.",
                skills: "Windows Server, Linux, scripting, access management, and system monitoring.",
                tasks: "Managing accounts, applying updates, configuring servers, performing backups, and resolving system issues.",
                roles: "Systems Administrator, Server Administrator, Infrastructure Administrator, IT Systems Specialist."
            },
            "site-reliability-engineering": {
                title: "Site Reliability Engineering",
                description: "Uses software engineering and automation to improve the reliability of production systems.",
                skills: "Programming, monitoring, incident response, cloud infrastructure, and automation.",
                tasks: "Investigating outages, improving service availability, automating operations, and monitoring system performance.",
                roles: "Site Reliability Engineer, Reliability Engineer, Production Engineer, Infrastructure Reliability Engineer."
            },
            "solutions-engineering": {
                title: "Solutions Engineering",
                description: "Designs technical solutions that address customer or organizational requirements.",
                skills: "System architecture, APIs, communication, technical demonstrations, and problem-solving.",
                tasks: "Analyzing requirements, designing integrations, demonstrating solutions, and supporting implementations.",
                roles: "Solutions Engineer, Technical Solutions Engineer, Integration Engineer, Customer Solutions Engineer."
            },
            "technical-product-management": {
                title: "Technical Product Management",
                description: "Guides the development of technology products by balancing user needs, business goals, and technical requirements.",
                skills: "Product planning, requirements analysis, communication, prioritization, and technical understanding.",
                tasks: "Defining product requirements, planning features, coordinating teams, and evaluating product feedback.",
                roles: "Technical Product Manager, Product Manager, Platform Product Manager, Product Owner."
            },
            "ux-ui-design": {
                title: "UX/UI Design",
                description: "Designs digital products that are useful, accessible, and easy to navigate.",
                skills: "User research, wireframing, prototyping, visual design, and usability testing.",
                tasks: "Researching user needs, creating interface designs, testing prototypes, and improving user experiences.",
                roles: "UX Designer, UI Designer, Product Designer, Interaction Designer."
            }
        };

        // Hide details whenever the selection changes.
        careerSelect.addEventListener("change", () => {
            careerResults.hidden = true;
            careerResults.replaceChildren();
        });

        // Show or hide details when View Details is clicked.
        careerForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const selectedCareer = careerSelect.value;

            if (!selectedCareer) {
                careerResults.hidden = true;
                careerResults.replaceChildren();
                return;
            }

            if (!careerResults.hidden) {
                careerResults.hidden = true;
                careerResults.replaceChildren();
                return;
            }

            const career = careers[selectedCareer];

            if (!career) {
                careerResults.hidden = true;
                careerResults.replaceChildren();
                return;
            }

            careerResults.innerHTML = `
                <h3>${career.title}</h3>
                <p><strong>Description:</strong> ${career.description}</p>
                <p><strong>Key Skills:</strong> ${career.skills}</p>
                <p><strong>Typical Tasks:</strong> ${career.tasks}</p>
                <p><strong>Potential Job Roles:</strong> ${career.roles}</p>
            `;

            careerResults.hidden = false;
        });
    }
});


/* Contact Form - Formspree Submission */

document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contact-form");
    const successMessage = document.getElementById("form-success");

    if (contactForm && successMessage) {
        contactForm.addEventListener("submit", async (event) => {
            event.preventDefault();

            successMessage.hidden = true;

            try {
                const response = await fetch(contactForm.action, {
                    method: "POST",
                    body: new FormData(contactForm),
                    headers: {
                        "Accept": "application/json"
                    }
                });

                if (response.ok) {
                    contactForm.reset();
                    successMessage.hidden = false;
                    successMessage.textContent =
                        "✓ Thank you! Your message has been received.";
                } else {
                    successMessage.hidden = false;
                    successMessage.textContent =
                        "Your message could not be sent. Please try again.";
                }
            } catch (error) {
                successMessage.hidden = false;
                successMessage.textContent =
                    "Unable to send your message. Please check your connection.";
            }
        });
    }
});

