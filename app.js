/* ==========================================================================
   SERENITY - Shared Application Logic & Interactive Features
   ========================================================================== */

// --- Toast Notification System ---
function showToast(message, type = 'info') {
    let container = document.getElementById('toastContainer');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toastContainer';
        container.className = 'toast-container';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    let icon = 'ℹ️';
    if (type === 'success') icon = '✅';
    if (type === 'error') icon = '⚠️';

    toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(10px)';
        setTimeout(() => toast.remove(), 300);
    }, 3800);
}

// --- Auth State & Navbar Sync ---
function syncAuthUI() {
    const userStr = localStorage.getItem('loggedInUser');
    const authButtons = document.getElementById('authButtons');
    const profileWidget = document.getElementById('profileWidget');
    const userAvatarText = document.getElementById('userAvatarText');
    const profileUsername = document.getElementById('profileUsername');
    const profileEmail = document.getElementById('profileEmail');

    if (userStr) {
        try {
            const user = JSON.parse(userStr);
            if (authButtons) authButtons.style.display = 'none';
            if (profileWidget) profileWidget.style.display = 'block';
            
            const initial = (user.username || 'U').charAt(0).toUpperCase();
            if (userAvatarText) userAvatarText.innerText = initial;
            if (profileUsername) profileUsername.innerText = user.username || 'User';
            if (profileEmail) profileEmail.innerText = user.email || '';
        } catch (e) {
            console.error('Error parsing logged in user', e);
        }
    } else {
        if (authButtons) authButtons.style.display = 'flex';
        if (profileWidget) profileWidget.style.display = 'none';
    }
}

function toggleProfileDropdown(e) {
    if (e) e.stopPropagation();
    const dropdown = document.getElementById('profileDropdown');
    if (dropdown) {
        dropdown.classList.toggle('show');
    }
}

function handleLogout() {
    localStorage.removeItem('loggedInUser');
    showToast('You have been logged out safely.', 'success');
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 800);
}

// Close dropdowns on outside click
document.addEventListener('click', function (e) {
    const dropdown = document.getElementById('profileDropdown');
    if (dropdown && dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
    }
});

// --- Emergency Crisis Modal ---
function openCrisisModal() {
    const modal = document.getElementById('crisisModal');
    if (modal) {
        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
    }
}

function closeCrisisModal() {
    const modal = document.getElementById('crisisModal');
    if (modal) {
        modal.classList.remove('open');
        document.body.style.overflow = '';
    }
}

