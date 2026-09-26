document.addEventListener("DOMContentLoaded", function () {
    const resultsContainer = document.getElementById("resultsContainer");

    function getSearchQuery() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get("query");
    }

    const searchQuery = getSearchQuery();

    if (searchQuery) {
        const searchResults = performFakeSearch(searchQuery);

        if (searchResults.length > 0) {
            displayResults(searchResults);
        } else {
            resultsContainer.innerHTML = `<p>No results found for "${searchQuery}"</p>`;
        }
    } else {
        resultsContainer.innerHTML = `<p>Please enter a search query.</p>`;
    }

    function performFakeSearch(query) {
        const topics = {
            stress: `
                    <div style="display: flex; flex-wrap: wrap; align-items: flex-start; gap: 20px; margin-bottom: 20px;">
                        <div style="flex: 1 1 400px; line-height: 1.6;">
                            <h3>What is Stress?</h3>
                            <p style="margin-bottom: 10px;">Stress is a natural response of the body to challenges or demands. It can be caused by work, relationships, financial pressures, or health concerns. While short-term stress can be beneficial, chronic stress can lead to serious physical and mental health issues.</p>
                        </div>
                        <img src="stress1.jpg" alt="Stressed Person" style="width: 100%; max-width: 200px; display: block; margin-bottom: 20px;">

                        <div style="flex: 1 1 400px; line-height: 1.6;">
                            <h3>Effects of Stress</h3>
                            <ul style="margin-bottom: 10px;">
                                <li>Increases the risk of heart disease and high blood pressure</li>
                                <li>Weakens the immune system</li>
                                <li>Causes anxiety and depression</li>
                                <li>Leads to sleep disorders and fatigue</li>
                                <li>Reduces focus and decision-making abilities</li>
                            </ul>
                        </div>

                        <div style="flex: 1 1 400px; line-height: 1.6;">
                            <h3>How to Manage Stress?</h3>
                            <p style="margin-bottom: 10px;">Here are some effective ways to cope with stress:</p>
                            <ul>
                                <li><strong>Exercise:</strong> Physical activity releases endorphins, which reduce stress levels.</li>
                                <li><strong>Meditation and Deep Breathing:</strong> These techniques help calm the mind and relax the body.</li>
                                <li><strong>Healthy Diet:</strong> Nutritious foods improve brain function and lower stress hormones.</li>
                                <li><strong>Social Support:</strong> Talking to friends or family members can provide emotional relief.</li>
                                <li><strong>Quality Sleep:</strong> A proper sleep schedule helps in stress management.</li>
                            </ul>
                        </div>
                        <img src="stress.jpg" alt="Stressed Person" style="width: 100%; max-width: 200px; display: block; margin-top: -180px; margin-bottom: 20px;">
                    </div>
            `,

            anxiety: `
                    <div style="display: flex; flex-wrap: wrap; align-items: flex-start; gap: 20px; margin-bottom: 20px;">
                        <div style="flex: 1 1 400px; line-height: 1.6;">
                            <h3>What is Anxiety?</h3>
                            <p style="margin-bottom: 10px;">Anxiety is the body's response to stress or danger. It can manifest as excessive worry, nervousness, or fear. While mild anxiety is normal, severe anxiety can disrupt daily life.</p>
                        </div>
                        <img src="anxiety.jpeg" alt="Types of Anxiety" style="width: 100%; max-width: 200px; display: block; margin-bottom: 20px;">

                        <div style="flex: 1 1 400px; line-height: 1.6;">
                            <h3>Common Symptoms of Anxiety</h3>
                            <ul style="margin-bottom: 10px;">
                                <li>Restlessness and nervousness</li>
                                <li>Rapid heartbeat and sweating</li>
                                <li>Difficulty concentrating</li>
                                <li>Insomnia and irritability</li>
                                <li>Panic attacks</li>
                            </ul>
                        </div>

                        <div style="flex: 1 1 400px; line-height: 1.2;">
                            <h3>Ways to Reduce Anxiety</h3>
                            <ul>
                                <li>Practice mindfulness and relaxation exercises.</li>
                                <li>Engage in physical activity like walking or yoga.</li>
                                <li>Reduce caffeine and alcohol intake.</li>
                                <li>Maintain a structured daily routine.</li>
                                <li>Seek therapy or counseling if needed.</li>
                            </ul>
                        </div>
                        
                        <div style="flex: 1 1 100%;">
                            <img src="anxiety1.png" alt="Tips for Anxiety" style="width: 100%; max-width: 200px; display: block; margin: 0 auto 20px;">
                        </div>
                    </div>
            `,

            diet: `
                <div style="display: flex; flex-wrap: wrap; align-items: flex-start; gap: 20px; margin-bottom: 20px;">
                    <div style="flex: 1 1 400px; line-height: 1.6;">
                        <h3>Importance of a Balanced Diet</h3>
                        <p style="margin-bottom: 10px;">A well-balanced diet is essential for maintaining both mental and physical well-being. It provides the necessary nutrients to keep the body functioning optimally and reduces the risk of chronic diseases.</p>
                    </div>
                    <img src="diet.webp" alt="Benefits of a Healthy Diet" style="width: 100%; max-width: 200px; display: block; margin-bottom: 20px;">

                    <div style="flex: 1 1 400px; line-height: 1.6;">
                        <h3>Benefits of a Healthy Diet</h3>
                        <ul>
                            <li>Boosts brain function and improves concentration.</li>
                            <li>Strengthens the immune system, reducing the risk of infections.</li>
                            <li>Regulates blood sugar levels and prevents mood swings.</li>
                            <li>Reduces inflammation, which is linked to stress and anxiety.</li>
                            <li>Maintains a healthy gut, which is directly connected to mental health.</li>
                        </ul>
                    </div>

                    <div style="flex: 1 1 400px; line-height: 1.2;">
                        <h3>Best Foods for Mental and Physical Health</h3>
                        <ul>
                            <li><strong>Leafy Greens:</strong> Rich in vitamins and minerals like magnesium, which helps reduce stress.</li>
                            <li><strong>Fatty Fish:</strong> Contains omega-3 fatty acids, which enhance brain health and reduce anxiety.</li>
                            <li><strong>Nuts and Seeds:</strong> Provide essential nutrients like zinc and selenium, which are linked to improved mood.</li>
                            <li><strong>Whole Grains:</strong> Help regulate serotonin levels, which enhance mood stability.</li>
                            <li><strong>Fruits like Bananas and Berries:</strong> Rich in antioxidants and vitamins that boost energy and brain function.</li>
                        </ul>
                    </div>

                    <div style="flex: 1 1 100%;">
                        <img src="diet1.jpg" alt="Best food to maintain a healthy diet" style="width: 100%; max-width: 200px; display: block; margin: 0 auto 20px;">
                    </div>
                </div>
            `,

            "mood swings": `
                <div style="display: flex; flex-wrap: wrap; align-items: flex-start; gap: 20px; margin-bottom: 20px;">
                    <div style="flex: 1 1 400px; line-height: 1.6;">
                        <h3>What are Mood Swings?</h3>
                        <p>Mood swings refer to sudden and intense changes in emotional state. A person may feel happy one moment and irritated or sad the next without any apparent reason.</p>
                    </div>
                    <img src="mood.jpg" alt="Causes of Mood Swings" style="width: 100%; max-width: 200px; display: block; margin-bottom: 20px;">

                    <div style="flex: 1 1 400px; line-height: 1.6;">
                        <h3>Common Causes of Mood Swings</h3>
                        <ul>
                            <li>Hormonal changes (puberty, pregnancy, menopause)</li>
                            <li>High levels of stress and anxiety</li>
                            <li>Sleep deprivation and fatigue</li>
                            <li>Mental health disorders (bipolar disorder, depression)</li>
                            <li>Poor diet and nutritional deficiencies</li>
                            <li>Substance use (alcohol, drugs, caffeine overdose)</li>
                        </ul>
                    </div>

                    <div style="flex: 1 1 400px; line-height: 1.2;">
                        <h3>Symptoms of Mood Swings</h3>
                        <ul>
                            <li>Sudden emotional outbursts</li>
                            <li>Feeling extremely happy and then deeply sad</li>
                            <li>Increased irritability and frustration</li>
                            <li>Loss of interest in daily activities</li>
                            <li>Difficulty concentrating and making decisions</li>
                        </ul>
                    </div>

                    <div style="flex: 1 1 400px; line-height: 1.2;">
                        <h3>How to Manage Mood Swings?</h3>
                        <ul>
                            <li><strong>Exercise Regularly:</strong> Physical activity helps regulate mood.</li>
                            <li><strong>Maintain a Healthy Diet:</strong> Eating balanced meals reduces mood fluctuations.</li>
                            <li><strong>Practice Mindfulness:</strong> Meditation and deep breathing improve emotional stability.</li>
                            <li><strong>Get Enough Sleep:</strong> A proper sleep cycle enhances emotional well-being.</li>
                            <li><strong>Seek Professional Help:</strong> Therapy or counseling can provide effective strategies to manage mood swings.</li>
                        </ul>
                    </div>
                    <div style="flex: 1 1 100%;">
                        <img src="mood1.png" alt="Ways to manage Mood Swings" style="width: 100%; max-width: 200px; display: block; margin: 0 auto 20px;">
                    </div>
                </div>
            `,

            "overwhelming sadness": `
                <div style="display: flex; flex-wrap: wrap; align-items: flex-start; gap: 20px; margin-bottom: 20px;">
                    <div style="flex: 1 1 400px; line-height: 1.6;">
                        <h3>What is Overwhelming Sadness</h3
                        <p>Overwhelming sadness is an intense emotional state that affects mental well-being and daily activities. It is often linked to prolonged grief, depression, or emotional distress.</p>
                    </div>
                    <img src="sad.jpg" alt="Causes of Sadness" style="width: 100%; max-width: 200px; display: block; margin-bottom: 20px;">

                    <div style="flex: 1 1 400px; line-height: 1.6;">
                        <h4>Causes</h4>
                        <ul>
                            <li><strong>Loss of a Loved One:</strong> Grief can lead to deep sadness that takes time to heal.</li>
                            <li><strong>Loneliness and Isolation:</strong> Lack of social connections can result in emotional distress.</li>
                            <li><strong>Past Trauma:</strong> Unresolved traumatic experiences may trigger prolonged sadness.</li>
                            <li><strong>Chronic Stress:</strong> Work, financial issues, and personal struggles can contribute to emotional exhaustion.</li>
                            <li><strong>Hormonal Changes:</strong> Depression and sadness can be linked to imbalances in brain chemicals.</li>
                        </ul>
                    </div>
                    <div style="flex: 1 1 400px; line-height: 1.2;">
                        <h4>Symptoms</h4>
                        <ul>
                            <li>Persistent feelings of sadness or emptiness</li>
                            <li>Loss of interest in activities once enjoyed</li>
                            <li>Fatigue, lack of energy, and difficulty concentrating</li>
                            <li>Changes in appetite and sleep patterns</li>
                            <li>Feeling hopeless, worthless, or excessive guilt</li>
                        </ul>
                    </div>
                    <div style="flex: 1 1 400px; line-height: 1.2;">
                        <h4>Ways to Cope with Overwhelming Sadness</h4>
                        <ul>
                            <li><strong>Talk to Someone:</strong> Expressing feelings to friends, family, or a counselor can provide emotional relief.</li>
                            <li><strong>Engage in Positive Activities:</strong> Hobbies, exercise, and self-care routines help improve mood.</li>
                            <li><strong>Practice Mindfulness:</strong> Meditation, journaling, and deep breathing techniques can reduce emotional stress.</li>
                            <li><strong>Seek Professional Help:</strong> If sadness persists for weeks, therapy or counseling may be beneficial.</li>
                            <li><strong>Maintain a Healthy Routine:</strong> Proper sleep, nutrition, and physical activity support emotional well-being.</li>
                        </ul>
                    </div>
                    <div style="flex: 1 1 100%;">
                        <img src="sad1.jpg" alt="Ways to control Sadness" style="width: 100%; max-width: 200px; display: block; margin: 0 auto 20px;">
                    </div>
                </div>
            `,

            "changes in performance": `
                <div style="display: flex; flex-wrap: wrap; align-items: flex-start; gap: 20px; margin-bottom: 20px;">
                    <div style="flex: 1 1 400px; line-height: 1.6;">
                        <h3>What is Changes in Performance</h3>
                        <p>Changes in performance, whether at work, school, or daily activities, can indicate underlying emotional or mental challenges. It may involve decreased productivity, difficulty concentrating, or a lack of motivation.</p>
                    </div>
                    <img src="performance.jpg" alt="Changes in Performance" style="width: 100%; max-width: 200px; display: block; margin-bottom: 20px;">

                    <div style="flex: 1 1 400px; line-height: 1.6;">
                        <h4>Common Causes</h4>
                        <ul>
                            <li>Increased stress and pressure to perform.</li>
                            <li>Burnout from excessive workload.</li>
                            <li>Emotional distress, such as anxiety or depression.</li>
                            <li>Lack of sleep and physical exhaustion.</li>
                            <li>Distractions from personal issues or external factors.</li>
                            <li>Low self-confidence due to past failures.</li>
                            <li>Unclear goals or lack of direction.</li>
                            <li>Physical health problems affecting energy levels.</li>
                            <li>Fear of failure leading to procrastination.</li>
                            <li>Poor work-life balance affecting focus and efficiency.</li>
                        </ul>
                    </div>

                    <div style="flex: 1 1 400px; line-height: 1.2;">
                        <h4>How to Improve Performance?</h4>
                        <ul>
                            <li>Set clear and realistic goals.</li>
                            <li>Take regular breaks to avoid burnout.</li>
                            <li>Practice time management and prioritize tasks.</li>
                            <li>Engage in self-care activities to maintain motivation.</li>
                            <li>Seek feedback and professional support when needed.</li>
                            <li>Develop a structured routine to enhance productivity.</li>
                            <li>Use relaxation techniques to manage stress levels.</li>
                            <li>Improve sleep quality for better mental and physical health.</li>
                            <li>Engage in positive self-talk to boost confidence.</li>
                            <li>Surround yourself with supportive and encouraging people.</li>
                        </ul>
                    </div>
                    <div style="flex: 1 1 100%;">
                        <img src="performance1.png" alt="Tips to improve Performance" style="width: 100%; max-width: 200px; display: block; margin: 0 auto 20px;">
                    </div>
                </div>
            `,

            "confused thinking": `
                <div style="display: flex; flex-wrap: wrap; align-items: flex-start; gap: 20px; margin-bottom: 20px;">
                    <div style="flex: 1 1 400px; line-height: 1.6;">
                        <h3>What is Confused Thinking</h3>
                        <p>Confused thinking refers to difficulties in processing information, making decisions, or staying focused. It can be caused by mental exhaustion, stress, or underlying health conditions.</p>
                    </div>
                    <img src="thinking.jpeg" alt="Causes of Confused Thinking" style="width: 100%; max-width: 200px; display: block; margin-bottom: 20px;">
                    <div style="flex: 1 1 400px; line-height: 1.6;">
                        <h4>Common Causes</h4>
                        <ul>
                            <li><strong>Fatigue:</strong> Lack of sleep affects cognitive abilities.</li>
                            <li><strong>Stress and Anxiety:</strong> Overthinking and excessive worry impair concentration.</li>
                            <li><strong>Poor Diet:</strong> Nutritional deficiencies can impact brain function.</li>
                            <li><strong>Dehydration:</strong> Lack of water intake can cause mental fog.</li>
                            <li><strong>Medical Conditions:</strong> Neurological disorders, hormonal imbalances, or vitamin deficiencies can contribute to cognitive difficulties.</li>
                            <li><strong>Medication Side Effects:</strong> Some medications may cause drowsiness, confusion, or difficulty concentrating.</li>
                            <li><strong>Excessive Information Intake:</strong> Consuming too much data at once can overload the brain.</li>
                            <li><strong>Lack of Physical Activity:</strong> Inactivity can slow cognitive function and lead to brain fog.</li>
                        </ul>
                    </div>
                    <div style="flex: 1 1 400px; line-height: 1.2;">
                        <h4>Ways to Improve Mental Clarity</h4>
                        <ul>
                            <li>Prioritize sleep and maintain a consistent sleep schedule.</li>
                            <li>Practice mindfulness techniques to stay present and reduce overthinking.</li>
                            <li>Stay hydrated and consume brain-boosting foods like nuts and leafy greens.</li>
                            <li>Break tasks into small steps to reduce mental overload.</li>
                            <li>Engage in brain exercises like puzzles, reading, or learning new skills.</li>
                            <li>Reduce screen time and take regular breaks from digital devices.</li>
                            <li>Consult a medical professional if confusion persists for an extended period.</li>
                            <li>Stay physically active to improve blood circulation to the brain.</li>
                            <li>Limit caffeine and sugar intake to avoid energy crashes.</li>
                            <li>Organize tasks and set priorities to avoid mental clutter.</li>
                        </ul>
                    </div>
                    <div style="flex: 1 1 100%;">
                        <img src="thinking1.webp" alt="Ways to improve Mental Clarity" style="width: 100%; max-width: 200px; display: block; margin: 0 auto 20px;">
                    </div>
                </div>
            `,

            "hyperactivity": `
                <div style="display: flex; flex-wrap: wrap; align-items: flex-start; gap: 20px; margin-bottom: 20px;">
                    <div style="flex: 1 1 400px; line-height: 1.6;">
                        <h3>What is Hyperactivity</h3>
                        <p>Hyperactivity refers to excessive movement, restlessness, or difficulty staying focused. It is commonly associated with conditions like ADHD but can also result from high energy levels, anxiety, or overstimulation.</p>
                    </div>
                    <img src="hyperactivity.jpg" alt="Symptoms of Hyperactivity" style="width: 100%; max-width: 200px; display: block; margin-bottom: 20px;">
                    <div style="flex: 1 1 400px; line-height: 1.6;">
                        <h4>Common Symptoms</h4>
                        <ul>
                            <li>Difficulty sitting still for extended periods.</li>
                            <li>Impulsive decision-making and lack of patience.</li>
                            <li>Excessive talking or interrupting conversations.</li>
                            <li>Difficulty focusing on tasks or frequent distractions.</li>
                            <li>Engaging in multiple activities without completing them.</li>
                            <li>Constant fidgeting, tapping, or moving around.</li>
                            <li>Frequent mood swings due to frustration or boredom.</li>
                            <li>Struggling with organization and time management.</li>
                            <li>Short attention span, making sustained tasks challenging.</li>
                            <li>Acting impulsively without considering consequences.</li>
                        </ul>
                    </div>
                    <div style="flex: 1 1 400px; line-height: 1.2;">
                        <h4>Ways to Manage Hyperactivity</h4>
                        <ul>
                            <li>Engage in structured physical activities like sports or yoga.</li>
                            <li>Practice mindfulness to improve focus and concentration.</li>
                            <li>Follow a consistent daily routine to maintain stability.</li>
                            <li>Limit exposure to overstimulating environments.</li>
                            <li>Seek professional guidance if hyperactivity affects daily life.</li>
                        </ul>
                    </div>
                    <div style="flex: 1 1 100%;">
                        <img src="hyperactivity1.png" alt="How to manage Hyperactivity" style="width: 100%; max-width: 200px; display: block; margin: 0 auto 20px;">
                    </div>
                </div>
            `,

            anger: `
                <div style="display: flex; flex-wrap: wrap; align-items: flex-start; gap: 20px; margin-bottom: 20px;">
                    <div style="flex: 1 1 400px; line-height: 1.6;">
                        <h3>What is Anger?</h3>
                        <p>Anger is a natural emotional response to frustration, stress, or perceived threats. While anger itself is not harmful, uncontrolled anger can lead to negative consequences in personal and professional life.</p>
                    </div>
                    <img src="anger1.webp" alt="Tips for Anger" style="width: 100%; max-width: 200px; display: block; margin-bottom: 20px;">
                    <div style="flex: 1 1 400px; line-height: 1.6;">
                        <h3>Common Causes of Anger</h3>
                        <ul>
                            <li>Unresolved stress or frustration</li>
                            <li>Feeling unheard or disrespected</li>
                            <li>Poor communication in relationships</li>
                            <li>Unrealistic expectations</li>
                            <li>Physical or emotional pain</li>
                        </ul>
                    </div>
                    <div style="flex: 1 1 400px; line-height: 1.2;">
                        <h3>Signs of Uncontrolled Anger</h3>
                        <ul>
                            <li>Frequent irritability and frustration</li>
                            <li>Yelling or physical aggression</li>
                            <li>Rapid heartbeat and tense muscles</li>
                            <li>Difficulty calming down</li>
                            <li>Regretting words or actions after outbursts</li>
                        </ul>
                    </div>
                    <div style="flex: 1 1 400px; line-height: 1.2;">
                        <h3>How to Control Anger?</h3>
                        <ul>
                            <li><strong>Practice Deep Breathing:</strong> Slow, deep breaths help reduce tension.</li>
                            <li><strong>Take a Timeout:</strong> Walking away from a heated situation prevents escalation.</li>
                            <li><strong>Express Anger Constructively:</strong> Use "I" statements instead of blaming others.</li>
                            <li><strong>Engage in Physical Activities:</strong> Exercise helps release pent-up frustration.</li>
                            <li><strong>Seek Professional Help:</strong> Anger management therapy can provide long-term solutions.</li>
                        </ul>
                    </div>
                    <div style="flex: 1 1 100%;">
                        <img src="anger.jpeg" alt="How to control Anger" style="width: 100%; max-width: 200px; display: block; margin: 0 auto 20px;">
                    </div>
                </div>
            `,

            sleep: `
                <div style="display: flex; flex-wrap: wrap; align-items: flex-start; gap: 20px; margin-bottom: 20px;">
                    <div style="flex: 1 1 400px; line-height: 1.6;">
                        <h3>Why is Sleep Important?</h3>
                        <p>Sleep is crucial for overall health as it allows the body and brain to recover. Poor sleep can lead to cognitive decline, mood disorders, and an increased risk of chronic diseases.</p>
                    </div>
                    <img src="sleep.jpg" alt="Rules of healthy sleep" style="width: 100%; max-width: 200px; display: block; margin-bottom: 20px;">
                    <div style="flex: 1 1 400px; line-height: 1.6;">
                        <h3>Consequences of Poor Sleep</h3>
                        <ul>
                            <li>Increases the risk of heart disease, diabetes, and obesity.</li>
                            <li>Weakens the immune system, making the body prone to illnesses.</li>
                            <li>Causes memory issues and reduces cognitive function.</li>
                            <li>Contributes to stress, anxiety, and depression.</li>
                            <li>Leads to reduced energy levels and daytime fatigue.</li>
                        </ul>
                    </div>
                    <div style="flex: 1 1 400px; line-height: 1.2;">
                        <h3>Tips for Better Sleep</h3>
                        <ul>
                            <li><strong>Maintain a Consistent Sleep Schedule:</strong> Going to bed and waking up at the same time improves sleep quality.</li>
                            <li><strong>Avoid Caffeine and Heavy Meals Before Bedtime:</strong> These can disrupt your ability to fall asleep.</li>
                            <li><strong>Reduce Screen Time:</strong> The blue light from screens can interfere with melatonin production.</li>
                            <li><strong>Create a Relaxing Bedtime Routine:</strong> Reading or meditation can help signal your body that it's time to sleep.</li>
                            <li><strong>Keep Your Sleeping Environment Comfortable:</strong> A cool, dark, and quiet room promotes better sleep.</li>
                        </ul>
                    </div>
                    <div style="flex: 1 1 100%;">
                        <img src="sleep1.webp" alt="Tips for better sleep" style="width: 100%; max-width: 200px; display: block; margin: 0 auto 20px;">
                    </div>
                </div>
            `,

            exercise: `
                <div style="display: flex; flex-wrap: wrap; align-items: flex-start; gap: 20px; margin-bottom: 20px;">
                    <div style="flex: 1 1 400px; line-height: 1.6;">
                        <h3>Why is Exercise Essential?</h3>
                        <p>Exercise is one of the most effective ways to improve physical health, boost mental well-being, and enhance overall quality of life.</p>
                    </div>
                    <img src="exercise.jpg" alt="Benifits of Exercise" style="width: 100%; max-width: 200px; display: block; margin-bottom: 20px;">
                    <div style="flex: 1 1 400px; line-height: 1.6;">
                        <h3>Health Benefits of Regular Exercise</h3>
                        <ul>
                            <li>Releases endorphins, which improve mood and reduce stress.</li>
                            <li>Enhances cardiovascular health, reducing the risk of heart disease.</li>
                            <li>Boosts energy levels by improving oxygen and nutrient flow to tissues.</li>
                            <li>Improves sleep quality and helps regulate the sleep cycle.</li>
                            <li>Reduces symptoms of anxiety and depression.</li>
                        </ul>
                    </div>
                    <div style="flex: 1 1 400px; line-height: 1.2;">
                        <h3>Best Types of Exercise for Mental and Physical Health</h3>
                        <ul>
                            <li><strong>Aerobic Exercise:</strong> Activities like running, swimming, and cycling increase heart rate and improve endurance.</li>
                            li><strong>Strength Training:</strong> Lifting weights or resistance exercises help build muscle and boost confidence.</li>
                            <li><strong>Yoga and Stretching:</strong> Reduces stress, improves flexibility, and enhances mental clarity.</li>
                            <li><strong>Walking:</strong> A simple and effective way to clear the mind and boost energy.</li>
                            <li><strong>High-Intensity Interval Training (HIIT):</strong> Short bursts of intense activity improve metabolism and mental focus.</li>
                        </ul>
                    </div>
                    <div style="flex: 1 1 100%;">
                        <img src="exercise1.jpg" alt="Types of Exercises" style="width: 100%; max-width: 200px; display: block; margin: 0 auto 20px;">
                    </div>
                </div>
            `,

            "social interaction": `
                <div style="display: flex; flex-wrap: wrap; align-items: flex-start; gap: 20px; margin-bottom: 20px;">
                    <div style="flex: 1 1 400px; line-height: 1.6;">
                        <h3>The Role of Social Connections in Mental Health</h3>
                        <p>Humans are social beings, and strong relationships are essential for emotional well-being.</p>
                    </div>
                    <img src="si.jpg" alt="Benifits of Social Interaction" style="width: 100%; max-width: 200px; display: block; margin-bottom: 20px;">
                    <div style="flex: 1 1 400px; line-height: 1.6;">
                        <h3>Benefits of Social Interaction</h3>
                        <ul>
                            <li>Reduces feelings of loneliness and depression.</li>
                            <li>Boosts self-esteem and confidence.</li>
                            <li>Encourages positive behavior and habits.</li>
                            <li>Provides emotional support during tough times.</li>
                        </ul>
                    </div>
                    <div style="flex: 1 1 400px; line-height: 1.2;"> 
                        <h3>Ways to Improve Social Interaction</h3>
                        <ul>
                            <li>Engage in group activities or hobbies.</li>
                            <li>Stay in touch with family and friends.</li>
                            <li>Join support groups or clubs.</li>
                            <li>Volunteer for community activities.</li>
                        </ul>
                    </div>
                    <div style="flex: 1 1 100%;">
                        <img src="si1.jpg" alt="How to improve Social Interaction" style="width: 100%; max-width: 200px; display: block; margin: 0 auto 20px;">
                    </div>
                </div>
            `,

            focus: `
                <div style="display: flex; flex-wrap: wrap; align-items: flex-start; gap: 20px; margin-bottom: 20px;">
                    <div style="flex: 1 1 400px; line-height: 1.6;">
                        <h3>How to Improve Focus and Concentration?</h3>
                        <p>With increasing distractions in modern life, maintaining focus has become a challenge.</p>
                    </div>
                    <img src="focus1.jpg" alt="About Focus" style="width: 100%; max-width: 200px; display: block; margin-bottom: 20px;">
                    <div style="flex: 1 1 400px; line-height: 1.6;">
                        <h3>Causes of Poor Focus</h3>
                        <ul>
                            <li>Excessive screen time</li>
                            <li>Lack of sleep</li>
                            <li>Stress and anxiety</li>
                            <li>Unhealthy diet</li>
                            <li>Multitasking</li>
                        </ul>
                    </div>
                    <div style="flex: 1 1 400px; line-height: 1.2;"> 
                        <h3>Ways to Enhance Focus</h3>
                        <ul>
                            <li>Practice mindfulness and meditation.</li>
                            <li>Follow the Pomodoro technique (work in short bursts).</li>
                            <li>Stay hydrated and eat brain-boosting foods.</li>
                            <li>Limit distractions by creating a dedicated workspace.</li>
                            <li>Take short breaks to refresh your mind.</li>
                        </ul>
                    </div>
                    <div style="flex: 1 1 100%;">
                        <img src="focus.webp" alt="How to Focus" style="width: 100%; max-width: 200px; display: block; margin: 0 auto 20px;">
                    </div>
                </div>
            `
        };
        return topics[query] ? [{ title: query, content: topics[query] }] : [];
    }

    function displayResults(results) {
        let resultsHTML = '';
        results.forEach(result => {
            resultsHTML += `
                <div class="search-result-item" style="color: #000; font-size: 16px;">
                    <h3>${result.title}</h3>
                    <p>${result.content}</p>
                </div>
            `;
        });
        resultsContainer.innerHTML = resultsHTML;
    }
});