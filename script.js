/* ==========================================================================
   SERENITY - Mental Health Assessment Calculation & Interactive Engine
   ========================================================================== */

let answeredCount = 2; // Sliders start with default values

function selectRadio(name, value, labelEl) {
    // Check radio
    const input = labelEl.querySelector('input[type="radio"]');
    if (input) input.checked = true;

    // Highlight
    const parentGrid = labelEl.closest('.option-cards-grid');
    if (parentGrid) {
        parentGrid.querySelectorAll('.option-card-label').forEach(lbl => lbl.classList.remove('active'));
    }
    labelEl.classList.add('active');

    updateProgress();
}

function updateStressBadge(val) {
    const badge = document.getElementById('stressBadge');
    if (!badge) return;

    val = parseInt(val, 10);
    let label = 'Low';
    badge.style.background = 'var(--primary-100)';
    badge.style.color = 'var(--primary-800)';

    if (val <= 3) {
        label = 'Minimal Stress (Serene)';
        badge.style.background = '#d1fae5';
        badge.style.color = '#065f46';
    } else if (val <= 6) {
        label = 'Moderate Tension (Normal)';
        badge.style.background = '#fef3c7';
        badge.style.color = '#92400e';
    } else if (val <= 8) {
        label = 'Elevated Strain';
        badge.style.background = '#ffedd5';
        badge.style.color = '#9a3412';
    } else {
        label = 'Severe Overwhelm (Critical)';
        badge.style.background = '#ffe4e6';
        badge.style.color = '#9f1239';
    }

    badge.innerText = `${val} / 10 - ${label}`;
    updateProgress();
}

function updateWellBeingBadge(val) {
    const badge = document.getElementById('wellBeingBadge');
    if (!badge) return;

    val = parseInt(val, 10);
    let label = 'Balanced';
    badge.style.background = '#d1fae5';
    badge.style.color = '#065f46';

    if (val <= 3) {
        label = 'Low Vitality';
        badge.style.background = '#ffe4e6';
        badge.style.color = '#9f1239';
    } else if (val <= 6) {
        label = 'Average';
        badge.style.background = '#fef3c7';
        badge.style.color = '#92400e';
    } else {
        label = 'Flourishing';
        badge.style.background = '#d1fae5';
        badge.style.color = '#065f46';
    }

    badge.innerText = `${val} / 10 - ${label}`;
    updateProgress();
}

function updateProgress() {
    const form = document.getElementById('healthForm');
    if (!form) return;

    const checkedRadios = form.querySelectorAll('input[type="radio"]:checked').length;
    // 8 radio questions + 2 sliders = 10 total
    const total = checkedRadios + 2; 
    const pct = Math.min(100, Math.round((total / 10) * 100));

    const bar = document.getElementById('assessmentProgress');
    if (bar) bar.style.width = `${pct}%`;
}