// --- Topic Modal (Rich Reading Experience) ---
const topicDetails = {
    stress: {
        title: "Stress Management & Nervous System Reset",
        tag: "Vitality & Calm",
        image: "stress.jpg",
        image2: "stress1.jpg",
        readTime: "4 min read",
        summary: "Stress is your body's biological reaction to high demands. While acute stress helps us react to threats, chronic stress damages immune health, cardiovascular balance, and emotional resilience.",
        causes: [
            "Overwhelming work and academic deadlines",
            "Relationship friction or unresolved communication",
            "Financial uncertainty and future anxiety",
            "Lack of boundary setting and chronic people-pleasing"
        ],
        symptoms: [
            "Tension headaches, jaw clenching, and shoulder tightness",
            "Digestive discomfort and shallow breathing",
            "Irritability, restlessness, and mental exhaustion",
            "Disrupted sleep patterns and constant racing thoughts"
        ],
        strategies: [
            "<strong>4-7-8 Breathing:</strong> Inhale for 4s, hold for 7s, exhale for 8s to trigger the parasympathetic nervous system.",
            "<strong>Progressive Muscle Relaxation:</strong> Systematically tense and release muscle groups from your toes to your forehead.",
            "<strong>Boundary Armor:</strong> Politely say 'no' to non-essential commitments to preserve energy.",
            "<strong>Mindful Movement:</strong> A 20-minute gentle walk outdoors lowers cortisol levels significantly."
        ]
    },
    anxiety: {
        title: "Understanding & Overcoming Anxiety",
        tag: "Inner Peace",
        image: "anxiety.jpeg",
        image2: "anxiety1.png",
        readTime: "5 min read",
        summary: "Anxiety is the brain's anticipation of future threats. When excessive, it triggers panic, palpitations, and chronic worry. Through neuroplasticity and mindfulness, we can re-train our fear circuits.",
        causes: [
            "Chemical imbalances in neurotransmitters (serotonin and GABA)",
            "Past trauma, adverse childhood experiences, or chronic stress",
            "Excessive stimulants (caffeine, energy drinks, nicotine)",
            "Cognitive distortions like catastrophizing and black-and-white thinking"
        ],
        symptoms: [
            "Pounding heartbeat, sweating palms, and shortness of breath",
            "Persistent feeling of impending doom or dread",
            "Difficulty concentrating and frequent brain fog",
            "Avoidance behavior of social situations or responsibilities"
        ],
        strategies: [
            "<strong>5-4-3-2-1 Grounding:</strong> Notice 5 things you see, 4 you can touch, 3 you hear, 2 you smell, and 1 you taste.",
            "<strong>Thought Reframing:</strong> Ask yourself: 'Is this thought 100% true? What is the most realistic outcome?'",
            "<strong>Caffeine Audit:</strong> Switch to herbal teas like chamomile or ashwagandha.",
            "<strong>Structured Worry Time:</strong> Dedicate 15 minutes a day to journal worries, then close the notebook."
        ]
    },
    sleep: {
        title: "The Architecture of Restorative Sleep",
        tag: "Recovery Science",
        image: "sleep.jpg",
        image2: "sleep1.webp",
        readTime: "4 min read",
        summary: "Sleep is the brain's natural detoxification and memory consolidation process. Poor sleep elevates cortisol and impairs emotional regulation.",
        causes: [
            "Blue light emission from smartphones and screens before bed",
            "Irregular sleep-wake schedules disrupting circadian rhythm",
            "Late caffeine consumption or heavy meals before bed",
            "Uncomfortable sleeping environment (noise, light, heat)"
        ],
        symptoms: [
            "Morning grogginess and chronic daytime fatigue",
            "Heightened emotional sensitivity and low patience",
            "Weakened immune function and frequent colds",
            "Impaired memory retention and cognitive slowdown"
        ],
        strategies: [
            "<strong>Digital Sunset:</strong> Turn off all electronic screens 60 minutes before sleeping.",
            "<strong>Cool, Dark Cave:</strong> Keep the bedroom temperature around 18-20°C (65-68°F) and pitch black.",
            "<strong>Consistent Rhythm:</strong> Go to bed and wake up at the exact same hour every day, even on weekends.",
            "<strong>Magnesium & Warm Bath:</strong> A warm Epsom salt bath promotes natural melatonin release."
        ]
    },
    diet: {
        title: "Nutritional Psychiatry: Fueling the Mind",
        tag: "Gut-Brain Connection",
        image: "diet1.jpg",
        image2: "diet.webp",
        readTime: "4 min read",
        summary: "Over 90% of serotonin receptors are located in the gut. What you eat directly influences your neurotransmitters, systemic inflammation, and emotional stability.",
        causes: [
            "High consumption of refined sugars and ultra-processed foods",
            "Chronic dehydration reducing blood volume and brain oxygenation",
            "Lack of essential omega-3 fatty acids and micronutrients",
            "Irregular meal timing causing severe blood sugar spikes and crashes"
        ],
        symptoms: [
            "Sudden afternoon energy crashes and brain fog",
            "Rapid mood swings and irritability after meals",
            "Digestive bloating and systemic sluggishness",
            "Intense cravings for sugary comfort foods"
        ],
        strategies: [
            "<strong>Rainbow Plate:</strong> Eat diverse colorful vegetables rich in polyphenols and fiber.",
            "<strong>Omega-3 Power:</strong> Include walnuts, chia seeds, flaxseeds, or fatty fish like salmon.",
            "<strong>Fermented Foods:</strong> Support gut microbiome with kefir, yogurt, kimchi, and sauerkraut.",
            "<strong>Hydration Goal:</strong> Drink at least 2.5 liters of clean water daily."
        ]
    },
    exercise: {
        title: "Physical Activity as Natural Medicine",
        tag: "Body & Spirit",
        image: "exercise.jpg",
        image2: "exercise1.jpg",
        readTime: "3 min read",
        summary: "Movement stimulates Brain-Derived Neurotrophic Factor (BDNF) and releases endorphins, acting as a potent natural antidepressant.",
        causes: [
            "Sedentary desk jobs and excessive sitting",
            "Unrealistic workout goals leading to early abandonment",
            "Fatigue cycle: too tired to exercise, tired because of inactivity"
        ],
        symptoms: [
            "Stiff joints, poor posture, and sluggish metabolism",
            "Low baseline energy and lethargy throughout the day",
            "Increased vulnerability to anxiety and low mood"
        ],
        strategies: [
            "<strong>20-Minute Daily Walk:</strong> Consistency always beats intensity.",
            "<strong>Micro-Movements:</strong> Take 2-minute stretch breaks every hour at your desk.",
            "<strong>Enjoyable Movement:</strong> Dance, swim, cycle, or play sports rather than forcing workouts you dislike.",
            "<strong>Morning Sunlight Walk:</strong> Combines vitamin D, circadian alignment, and movement."
        ]
    },
    mood: {
        title: "Navigating Mood Swings & Emotional Flow",
        tag: "Emotional Balance",
        image: "mood.jpg",
        image2: "mood1.png",
        readTime: "4 min read",
        summary: "Emotions are informational signals, not permanent realities. Learning emotional agility helps navigate high peaks and low valleys with grace.",
        causes: [
            "Hormonal fluctuations (thyroid, cortisol, reproductive hormones)",
            "Nutritional deficits and sleep deprivation",
            "Suppression of authentic feelings and emotional bottling",
            "Underlying mental health conditions like cyclothymia or bipolar spectrum"
        ],
        symptoms: [
            "Abrupt transition from joy to intense frustration or sadness",
            "Impulsive reactions that cause relationship strain",
            "Feeling overwhelmed by minor daily inconveniences"
        ],
        strategies: [
            "<strong>Name It to Tame It:</strong> Label your feeling ('I am noticing frustration') instead of identifying with it ('I am angry').",
            "<strong>Mood Tracking:</strong> Keep a daily log to identify patterns and external triggers.",
            "<strong>Pause Before Reacting:</strong> Count to 10 and take 3 deep breaths before responding to charged situations.",
            "<strong>Compassionate Self-Talk:</strong> Treat yourself with the kindness you would extend to a friend."
        ]
    },
    focus: {
        title: "Deep Focus & Conquering Digital Distraction",
        tag: "Cognitive Mastery",
        image: "focus1.jpg",
        image2: "focus.webp",
        readTime: "4 min read",
        summary: "In an era of hyper-stimulation, focus is a superpower. Cultivating attention spans restores fulfillment, efficiency, and calmness.",
        causes: [
            "Continuous smartphone notifications and multi-tab browsing",
            "Chronic multitasking eroding the brain's executive function",
            "Sleep debt and caffeine crashes"
        ],
        symptoms: [
            "Inability to read a single article or chapter without checking phone",
            "Chronic procrastination and task paralysis",
            "Feeling mentally scattered and exhausted without completing goals"
        ],
        strategies: [
            "<strong>Pomodoro Technique:</strong> 25 minutes of laser-focused work followed by a 5-minute screen-free break.",
            "<strong>Dopamine Detox:</strong> Keep phones in another room while working or studying.",
            "<strong>Single-Tasking Rule:</strong> Do only one thing at a time with full presence.",
            "<strong>Workspace Clarity:</strong> A clean desk fosters a clear, focused mind."
        ]
    },
    sadness: {
        title: "Healing Through Overwhelming Sadness & Grief",
        tag: "Compassionate Healing",
        image: "sad.jpg",
        image2: "sad1.jpg",
        readTime: "5 min read",
        summary: "Sadness is a natural human response to loss and heartache. Honoring grief without letting it spiral into hopeless isolation is the key to renewal.",
        causes: [
            "Loss of a loved one, breakup, or life transition",
            "Unmet expectations and chronic disappointment",
            "Social isolation and feeling misunderstood",
            "Biochemical shifts and clinical depression"
        ],
        symptoms: [
            "Heavy feeling in the chest and frequent crying spells",
            "Loss of interest in hobbies and personal care",
            "Withdrawing from friends and family"
        ],
        strategies: [
            "<strong>Release the Tear:</strong> Crying releases stress hormones and natural endorphins.",
            "<strong>One Small Win:</strong> Brush teeth, make the bed, or step outside for 5 minutes.",
            "<strong>Talk to a Warm Ear:</strong> Reach out to someone you trust or a counselor.",
            "<strong>Creative Catharsis:</strong> Journaling, painting, or listening to healing music."
        ]
    },
    hyperactivity: {
        title: "Channeling Energy & Managing Restlessness",
        tag: "Focus & Rhythm",
        image: "hyperactivity.jpg",
        image2: "hyperactivity1.png",
        readTime: "4 min read",
        summary: "Restlessness and hyperactivity often stem from an under-stimulated nervous system seeking dopamine. Channeling this vitality creates immense creativity.",
        causes: [
            "Neurodiversity including ADHD and sensory processing differences",
            "Excessive sugar, energy drinks, and lack of physical release",
            "High anxiety masquerading as physical restlessness"
        ],
        symptoms: [
            "Fidgeting, inability to sit still, tapping feet",
            "Talking rapidly and interrupting conversations",
            "Starting ten projects and finishing none"
        ],
        strategies: [
            "<strong>Fidget Tools:</strong> Use tactile stress balls or standing desks.",
            "<strong>Physical Decompression:</strong> High-intensity exercise or martial arts.",
            "<strong>Visual Checklists:</strong> Break large goals into visual check-boxes.",
            "<strong>White Noise or Binaural Beats:</strong> Calms background neural chatter."
        ]
    },
    anger: {
        title: "Transformative Anger & Boundary Setting",
        tag: "Emotional Mastery",
        image: "anger.jpeg",
        image2: "anger1.webp",
        readTime: "4 min read",
        summary: "Anger is often a secondary emotion masking pain, boundary violations, or helplessness. Channeled wisely, it fuels positive change.",
        causes: [
            "Unvoiced boundary crossing and feeling disrespected",
            "Chronic stress reducing emotional bandwidth",
            "Past modeled behavior from family environments"
        ],
        symptoms: [
            "Sudden surge of adrenaline, clenched fists, flushed face",
            "Snapping at loved ones or coworkers over minor issues",
            "Intense regret and guilt following outbursts"
        ],
        strategies: [
            "<strong>The 90-Second Rule:</strong> Neurochemicals of anger last 90 seconds. Breathe and wait before speaking.",
            "<strong>Constructive Expression:</strong> Use 'I feel hurt when...' instead of 'You always...'",
            "<strong>Physical Discharge:</strong> Squeeze a pillow, go for a sprint, or throw ice into a sink.",
            "<strong>Unpack the Root:</strong> Ask yourself: 'What underlying pain or boundary violation triggered this?'"
        ]
    },
    social: {
        title: "The Healing Power of Social Connection",
        tag: "Belonging & Heart",
        image: "si.jpg",
        image2: "si1.jpg",
        readTime: "4 min read",
        summary: "Human beings are wired for attachment and community. Deep relationships release oxytocin and lower cardiovascular strain.",
        causes: [
            "Remote work isolation and social media comparison",
            "Social anxiety and fear of negative judgment",
            "Relocating to a new city without an existing support network"
        ],
        symptoms: [
            "Deep pangs of loneliness and feeling unseen",
            "Over-reliance on digital devices for pseudo-connection",
            "Hesitance to reach out due to feeling like a burden"
        ],
        strategies: [
            "<strong>Micro-Connections:</strong> Smile and greet a barista or neighbor.",
            "<strong>Join Shared Interest Groups:</strong> Book clubs, community gardening, or volunteer groups.",
            "<strong>Deepen Existing Ties:</strong> Send an unprompted text: 'Thinking of you today, hope you are well.'",
            "<strong>Active Listening:</strong> Listen without preparing your response in advance."
        ]
    },
    thinking: {
        title: "Clearing Brain Fog & Cultivating Sharp Clarity",
        tag: "Mental Clarity",
        image: "thinking.jpeg",
        image2: "thinking1.webp",
        readTime: "4 min read",
        summary: "Mental confusion and brain fog are physiological cries for rest, hydration, and cognitive decluttering.",
        causes: [
            "Information overload and continuous digital stimulation",
            "Nutritional deficiencies (Vitamin B12, Vitamin D, Iron)",
            "Chronic inflammation and lack of restorative sleep"
        ],
        symptoms: [
            "Struggling to find common words in conversation",
            "Slow reaction time and difficulty making everyday decisions",
            "Feeling as though your brain is wrapped in gauze"
        ],
        strategies: [
            "<strong>Brain Dump:</strong> Write everything swarming in your mind on a blank piece of paper.",
            "<strong>Hydration with Electrolytes:</strong> Rehydrate with water and a pinch of Celtic sea salt.",
            "<strong>Fresh Air Oxygenation:</strong> 10 deep breaths by an open window.",
            "<strong>Cognitive Rest:</strong> Give your brain a true 15-minute quiet daydream break."
        ]
    }
};

