/* ==========================================================================
   SERENITY - Knowledge Sanctuary & Search Engine
   ========================================================================== */

document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const resultsContainer = document.getElementById("resultsContainer");
    const resultsCountText = document.getElementById("resultsCountText");

    // All topics structured data
    const topicsData = {
        stress: {
            title: "Understanding & Managing Stress Physiology",
            category: "Nervous System",
            readTime: "4 min read",
            img1: "stress1.jpg",
            img2: "stress.jpg",
            overview: "Stress is your body's evolutionary response to perceived challenges or threats. While acute stress helps with focus and survival, chronic stress floods the body with sustained cortisol and adrenaline, weakening cardiac health, gastrointestinal function, and emotional resilience.",
            effects: [
                "Increases baseline resting heart rate and blood pressure",
                "Suppresses cellular immune function, making you vulnerable to infections",
                "Disrupts neurogenesis in the hippocampus, impairing memory and focus",
                "Causes tension headaches, teeth grinding (bruxism), and muscle aches",
                "Triggers insomnia, digestive spasms, and emotional volatility"
            ],
            management: [
                "<strong>4-4-4-4 Box Breathing:</strong> Conscious deep breathing triggers the vagus nerve and downregulates the sympathetic fight-or-flight response within 90 seconds.",
                "<strong>Progressive Muscle Relaxation:</strong> Tense each muscle group for 5 seconds, then deliberately exhale and release.",
                "<strong>Nutritional Support:</strong> Reduce high-glycemic sugars and excessive caffeine that mimic physical anxiety.",
                "<strong>Mindful Boundary Setting:</strong> Protect your emotional bandwidth by saying no to non-essential obligations.",
                "<strong>Outdoor Nature Walks:</strong> Exposure to natural greenery (Shinrin-yoku) lowers salivary cortisol by over 15%."
            ]
        },

        anxiety: {
            title: "Navigating Anxiety & Panic Loops",
            category: "Inner Calm",
            readTime: "5 min read",
            img1: "anxiety.jpeg",
            img2: "anxiety1.png",
            overview: "Anxiety is the brain's anticipatory fear response. While mild anxiety alerts us to prepare for events, clinical anxiety creates persistent catastrophic thoughts, hyper-vigilance, and autonomic physical distress.",
            effects: [
                "Restlessness, jitteriness, and feeling on edge",
                "Sudden heart palpitations, sweaty palms, and shallow hyperventilation",
                "Cognitive distortions (catastrophizing and mind-reading)",
                "Avoidance of social spaces, meetings, or normal responsibilities",
                "Exhaustion from constant neural hyper-arousal"
            ],
            management: [
                "<strong>5-4-3-2-1 Sensory Grounding:</strong> Connect with 5 visible objects, 4 touchable textures, 3 distinct sounds, 2 scents, and 1 taste.",
                "<strong>Cognitive Reappraisal:</strong> Ask: 'Is this an objective fact or a fear-driven hypothesis? What would I say to a friend in this spot?'",
                "<strong>Cut Stimulants:</strong> Switch from energy drinks and strong espresso to herbal chamomile, peppermint, or green tea.",
                "<strong>Structured Worry Window:</strong> Set aside 15 minutes at 4 PM to journal every concern. Once the timer rings, close the notebook.",
                "<strong>Professional Psychotherapy:</strong> Cognitive Behavioral Therapy (CBT) and Acceptance & Commitment Therapy (ACT) produce high long-term recovery rates."
            ]
        },

        sleep: {
            title: "The Architecture of Restorative Sleep",
            category: "Recovery Science",
            readTime: "4 min read",
            img1: "sleep.jpg",
            img2: "sleep1.webp",
            overview: "Sleep is an active neurobiological state during which the brain flushes toxic metabolic byproducts via the glymphatic system and consolidates emotional memories. Chronic sleep debt escalates depressive symptoms and emotional sensitivity.",
            effects: [
                "Elevates systemic inflammation and doubles risk of metabolic illness",
                "Impairs prefrontal cortex activity, eroding willpower and mood stability",
                "Causes severe brain fog, slow reflexes, and afternoon energy crashes",
                "Dampens immune response and increases susceptibility to viral illness",
                "Disrupts hunger hormones (ghrelin and leptin), driving junk food cravings"
            ],
            management: [
                "<strong>Circadian Anchor:</strong> Wake up at the exact same hour every morning, 7 days a week, and step into direct sunlight for 10 minutes.",
                "<strong>60-Minute Digital Sunset:</strong> Block blue light emissions by putting away smartphones and laptops an hour before sleeping.",
                "<strong>Temperature Control:</strong> Maintain your bedroom between 18°C and 20°C (65-68°F); a drop in core body temperature is essential to initiate deep sleep.",
                "<strong>Caffeine Curfew:</strong> Half-life of caffeine is 5 to 7 hours; stop all caffeine intake after 1:00 PM.",
                "<strong>Bed Sanctuary Rule:</strong> Use your bed exclusively for sleep and intimacy—never for working, studying, or doom-scrolling."
            ]
        },

        diet: {
            title: "Nutritional Psychiatry: Fueling the Gut-Brain Axis",
            category: "Nutritional Health",
            readTime: "4 min read",
            img1: "diet.webp",
            img2: "diet1.jpg",
            overview: "The bidirectional gut-brain axis links your central nervous system with your enteric nervous system. Over 90% of your body's serotonin receptors reside in your digestive tract, making food choices a frontline mental health intervention.",
            effects: [
                "High refined sugar intake triggers rapid blood glucose volatility and mood crashes",
                "Chronic nutrient deficits (Omega-3, Magnesium, Zinc, B-vitamins) impair neurotransmitter synthesis",
                "Ultra-processed food alters gut microbiome biodiversity, inducing neuro-inflammation",
                "Dehydration shrinks brain tissue volume temporarily, causing headaches and sluggish thought"
            ],
            management: [
                "<strong>Eat the Mediterranean Rainbow:</strong> High vegetable diversity feeds beneficial gut microbes that generate anti-inflammatory short-chain fatty acids.",
                "<strong>Omega-3 Rich Essentials:</strong> Incorporate walnuts, chia seeds, flaxseeds, and wild salmon to strengthen neuronal membranes.",
                "<strong>Probiotic & Fermented Foods:</strong> Kefir, natural yogurt, kimchi, and sauerkraut promote gut microbiome diversity.",
                "<strong>Proper Hydration:</strong> Drink 2.5 to 3 liters of water daily; add a pinch of mineral salt for electrolyte balance.",
                "<strong>Limit Artificial Sweeteners:</strong> Some artificial sweeteners disrupt gut microbial balance and neurotransmitter signaling."
            ]
        },

        "mood swings": {
            title: "Navigating Mood Swings & Emotional Agility",
            category: "Emotional Balance",
            readTime: "4 min read",
            img1: "mood.jpg",
            img2: "mood1.png",
            overview: "Mood swings are rapid, unpredictable shifts between emotional states. While everyday emotional ebb and flow is natural, severe unpredictable swings can cause relationship distress, occupational instability, and internal exhaustion.",
            effects: [
                "Sudden transition from euphoric excitement to sudden irritability or despair",
                "Strained relationships due to unpredictable emotional reactions",
                "Severe energy fluctuations throughout the day",
                "Difficulty planning commitments or trusting personal stability"
            ],
            management: [
                "<strong>Track Patterns:</strong> Use our daily mood tracker to record triggers, sleep duration, and menstrual/hormonal phases.",
                "<strong>Pause & Name:</strong> Practice 'Name it to tame it'. Say aloud: 'I notice irritation arising' rather than reacting impulsively.",
                "<strong>Blood Sugar Stabilization:</strong> Avoid skipping meals or consuming naked carbohydrates without protein and healthy fats.",
                "<strong>Physical Grounding:</strong> Place both feet firmly on the ground, feel the floor beneath you, and take 3 deep belly breaths.",
                "<strong>Medical Consultation:</strong> If swings feel uncontrollable or include periods of sleepless grandiosity, consult a psychiatrist for an evaluation of bipolar spectrum or thyroid conditions."
            ]
        },

        "overwhelming sadness": {
            title: "Compassionate Care for Overwhelming Sadness & Grief",
            category: "Grief & Healing",
            readTime: "5 min read",
            img1: "sad.jpg",
            img2: "sad1.jpg",
            overview: "Overwhelming sadness is a profound emotional ache that can follow loss, chronic disappointment, or clinical depression. Honoring the sorrow without drowning in self-blame is central to emotional renewal.",
            effects: [
                "Persistent feelings of emptiness, heavy chest pressure, and spontaneous weeping",
                "Loss of pleasure in once beloved activities (anhedonia)",
                "Profound fatigue where getting out of bed feels insurmountable",
                "Thoughts of worthlessness, excessive guilt, or isolation from friends"
            ],
            management: [
                "<strong>Allow the Tear:</strong> Crying produces natural oxytocin and endorphins that relieve visceral physical tension.",
                "<strong>The 'One Tiny Step' Rule:</strong> Don't try to fix your whole life today. Just brush your teeth, drink one cup of warm tea, or open the window.",
                "<strong>Reach for a Warm Hand:</strong> Tell a trusted person: 'I am having a very heavy day and just need someone to know.'",
                "<strong>Self-Compassion Over Self-Criticism:</strong> Speak to yourself with the tenderness you would offer a weeping child.",
                "<strong>Immediate Crisis Support:</strong> If you experience persistent hopelessness or thoughts of self-harm, call 988 or 14416 immediately. There is help."
            ]
        },

        "changes in performance": {
            title: "Reversing Burnout & Changes in Daily Performance",
            category: "Productivity & Health",
            readTime: "4 min read",
            img1: "performance.jpg",
            img2: "performance1.png",
            overview: "A sudden drop in academic or work performance is rarely a sign of laziness; it is almost always the nervous system's brake mechanism kicking in to signal unaddressed burnout, fatigue, or cognitive overload.",
            effects: [
                "Tasks that once took 20 minutes now drag on for hours",
                "Chronic procrastination driven by an intense fear of imperfection or failure",
                "Cynicism, detachment, and loss of professional or creative pride",
                "Brain fog and frequent careless errors on routine duties"
            ],
            management: [
                "<strong>Energy Audit:</strong> List your daily commitments and identify what drains 80% of your energy for minimal reward.",
                "<strong>Embrace 'Good Enough':</strong> Perfectionism is the enemy of completion. Lower your internal pressure valve to 80% perfection.",
                "<strong>Pomodoro Sprints:</strong> Work in short 25-minute bursts followed by mandatory 5-minute screen-free breaks.",
                "<strong>Enforce Rest as Work:</strong> Recognize that rest is not a reward you earn after working; it is a biological prerequisite for performance.",
                "<strong>Open Dialogue:</strong> Communicate with instructors or supervisors early about pacing adjustments before deadlines lapse."
            ]
        },

        "confused thinking": {
            title: "Clearing Brain Fog & Restoring Mental Acuity",
            category: "Cognitive Clarity",
            readTime: "4 min read",
            img1: "thinking.jpeg",
            img2: "thinking1.webp",
            overview: "Confused thinking or brain fog is a symptom characterized by slow processing speed, forgetfulness, and inability to concentrate. It is a biological signal of cognitive exhaustion, inflammation, or sensory overload.",
            effects: [
                "Struggling to recall common vocabulary words or names mid-sentence",
                "Reading the same paragraph four times without retaining the content",
                "Feeling mentally sluggish, cloudy, and easily overwhelmed by simple decisions",
                "Losing track of objects, keys, and daily appointment details"
            ],
            management: [
                "<strong>Externalize Memory:</strong> Write everything down in a notebook; do not waste working memory trying to remember to-do lists.",
                "<strong>Electrolyte Hydration:</strong> Drink water mixed with mineral electrolytes to support cellular neuronal conduction.",
                "<strong>Single-Task Exclusively:</strong> Turn off secondary monitors and close extra browser tabs. Multitasking lowers effective IQ by 10 points.",
                "<strong>Short Aerobic Interval:</strong> 10 jumping jacks or a brisk 5-minute stair climb floods the brain with fresh oxygenated blood.",
                "<strong>Screen-Free Daydreaming:</strong> Give your brain 15 minutes of uninterrupted quiet without phones, podcasts, or music."
            ]
        },

        hyperactivity: {
            title: "Managing Restlessness & Channeling High Energy",
            category: "Neurodiversity",
            readTime: "4 min read",
            img1: "hyperactivity.jpg",
            img2: "hyperactivity1.png",
            overview: "Hyperactivity and physical restlessness often stem from an under-stimulated nervous system hunting for dopamine. When understood and guided, this vibrant vitality translates into intense creativity and rapid problem-solving.",
            effects: [
                "Constant leg shaking, finger tapping, or feeling compelled to move",
                "Talking rapidly, blurting answers, or interrupting others in conversation",
                "Boredom intolerance that leads to starting multiple tasks without finishing them",
                "Emotional dysregulation when forced to sit passively for long durations"
            ],
            management: [
                "<strong>Tactile Fidget Tools:</strong> Use discreet grip rings, stress putty, or under-desk cycling pedals to channel motor energy.",
                "<strong>Dynamic Workstations:</strong> Alternate between standing desks, exercise ball seating, and floor cushions.",
                "<strong>High-Intensity Physical Outlets:</strong> Martial arts, swimming, bouldering, or sprinting provide full-body neuro-sensory discharge.",
                "<strong>External Timers:</strong> Use visual analog timers (like a Time Timer) to make the abstract concept of time visually tangible.",
                "<strong>Dopamine Menu:</strong> Create a list of healthy 5-minute dopamine boosts (music, stretching, pets) to substitute for phone scrolling."
            ]
        },

        anger: {
            title: "Constructive Anger Management & Emotional Boundaries",
            category: "Self-Mastery",
            readTime: "4 min read",
            img1: "anger1.webp",
            img2: "anger.jpeg",
            overview: "Anger is an innate, protective emotional boundary designed to signal that our values, safety, or dignity have been crossed. Suppressed anger leads to depression, while uncontrolled rage damages bonds.",
            effects: [
                "Surge of adrenaline, clenched jaw, tight fists, and racing pulse",
                "Sarcastic, cutting remarks or shouting episodes you later deeply regret",
                "Lingering resentment, irritability, and passive-aggressive behavior",
                "Elevated blood pressure and physical muscle tension"
            ],
            management: [
                "<strong>The 90-Second Biological Rule:</strong> The physiological surge of adrenaline lasts 90 seconds. Commit to not speaking or sending emails until 90 seconds of deep breathing have passed.",
                "<strong>Use Assertive 'I' Statements:</strong> Reframe 'You never care about me' into 'I feel hurt and unsupported when tasks are left to me.'",
                "<strong>Physical Tension Discharge:</strong> Squeeze a hand grip, punch a firm pillow, or take an aggressive brisk walk to discharge the motor impulse safely.",
                "<strong>Discover the Primary Emotion:</strong> Beneath anger is almost always fear, hurt, grief, or vulnerability. Ask: 'What wound is my anger protecting?'",
                "<strong>Take a Formal Time-Out:</strong> Explicitly state: 'I am too activated to discuss this calmly right now. Let us step away and revisit this in 30 minutes.'"
            ]
        },

        exercise: {
            title: "Physical Activity: The Most Potent Natural Antidepressant",
            category: "Movement & Body",
            readTime: "3 min read",
            img1: "exercise.jpg",
            img2: "exercise1.jpg",
            overview: "Regular physical movement is not merely about physical aesthetics; it is a neurochemical powerhouse that releases endorphins, dopamine, and endocannabinoids while promoting neuroplasticity.",
            effects: [
                "Stimulates Brain-Derived Neurotrophic Factor (BDNF) which repairs brain cells",
                "Reduces muscle tension and optimizes baseline resting heart rate",
                "Improves insulin sensitivity, preventing energy slumps and mood swings",
                "Enhances slow-wave deep sleep quality and reduces nighttime awakenings"
            ],
            management: [
                "<strong>Find Movement You Love:</strong> If running feels like punishment, try dancing, hiking, badminton, rollerblading, or rock climbing.",
                "<strong>Start with 15 Minutes:</strong> You do not need grueling 2-hour gym routines. 15 to 20 minutes of daily moderate movement yields 80% of the mental health benefits.",
                "<strong>Morning Outdoor Walking:</strong> Combines cardiovascular stimulation with morning retinal light exposure to anchor your circadian rhythm.",
                "<strong>Strength Training:</strong> Lifting weights builds physical resilience, posture, and self-confidence through tangible progressive milestones."
            ]
        },

        "social interaction": {
            title: "Social Connection: An Essential Biological Need",
            category: "Community & Love",
            readTime: "4 min read",
            img1: "si.jpg",
            img2: "si1.jpg",
            overview: "Human beings are evolutionarily hardwired for tribe and connection. Loneliness triggers cellular stress responses equivalent to smoking 15 cigarettes a day. Genuine connection is medicine.",
            effects: [
                "Releases oxytocin, reducing blood pressure and damping fear circuits in the amygdala",
                "Validates emotional experiences, keeping cognitive distortions from escalating",
                "Fosters a strong sense of purpose and belonging",
                "Buffers against depression, age-related cognitive decline, and chronic illness"
            ],
            management: [
                "<strong>Schedule Micro-Connections:</strong> Send one short, sincere text of gratitude to someone you care about every morning.",
                "<strong>Engage with Local Communities:</strong> Join interest-based groups—book clubs, running clubs, community gardens, or volunteer centers.",
                "<strong>Practice Active Empathy:</strong> Listen to someone without planning your advice or response; simply hold presence for their experience.",
                "<strong>Quality Over Quantity:</strong> You do not need 50 acquaintances; two reliable, emotionally safe relationships are enough to protect mental health."
            ]
        },

        focus: {
            title: "Deep Focus in a World of Digital Distraction",
            category: "Attention & Flow",
            readTime: "4 min read",
            img1: "focus1.jpg",
            img2: "focus.webp",
            overview: "Attention is our most precious cognitive asset. In an economy optimized to harvest our dopamine through notifications and algorithmic feeds, cultivating deep focus is an act of mental self-preservation.",
            effects: [
                "Continuous partial attention drains executive cognitive reserve",
                "Task switching incurs a 'resumption lag' of up to 23 minutes after every interruption",
                "Chronic stimulation leads to restlessness and dissatisfaction with everyday life",
                "Impairs long-term memory synthesis and deep problem-solving skills"
            ],
            management: [
                "<strong>Physical Separation from Phones:</strong> Keep your smartphone in a different room or drawer during designated focus sessions.",
                "<strong>Binaural Beats or Ambient Sound:</strong> Brown noise or 40Hz binaural beats help mask background audio and anchor attention.",
                "<strong>Time-Boxing & Single-Tasking:</strong> Commit to doing only ONE thing at a time with full immersion.",
                "<strong>Clear the Physical Visual Field:</strong> A minimalist desk with only the notebook or tool needed creates an uncluttered mental landscape."
            ]
        }
    };

    // Keyword & synonym mapping
    const synonymMap = {
        "sad": "overwhelming sadness",
        "sadness": "overwhelming sadness",
        "depression": "overwhelming sadness",
        "depressed": "overwhelming sadness",
        "grief": "overwhelming sadness",
        "cry": "overwhelming sadness",
        "crying": "overwhelming sadness",
        "anxious": "anxiety",
        "panic": "anxiety",
        "worry": "anxiety",
        "fear": "anxiety",
        "nervous": "anxiety",
        "stress": "stress",
        "stressed": "stress",
        "burnout": "stress",
        "tension": "stress",
        "sleep": "sleep",
        "sleepy": "sleep",
        "insomnia": "sleep",
        "tired": "sleep",
        "fatigue": "sleep",
        "food": "diet",
        "diet": "diet",
        "nutrition": "diet",
        "eat": "diet",
        "eating": "diet",
        "gut": "diet",
        "anger": "anger",
        "angry": "anger",
        "rage": "anger",
        "temper": "anger",
        "irritation": "anger",
        "focus": "focus",
        "concentrate": "focus",
        "distracted": "focus",
        "adhd": "hyperactivity",
        "hyper": "hyperactivity",
        "restless": "hyperactivity",
        "fog": "confused thinking",
        "brain fog": "confused thinking",
        "confused": "confused thinking",
        "clarity": "confused thinking",
        "work": "changes in performance",
        "performance": "changes in performance",
        "school": "changes in performance",
        "grades": "changes in performance",
        "social": "social interaction",
        "lonely": "social interaction",
        "loneliness": "social interaction",
        "friends": "social interaction",
        "connection": "social interaction",
        "workout": "exercise",
        "gym": "exercise",
        "exercise": "exercise",
        "walking": "exercise",
        "walk": "exercise",
        "mood": "mood swings",
        "bipolar": "mood swings",
        "emotions": "mood swings"
    };

    function renderTopics(keysToShow) {
        if (!keysToShow || keysToShow.length === 0) {
            resultsContainer.innerHTML = `
                <div style="background: white; border-radius: var(--radius-lg); padding: 48px; text-align: center; border: 1px solid var(--slate-200);">
                    <div style="font-size: 3rem; margin-bottom: 12px;">🔍</div>
                    <h3 style="font-size: 1.4rem; color: var(--slate-800); margin-bottom: 8px;">No exact guides found</h3>
                    <p style="color: var(--slate-600); max-width: 480px; margin: 0 auto 20px;">We couldn't find a direct guide matching your exact search. Try exploring one of our core topics below or browsing all library guides.</p>
                    <button class="btn btn-primary btn-sm" onclick="filterByTopic('all')">View All Guides</button>
                </div>
            `;
            resultsCountText.innerText = "0 guides found";
            return;
        }

        resultsCountText.innerText = `Showing ${keysToShow.length} comprehensive wellness guide${keysToShow.length > 1 ? 's' : ''}`;

        let html = '';
        keysToShow.forEach(key => {
            const data = topicsData[key];
            if (!data) return;

            html += `
                <article class="search-detail-card">
                    <div class="search-detail-hero">
                        <div>
                            <span class="section-tag" style="margin-bottom: 6px;">${data.category}</span>
                            <h2 style="font-size: 1.6rem; color: var(--slate-900); margin: 0;">${data.title}</h2>
                        </div>
                        <div style="text-align: right;">
                            <span style="font-size: 0.85rem; color: var(--slate-500); font-weight: 600;">⏱️ ${data.readTime}</span>
                        </div>
                    </div>

                    <div class="search-detail-body">
                        <!-- Dual Image Gallery -->
                        <div class="search-img-row">
                            <div class="search-img-frame">
                                <img src="${data.img1}" alt="${data.title} illustration">
                            </div>
                            <div class="search-img-frame">
                                <img src="${data.img2}" alt="${data.title} visual advice">
                            </div>
                        </div>

                        <!-- Overview -->
                        <p style="font-size: 1.05rem; line-height: 1.7; color: var(--slate-700); margin-bottom: 24px;">
                            ${data.overview}
                        </p>

                        <!-- Symptoms / Effects -->
                        <h3>Clinical Manifestations & Effects</h3>
                        <ul>
                            ${data.effects.map(eff => `<li>${eff}</li>`).join('')}
                        </ul>

                        <!-- Evidence-Based Management -->
                        <h3>Evidence-Based Coping Strategies</h3>
                        <div style="display: flex; flex-direction: column; gap: 10px; margin-bottom: 28px;">
                            ${data.management.map(m => `
                                <div class="action-tip-item">
                                    <span class="action-tip-icon">✨</span>
                                    <div>${m}</div>
                                </div>
                            `).join('')}
                        </div>

                        <!-- Card Footer with Feedback & Links -->
                        <div style="background: var(--slate-50); border: 1px solid var(--slate-200); border-radius: var(--radius-md); padding: 16px 20px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px;">
                            <div style="display: flex; align-items: center; gap: 10px;">
                                <span style="font-size: 0.85rem; font-weight: 600; color: var(--slate-600);">Was this guide helpful?</span>
                                <button class="btn btn-outline btn-sm" onclick="showToast('Thank you for your feedback! Glad it helped.', 'success')">👍 Yes</button>
                                <button class="btn btn-outline btn-sm" onclick="showToast('Thank you! We will improve this guide.', 'info')">👎 Needs Work</button>
                            </div>

                            <div style="display: flex; gap: 8px;">
                                <a href="form.html" class="btn btn-primary btn-sm">Take Self-Assessment →</a>
                                <a href="index.html#breathing" class="btn btn-secondary btn-sm">Try Breathing Tool</a>
                            </div>
                        </div>
                    </div>
                </article>
            `;
        });

        resultsContainer.innerHTML = html;
    }

    window.executeSearch = function () {
        const query = (searchInput.value || "").trim().toLowerCase();
        if (!query) {
            renderTopics(Object.keys(topicsData));
            return;
        }

        // Check synonyms first
        if (synonymMap[query]) {
            renderTopics([synonymMap[query]]);
            updateActivePill(synonymMap[query]);
            return;
        }

        // Direct key match
        if (topicsData[query]) {
            renderTopics([query]);
            updateActivePill(query);
            return;
        }

        // Substring search in title, overview, effects, or keys
        const matchedKeys = Object.keys(topicsData).filter(key => {
            const d = topicsData[key];
            return key.includes(query) ||
                   d.title.toLowerCase().includes(query) ||
                   d.category.toLowerCase().includes(query) ||
                   d.overview.toLowerCase().includes(query);
        });

        renderTopics(matchedKeys);
    };

    window.filterByTopic = function (topicKey, btn) {
        if (btn) {
            document.querySelectorAll(".filter-pill").forEach(p => p.classList.remove("active"));
            btn.classList.add("active");
        }

        if (topicKey === 'all') {
            if (searchInput) searchInput.value = '';
            renderTopics(Object.keys(topicsData));
        } else if (topicsData[topicKey]) {
            if (searchInput) searchInput.value = topicKey;
            renderTopics([topicKey]);
        }
    };

    function updateActivePill(key) {
        document.querySelectorAll(".filter-pill").forEach(p => {
            if (p.textContent.toLowerCase().includes(key)) {
                p.classList.add("active");
            } else {
                p.classList.remove("active");
            }
        });
    }

    // Read URL query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const initialQuery = urlParams.get("query");

    if (initialQuery) {
        searchInput.value = initialQuery;
        executeSearch();
    } else {
        // Show all topics on initial load
        renderTopics(Object.keys(topicsData));
    }
});