// Submission
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('healthForm');
    if (!form) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get values
        const getRadioVal = (name) => {
            const el = form.querySelector(`input[name="${name}"]:checked`);
            return el ? el.value : null;
        };

        const mood = getRadioVal('mood') || 'neutral';
        const stress = parseInt(document.getElementById('stressLevel').value, 10) || 5;
        const sleep = getRadioVal('sleepQuality') || 'average';
        const exercise = getRadioVal('exercise') || 'no';
        const anxiety = getRadioVal('anxietyLevel') || 'sometimes';
        const social = getRadioVal('socialInteraction') || 'sometimes';
        const diet = getRadioVal('diet') || 'average';
        const focus = getRadioVal('focus') || 'rarely';
        const motivation = getRadioVal('motivation') || 'moderate';
        const wellBeing = parseInt(document.getElementById('wellBeing').value, 10) || 7;

        // Compute Score out of 100
        let score = 0;

        // Mood (max 10)
        if (mood === 'happy') score += 10;
        else if (mood === 'neutral') score += 7;
        else if (mood === 'anxious') score += 4;
        else if (mood === 'sad') score += 3;

        // Stress (max 10 - inverted)
        score += Math.max(1, 11 - stress);

        // Sleep (max 10)
        if (sleep === 'good') score += 10;
        else if (sleep === 'average') score += 6;
        else score += 2;

        // Exercise (max 10)
        if (exercise === 'yes') score += 10;
        else if (exercise === 'moderate') score += 7;
        else score += 2;

        // Anxiety (max 10)
        if (anxiety === 'rarely') score += 10;
        else if (anxiety === 'sometimes') score += 7;
        else if (anxiety === 'frequently') score += 3;
        else score += 1;

        // Social (max 10)
        if (social === 'often') score += 10;
        else if (social === 'sometimes') score += 7;
        else if (social === 'rarely') score += 3;
        else score += 1;

        // Diet (max 10)
        if (diet === 'good') score += 10;
        else if (diet === 'average') score += 6;
        else score += 2;

        // Focus (max 10)
        if (focus === 'never') score += 10;
        else if (focus === 'rarely') score += 8;
        else if (focus === 'often') score += 4;
        else score += 1;

        // Motivation (max 10)
        if (motivation === 'motivated') score += 10;
        else if (motivation === 'moderate') score += 6;
        else score += 2;

        // WellBeing (max 10)
        score += wellBeing;

        // Clamp 10-100
        score = Math.min(100, Math.max(12, score));

        // Determine Category Title in friendly, normal English
        let statusTitle = "Feeling Great & Balanced 🌱";
        let summaryText = "You are doing very well! Keep up your good sleep, healthy habits, and positive mindset.";
        let badgeColor = "#10b981";

        if (score >= 80) {
            statusTitle = "Feeling Great & Balanced 🌱";
            summaryText = "You are doing great! Keep taking good care of yourself, enjoying your sleep, and staying active.";
            badgeColor = "#10b981";
        } else if (score >= 62) {
            statusTitle = "Doing Well with A Little Stress ⛅";
            summaryText = "You are managing life well, but you might be feeling a bit tired or busy. Make sure to give yourself time to rest.";
            badgeColor = "#14b8a6";
        } else if (score >= 42) {
            statusTitle = "Feeling Stressed & Tired 🌧️";
            summaryText = "You are dealing with high stress, worry, or poor sleep right now. Try to slow down, take small breaks, and take care of your body.";
            badgeColor = "#f59e0b";
        } else {
            statusTitle = "Having a Tough Time - Help is Here 🚨";
            summaryText = "You are carrying a lot of heavy stress, sadness, or worry right now. Please remember you are not alone. Talking to a counselor or friend can really help.";
            badgeColor = "#f43f5e";
        }

        // Render UI
        document.getElementById('resScoreNum').innerText = score;
        document.getElementById('resScoreNum').style.color = badgeColor;
        document.getElementById('resStatusTitle').innerText = statusTitle;
        document.getElementById('resSummaryText').innerText = summaryText;

        // Category Breakdown in simple English
        document.getElementById('resEmotionalText').innerText = 
            mood === 'sad' || anxiety === 'frequently' || anxiety === 'always'
            ? "You are feeling worried or down lately. Taking slow deep breaths and talking to someone can help you feel much lighter."
            : "Your emotions are steady and balanced. Keep doing daily activities that make you smile and feel peaceful.";

        document.getElementById('resSleepText').innerText = 
            sleep === 'poor'
            ? "You need better rest. Try turning off your phone 1 hour before bed and keeping your bedroom dark and quiet."
            : "You are getting good sleep! Good sleep gives your brain energy and keeps your mood happy.";

        document.getElementById('resStressText').innerText = 
            stress >= 7 || focus === 'often' || focus === 'always'
            ? "Your stress is high right now and making it hard to focus. Take 5-minute quiet breaks during your work or study."
            : "Your stress is under control. Keep taking things one step at a time without rushing.";

        document.getElementById('resLifestyleText').innerText = 
            exercise === 'no' || diet === 'poor' || social === 'rarely' || social === 'never'
            ? "Small healthy habits can lift your spirits! A simple 15-minute walk outside, drinking fresh water, and calling a friend will help today."
            : "Great daily habits! Daily movement, healthy food, and staying connected with friends keep you strong and happy.";

        // Action Tips list in clear, everyday English
        const actionTipsEl = document.getElementById('resActionTips');
        let tipsHtml = '';

        if (stress >= 6) {
            tipsHtml += `<div class="action-tip-item"><span class="action-tip-icon">🫁</span><div><strong>Simple Breathing:</strong> Try our 2-minute breathing exercise on the home page when you feel tense. It calms your heart and mind quickly.</div></div>`;
        }
        if (sleep === 'poor') {
            tipsHtml += `<div class="action-tip-item"><span class="action-tip-icon">🌙</span><div><strong>Better Sleep:</strong> Put away phones and screens 1 hour before bed, avoid coffee late in the day, and keep your room cool.</div></div>`;
        }
        if (exercise === 'no' || exercise === 'moderate') {
            tipsHtml += `<div class="action-tip-item"><span class="action-tip-icon">🚶‍♂️</span><div><strong>Gentle Movement:</strong> Go for a 15 to 20 minute walk outdoors. Walking in fresh air naturally lifts your mood.</div></div>`;
        }
        if (anxiety === 'frequently' || anxiety === 'always') {
            tipsHtml += `<div class="action-tip-item"><span class="action-tip-icon">🌿</span><div><strong>Calm Your Thoughts:</strong> When worry feels heavy, look around and name 5 things you can see and touch right now to feel grounded.</div></div>`;
        }
        if (social === 'rarely' || social === 'never') {
            tipsHtml += `<div class="action-tip-item"><span class="action-tip-icon">👥</span><div><strong>Reach Out:</strong> Send a quick text or call a friend or family member. A simple friendly conversation can make a big difference.</div></div>`;
        }
        if (diet === 'poor') {
            tipsHtml += `<div class="action-tip-item"><span class="action-tip-icon">🥑</span><div><strong>Healthy Food & Water:</strong> Drink plenty of water and eat fresh fruits, vegetables, and nuts to give your body clean energy.</div></div>`;
        }
        if (score < 50) {
            tipsHtml += `<div class="action-tip-item" style="background: var(--accent-rose-soft); border-left: 4px solid var(--accent-rose);"><span class="action-tip-icon">🤝</span><div><strong>Talk to Someone:</strong> Asking for help is brave and healthy. You can call our free 24/7 helpline anytime at 988 or 14416. Caring counselors are ready to listen.</div></div>`;
        }

        if (!tipsHtml) {
            tipsHtml += `<div class="action-tip-item"><span class="action-tip-icon">✨</span><div><strong>Keep Smiling:</strong> You are doing wonderfully! Celebrate the small joys in your day and keep taking good care of yourself.</div></div>`;
        }

        actionTipsEl.innerHTML = tipsHtml;

        // Show results
        const resCard = document.getElementById('results');
        resCard.style.display = 'block';
        resCard.scrollIntoView({ behavior: 'smooth' });

        // Save snapshot to localStorage
        const snapshot = {
            date: new Date().toLocaleDateString(),
            score: score,
            status: statusTitle,
            mood: mood
        };
        localStorage.setItem('latestAssessment', JSON.stringify(snapshot));

        if (typeof showToast === 'function') {
            showToast('Assessment completed! Your wellness snapshot is ready below.', 'success');
        }
    });
});

function saveToProfileDashboard() {
    const latest = localStorage.getItem('latestAssessment');
    if (!latest) {
        showToast('Please complete the assessment first.', 'error');
        return;
    }

    // Add to history
    let history = [];
    try {
        history = JSON.parse(localStorage.getItem('assessmentHistory')) || [];
    } catch(e) {}

    history.unshift(JSON.parse(latest));
    // Keep last 10
    if (history.length > 10) history = history.slice(0, 10);
    localStorage.setItem('assessmentHistory', JSON.stringify(history));

    showToast('Snapshot saved to your profile dashboard!', 'success');
    setTimeout(() => {
        window.location.href = 'profile.html';
    }, 1200);
}