function openTopicModal(topicKey) {
    const data = topicDetails[topicKey];
    if (!data) return;

    const modal = document.getElementById('topicModal');
    if (!modal) return;

    document.getElementById('topicModalTag').innerText = data.tag;
    document.getElementById('topicModalTitle').innerText = data.title;
    document.getElementById('topicModalReadTime').innerText = data.readTime;
    document.getElementById('topicModalImg').src = data.image;
    document.getElementById('topicModalImg2').src = data.image2;
    document.getElementById('topicModalSummary').innerHTML = data.summary;

    const causesList = document.getElementById('topicModalCauses');
    if (causesList) {
        causesList.innerHTML = data.causes.map(c => `<li>${c}</li>`).join('');
    }

    const symptomsList = document.getElementById('topicModalSymptoms');
    if (symptomsList) {
        symptomsList.innerHTML = data.symptoms.map(s => `<li>${s}</li>`).join('');
    }

    const strategiesList = document.getElementById('topicModalStrategies');
    if (strategiesList) {
        strategiesList.innerHTML = data.strategies.map(st => `<div class="action-tip-item"><span class="action-tip-icon">✨</span><div>${st}</div></div>`).join('');
    }

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeTopicModal() {
    const modal = document.getElementById('topicModal');
    if (modal) {
        modal.classList.remove('open');
        document.body.style.overflow = '';
    }
}

// --- Interactive Guided Breathing Tool ---
let breathInterval = null;
let breathState = 'idle'; // idle, running
let breathStep = 0; // 0: inhale, 1: hold, 2: exhale, 3: hold
let breathSecondsRemaining = 4;
let breathCycleCount = 0;

function toggleBreathing() {
    const btn = document.getElementById('breathToggleBtn');
    const orb = document.getElementById('breathOrb');
    const instruction = document.getElementById('breathInstruction');
    const timer = document.getElementById('breathTimer');

    if (breathState === 'running') {
        // Stop
        clearInterval(breathInterval);
        breathState = 'idle';
        if (btn) btn.innerHTML = '<span>▶️</span> Start Breathing Exercise';
        if (instruction) instruction.innerText = 'Ready to Relax?';
        if (timer) timer.innerText = '4s';
        if (orb) orb.className = 'breath-orb-inner';
    } else {
        // Start
        breathState = 'running';
        if (btn) btn.innerHTML = '<span>⏸️</span> Pause Exercise';
        breathStep = 0;
        breathSecondsRemaining = 4;
        updateBreathStepUI();

        breathInterval = setInterval(() => {
            breathSecondsRemaining--;
            if (breathSecondsRemaining <= 0) {
                breathStep = (breathStep + 1) % 4;
                breathSecondsRemaining = 4;
                if (breathStep === 0) breathCycleCount++;
                const countBadge = document.getElementById('breathCycleCounter');
                if (countBadge) countBadge.innerText = `Cycles completed: ${breathCycleCount}`;
            }
            updateBreathStepUI();
        }, 1000);
    }
}

function updateBreathStepUI() {
    const orb = document.getElementById('breathOrb');
    const instruction = document.getElementById('breathInstruction');
    const timer = document.getElementById('breathTimer');

    if (timer) timer.innerText = `${breathSecondsRemaining}s`;

    if (breathStep === 0) {
        if (instruction) instruction.innerText = 'Inhale Deeply (Nose)';
        if (orb) orb.className = 'breath-orb-inner inhale';
    } else if (breathStep === 1) {
        if (instruction) instruction.innerText = 'Hold Gently';
        if (orb) orb.className = 'breath-orb-inner hold';
    } else if (breathStep === 2) {
        if (instruction) instruction.innerText = 'Exhale Slowly (Mouth)';
        if (orb) orb.className = 'breath-orb-inner exhale';
    } else if (breathStep === 3) {
        if (instruction) instruction.innerText = 'Hold & Be Still';
        if (orb) orb.className = 'breath-orb-inner hold';
    }
}

// --- Daily Mood Check-In Widget ---
const moodResponses = {
    rad: {
        text: "That's wonderful! 🌟 Keep enjoying your day and doing what makes you happy.",
        badge: "Feeling Great"
    },
    good: {
        text: "Glad you are feeling good today! 😊 Keep up your healthy routines.",
        badge: "Feeling Good"
    },
    okay: {
        text: "Neutral days are completely okay. 🌿 Drink some water and take a gentle pause.",
        badge: "Steady & Okay"
    },
    stressed: {
        text: "Take a deep breath. 💆 Try our 2-minute breathing exercise below to relax your mind.",
        badge: "A Bit Stressed"
    },
    overwhelmed: {
        text: "You are not alone. 💖 Please be gentle with yourself today, talk to a friend, or call our free 24/7 helpline.",
        badge: "Support Needed"
    }
};

function selectMood(moodKey, el) {
    document.querySelectorAll('.mood-btn').forEach(btn => btn.classList.remove('selected'));
    if (el) el.classList.add('selected');

    const feedbackBox = document.getElementById('moodFeedback');
    const response = moodResponses[moodKey];
    if (feedbackBox && response) {
        feedbackBox.style.display = 'block';
        feedbackBox.innerHTML = `<strong>${response.badge}:</strong> ${response.text}`;
    }

    // Save check-in
    localStorage.setItem('lastMoodCheckIn', JSON.stringify({
        mood: moodKey,
        date: new Date().toLocaleDateString()
    }));
}

// --- Daily Affirmation Generator ---
const affirmations = [
    { quote: "I am worthy of peace, respect, and being kind to myself every single day.", tag: "Self-Kindness" },
    { quote: "Feelings are like clouds: they pass by, but you remain strong and steady.", tag: "Mindfulness" },
    { quote: "You don't have to figure out everything right now. One small step today is enough.", tag: "Patience" },
    { quote: "It is okay to say no and take time to rest and recharge.", tag: "Healthy Boundaries" },
    { quote: "Every morning is a fresh start to feel better and try again gently.", tag: "Hope" },
    { quote: "Take a deep breath. You are doing much better than you give yourself credit for.", tag: "Inner Peace" },
    { quote: "Asking for help when you need it is a sign of wisdom and courage.", tag: "Courage" }
];

let currentAffirmationIdx = 0;

function nextAffirmation() {
    currentAffirmationIdx = (currentAffirmationIdx + 1) % affirmations.length;
    const item = affirmations[currentAffirmationIdx];
    const quoteEl = document.getElementById('affirmationQuote');
    const tagEl = document.getElementById('affirmationTag');

    if (quoteEl) {
        quoteEl.style.opacity = '0';
        setTimeout(() => {
            quoteEl.innerText = item.quote;
            if (tagEl) tagEl.innerText = `#${item.tag}`;
            quoteEl.style.opacity = '1';
        }, 200);
    }
}

// --- Search Bar Handler ---
function handleSearch(event) {
    if (event) event.preventDefault();
    const input = document.getElementById('globalSearchInput') || document.getElementById('search-box');
    if (input && input.value.trim()) {
        const query = encodeURIComponent(input.value.trim());
        window.location.href = `search.html?query=${query}`;
    } else {
        showToast('Please enter a topic to search.', 'error');
    }
}

// --- Multilingual Dictionaries ---
const translations = {
    es: {
        navHome: "Inicio",
        navTopics: "Temas",
        navAssessment: "📋 Evaluación",
        navAbout: "Sobre Nosotros",
        navContact: "Contacto",
        btnSignIn: "Iniciar Sesión",
        btnRegister: "Registrarse",
        heroTitle: "Apoyo Sencillo Para Tu Salud Mental y Bienestar Diario",
        heroSubtitle: "¡Bienvenido! Encuentra consejos sencillos para reducir el estrés, dormir mejor y sentirte en paz.",
        btnAssessment: "Hacer Evaluación Gratis",
        btnBreathing: "Pausa de Respiración"
    },
    fr: {
        navHome: "Accueil",
        navTopics: "Sujets",
        navAssessment: "📋 Évaluation",
        navAbout: "À Propos",
        navContact: "Contact",
        btnSignIn: "Connexion",
        btnRegister: "S'inscrire",
        heroTitle: "Soutien Simple Pour Votre Santé Mentale et Bien-Être",
        heroSubtitle: "Bienvenue ! Découvrez des conseils faciles pour réduire le stress, mieux dormir et être serein.",
        btnAssessment: "Faire le Test Gratuit",
        btnBreathing: "Pause Respiration"
    },
    en: {
        navHome: "Home",
        navTopics: "Topics",
        navAssessment: "📋 Assessment",
        navAbout: "About Us",
        navContact: "Contact Us",
        btnSignIn: "Sign In",
        btnRegister: "Register",
        heroTitle: "Simple & Caring Support for Your Mental Health and Daily Well-Being",
        heroSubtitle: "Welcome! Here you will find simple, caring advice to help with stress, sleep, anxiety, and daily happiness. Take a quick self-check, try relaxing breathing, or explore helpful topics.",
        btnAssessment: "Take Free Assessment",
        btnBreathing: "Try 2-Min Breathing"
    }
};

function changeLanguage(lang) {
    localStorage.setItem('siteLanguage', lang);
    const t = translations[lang] || translations.en;
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) el.innerText = t[key];
    });

    showToast(`Language switched to ${lang.toUpperCase()}`, 'info');
}

// --- Auto Initializer ---
document.addEventListener('DOMContentLoaded', function () {
    syncAuthUI();

    // Check saved language
    const savedLang = localStorage.getItem('siteLanguage');
    if (savedLang) {
        const select = document.getElementById('langSelect');
        if (select) select.value = savedLang;
        changeLanguage(savedLang);
    }

    // Bind search forms
    const searchForm = document.getElementById('headerSearchForm');
    if (searchForm) {
        searchForm.addEventListener('submit', handleSearch);
    }
});
