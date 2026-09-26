document.addEventListener("DOMContentLoaded", function () {
    const topics = {
        stress: `
            <h3>What is Stress?</h3>
            <p>Stress is a natural response of the body to challenges or demands. It can be caused by work, relationships, financial pressures, or health concerns. While short-term stress can be beneficial, chronic stress can lead to serious physical and mental health issues.</p>
            
            <h3>Effects of Stress</h3>
            <ul>
                <li>Increases the risk of heart disease and high blood pressure</li>
                <li>Weakens the immune system</li>
                <li>Causes anxiety and depression</li>
                <li>Leads to sleep disorders and fatigue</li>
                <li>Reduces focus and decision-making abilities</li>
            </ul>
            
            <h3>How to Manage Stress?</h3>
            <p>Here are some effective ways to cope with stress:</p>
            <ul>
                <li><strong>Exercise:</strong> Physical activity releases endorphins, which reduce stress levels.</li>
                <li><strong>Meditation and Deep Breathing:</strong> These techniques help calm the mind and relax the body.</li>
                <li><strong>Healthy Diet:</strong> Nutritious foods improve brain function and lower stress hormones.</li>
                <li><strong>Social Support:</strong> Talking to friends or family members can provide emotional relief.</li>
                <li><strong>Quality Sleep:</strong> A proper sleep schedule helps in stress management.</li>
            </ul>
            
        `,

        anxiety: `
            <h3>What is Anxiety?</h3>
            <p>Anxiety is the body's response to stress or danger. It can manifest as excessive worry, nervousness, or fear. While mild anxiety is normal, severe anxiety can disrupt daily life.</p>
            
            <h3>Common Symptoms of Anxiety</h3>
            <ul>
                <li>Restlessness and nervousness</li>
                <li>Rapid heartbeat and sweating</li>
                <li>Difficulty concentrating</li>
                <li>Insomnia and irritability</li>
                <li>Panic attacks</li>
            </ul>

            <h3>Ways to Reduce Anxiety</h3>
            <ul>
                <li>Practice mindfulness and relaxation exercises.</li>
                <li>Engage in physical activity like walking or yoga.</li>
                <li>Reduce caffeine and alcohol intake.</li>
                <li>Maintain a structured daily routine.</li>
                <li>Seek therapy or counseling if needed.</li>
            </ul>
            
        `,

        diet: `
            <h3>Importance of a Balanced Diet</h3>
            <p>A well-balanced diet is essential for maintaining both mental and physical well-being. It provides the necessary nutrients to keep the body functioning optimally and reduces the risk of chronic diseases.</p>
        
            <h3>Benefits of a Healthy Diet</h3>
            <ul>
                <li>Boosts brain function and improves concentration.</li>
                <li>Strengthens the immune system, reducing the risk of infections.</li>
                <li>Regulates blood sugar levels and prevents mood swings.</li>
                <li>Reduces inflammation, which is linked to stress and anxiety.</li>
                <li>Maintains a healthy gut, which is directly connected to mental health.</li>
            </ul>
        
            <h3>Best Foods for Mental and Physical Health</h3>
            <ul>
                <li><strong>Leafy Greens:</strong> Rich in vitamins and minerals like magnesium, which helps reduce stress.</li>
                <li><strong>Fatty Fish:</strong> Contains omega-3 fatty acids, which enhance brain health and reduce anxiety.</li>
                <li><strong>Nuts and Seeds:</strong> Provide essential nutrients like zinc and selenium, which are linked to improved mood.</li>
                <li><strong>Whole Grains:</strong> Help regulate serotonin levels, which enhance mood stability.</li>
                <li><strong>Fruits like Bananas and Berries:</strong> Rich in antioxidants and vitamins that boost energy and brain function.</li>
            </ul>
            
        `,


        sleep: `
            <h3>Why is Sleep Important?</h3>
            <p>Sleep is crucial for overall health as it allows the body and brain to recover. Poor sleep can lead to cognitive decline, mood disorders, and an increased risk of chronic diseases.</p>
    
            <h3>Consequences of Poor Sleep</h3>
            <ul>
                <li>Increases the risk of heart disease, diabetes, and obesity.</li>
                <li>Weakens the immune system, making the body prone to illnesses.</li>
                <li>Causes memory issues and reduces cognitive function.</li>
                <li>Contributes to stress, anxiety, and depression.</li>
                <li>Leads to reduced energy levels and daytime fatigue.</li>
            </ul>
    
            <h3>Tips for Better Sleep</h3>
            <ul>
                <li><strong>Maintain a Consistent Sleep Schedule:</strong> Going to bed and waking up at the same time improves sleep quality.</li>
                <li><strong>Avoid Caffeine and Heavy Meals Before Bedtime:</strong> These can disrupt your ability to fall asleep.</li>
                <li><strong>Reduce Screen Time:</strong> The blue light from screens can interfere with melatonin production.</li>
                <li><strong>Create a Relaxing Bedtime Routine:</strong> Reading or meditation can help signal your body that it's time to sleep.</li>
                <li><strong>Keep Your Sleeping Environment Comfortable:</strong> A cool, dark, and quiet room promotes better sleep.</li>
            </ul>
            
        `,

        exercise: `
            <h3>Why is Exercise Essential?</h3>
            <p>Exercise is one of the most effective ways to improve physical health, boost mental well-being, and enhance overall quality of life.</p>
            
            <h3>Health Benefits of Regular Exercise</h3>
            <ul>
                <li>Releases endorphins, which improve mood and reduce stress.</li>
                <li>Enhances cardiovascular health, reducing the risk of heart disease.</li>
                <li>Boosts energy levels by improving oxygen and nutrient flow to tissues.</li>
                <li>Improves sleep quality and helps regulate the sleep cycle.</li>
                <li>Reduces symptoms of anxiety and depression.</li>
            </ul>
            
            <h3>Best Types of Exercise for Mental and Physical Health</h3>
            <ul>
                <li><strong>Aerobic Exercise:</strong> Activities like running, swimming, and cycling increase heart rate and improve endurance.</li>
                <li><strong>Strength Training:</strong> Lifting weights or resistance exercises help build muscle and boost confidence.</li>
                <li><strong>Yoga and Stretching:</strong> Reduces stress, improves flexibility, and enhances mental clarity.</li>
                <li><strong>Walking:</strong> A simple and effective way to clear the mind and boost energy.</li>
                <li><strong>High-Intensity Interval Training (HIIT):</strong> Short bursts of intense activity improve metabolism and mental focus.</li>
            </ul>
            
        `,

        socialinteraction: `
            <h3>The Role of Social Connections in Mental Health</h3>
            <p>Humans are social beings, and strong relationships are essential for emotional well-being.</p>

            <h3>Benefits of Social Interaction</h3>
            <ul>
                <li>Reduces feelings of loneliness and depression.</li>
                <li>Boosts self-esteem and confidence.</li>
                <li>Encourages positive behavior and habits.</li>
                <li>Provides emotional support during tough times.</li>
            </ul>

            <h3>Ways to Improve Social Interaction</h3>
            <ul>
                <li>Engage in group activities or hobbies.</li>
                <li>Stay in touch with family and friends.</li>
                <li>Join support groups or clubs.</li>
                <li>Volunteer for community activities.</li>
            </ul>
            
        `,

        focus: `
            <h3>How to Improve Focus and Concentration?</h3>
            <p>With increasing distractions in modern life, maintaining focus has become a challenge.</p>

            <h3>Causes of Poor Focus</h3>
            <ul>
                <li>Excessive screen time</li>
                <li>Lack of sleep</li>
                <li>Stress and anxiety</li>
                <li>Unhealthy diet</li>
                <li>Multitasking</li>
            </ul>

            <h3>Ways to Enhance Focus</h3>
            <ul>
                <li>Practice mindfulness and meditation.</li>
                <li>Follow the Pomodoro technique (work in short bursts).</li>
                <li>Stay hydrated and eat brain-boosting foods.</li>
                <li>Limit distractions by creating a dedicated workspace.</li>
                <li>Take short breaks to refresh your mind.</li>
            </ul>
            
        `
    };
    const infoSection = document.createElement("div");
    infoSection.id = "infoSection";
    infoSection.style.padding = "20px";
    infoSection.style.background = "#f4f4f4";
    infoSection.style.borderRadius = "10px";
    infoSection.style.marginTop = "20px";
    infoSection.style.display = "none";
    document.body.appendChild(infoSection);

    function displayInfo(topic) {
        if (topics[topic]) {
            infoSection.innerHTML = topics[topic];
            infoSection.style.display = "block";
        } else {
            infoSection.innerHTML = `<p style="color: red;">No results found for "${topic}". Try searching for stress, anxiety, diet, sleep, exercise, or focus.</p>`;
            infoSection.style.display = "block";
        }
    }

    // Handle search button click
    document.getElementById("search-btn").addEventListener("click", function () {
        const query = document.getElementById("search-box").value.toLowerCase().trim();
        displayInfo(query);
    });

    // Trigger search when pressing "Enter"
    document.getElementById("search-box").addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById("search-btn").click();
        }
    });
});