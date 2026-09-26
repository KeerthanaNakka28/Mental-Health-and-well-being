document.getElementById('healthForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the values from the form
    const mood = document.getElementById('mood').value;
    const stressLevel = document.getElementById('stressLevel').value;
    const sleepQuality = document.getElementById('sleepQuality').value;
    const exercise = document.getElementById('exercise').value;
    const anxietyLevel = document.getElementById('anxietyLevel').value;
    const socialInteraction = document.getElementById('socialInteraction').value;
    const diet = document.getElementById('diet').value;
    const focus = document.getElementById('focus').value;
    const motivation = document.getElementById('motivation').value;
    const wellBeing = document.getElementById('wellBeing').value;

    // Create a result message
    let resultMessage = `<h2>Your Mental Health Snapshot 🧠</h2>`;
    resultMessage += `<p><strong>Mood:</strong> ${mood}</p>`;
    resultMessage += `<p><strong>Stress Level:</strong> ${stressLevel}</p>`;
    resultMessage += `<p><strong>Sleep Quality:</strong> ${sleepQuality}</p>`;
    resultMessage += `<p><strong>Exercise Regularity:</strong> ${exercise}</p>`;
    resultMessage += `<p><strong>Anxiety Level:</strong> ${anxietyLevel}</p>`;
    resultMessage += `<p><strong>Social Interaction:</strong> ${socialInteraction}</p>`;
    resultMessage += `<p><strong>Diet:</strong> ${diet}</p>`;
    resultMessage += `<p><strong>Focus Difficulty:</strong> ${focus}</p>`;
    resultMessage += `<p><strong>Motivation:</strong> ${motivation}</p>`;
    resultMessage += `<p><strong>Overall Well-Being:</strong> ${wellBeing}</p>`;

    // Provide health care suggestions
    let suggestions = `<h3>Suggested Actions 💡</h3>`;

    // ... all your existing conditions ...

    // Mood
    if (mood === 'sad' || mood === 'anxious') {
        suggestions += `<p>🗣️ Consider talking to a mental health professional to explore what might be contributing to these feelings.</p>`;
        suggestions += `<p>🎨 Express yourself creatively—art, music, or journaling can be healing.</p>`;
    } else if (mood === 'neutral') {
        suggestions += `<p>😊 Maintain healthy habits, as they can help improve your mood and overall well-being.</p>`;
    }

    // Stress
    if (stressLevel >= 8) {
        suggestions += `<p>🧘‍♀️ Practice relaxation techniques like deep breathing or yoga to manage high stress.</p>`;
    } else if (stressLevel >= 5) {
        suggestions += `<p>📋 Break tasks into smaller pieces and prioritize self-care to reduce stress.</p>`;
        suggestions += `<p>☕ Take short breaks during your day to recharge.</p>`;
    }

    // Sleep
    if (sleepQuality === 'poor') {
        suggestions += `<p>🌙 Improve your sleep hygiene—keep a regular schedule, reduce screen time, and avoid caffeine.</p>`;
        suggestions += `<p>📵 Try a digital detox an hour before bed for better rest.</p>`;
    }

    // Exercise
    if (exercise === 'no') {
        suggestions += `<p>🏃‍♂️ Add 30 minutes of activity a few times a week—it boosts mood and energy.</p>`;
        suggestions += `<p>🚶 Even a daily walk can make a difference to your mental clarity.</p>`;
    }

    // Anxiety
    if (anxietyLevel === 'frequently' || anxietyLevel === 'always') {
        suggestions += `<p>💬 Seeking professional help, like therapy, can really help in managing anxiety.</p>`;
        suggestions += `<p>📖 Try grounding exercises or keeping a worry journal.</p>`;
    }

    // Social Interaction
    if (socialInteraction === 'rarely' || socialInteraction === 'never') {
        suggestions += `<p>👥 Reach out to friends or join a support group for regular connection.</p>`;
        suggestions += `<p>📱 Schedule weekly catch-ups with loved ones—even a video call helps.</p>`;
    }

    // Diet
    if (diet === 'poor') {
        suggestions += `<p>🥗 Improve your meals with fruits, veggies, and whole grains to support both body and mind.</p>`;
        suggestions += `<p>🍵 Stay hydrated—water intake plays a key role in energy and focus.</p>`;
    }

    // Focus
    if (focus === 'often' || focus === 'always') {
        suggestions += `<p>🧠 Short breaks, mindfulness, and a good sleep routine can improve your focus.</p>`;
        suggestions += `<p>🎧 Try background music or white noise to help concentrate.</p>`;
    }

    // Motivation
    if (motivation === 'not_motivated') {
        suggestions += `<p>🔥 Break tasks into small, doable steps and reward yourself for each win.</p>`;
        suggestions += `<p>📅 Set a daily goal, even if it’s tiny. Progress builds momentum.</p>`;
    }

    // Well-being
    if (wellBeing <= 5) {
        suggestions += `<p>💖 If you're feeling low, reach out for professional support. You're not alone.</p>`;
    } else {
        suggestions += `<p>🌟 You're doing great! Keep up the habits that support your well-being.</p>`;
    }

    // Add a Home button at the bottom
    const homeButton = `<div style="text-align:center; margin-top: 20px;">
        <button onclick="window.location.href='index.html'" style="padding: 10px 20px; background-color:rgb(26, 151, 49); color: white; border: none; border-radius: 5px; cursor: pointer;">
          Home
        </button>
      </div>`;

    // Show the results
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = resultMessage + suggestions + homeButton;
    resultsDiv.style.display = 'block'; // Make the results section visible
});
