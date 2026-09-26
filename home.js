document.addEventListener('DOMContentLoaded', function () {
    const mentalHealthSection = document.querySelector('.mental-health-section');

    if (mentalHealthSection) {
        // Add search suggestion at the top with highlight
        const searchSuggestion = document.createElement('p');
        searchSuggestion.textContent = "You can also search for stress, sleep, anxiety, social interaction, diet, exercise, mood swings, anger, overwhelming sadness, confused thinking, hyperactivity, changes in performance, focus.";
        Object.assign(searchSuggestion.style, {
            fontSize: '20px',
            fontWeight: 'bold',
            backgroundColor: '#f9f9f9',
            padding: '12px',
            textAlign: 'center',
            color: '#111',
            borderRadius: '8px',
            marginBottom: '30px'
        });
        mentalHealthSection.insertBefore(searchSuggestion, mentalHealthSection.firstChild);

        // Apply section styles (clean look, full-width, no box)
        Object.assign(mentalHealthSection.style, {
            backgroundColor: 'transparent',
            color: '#222',
            fontSize: '17px',
            lineHeight: '1.8',
            padding: '0 5%',
            width: '100%',
            maxWidth: '1200px',
            margin: '0 auto',
            fontFamily: 'Segoe UI, sans-serif',
        });

        // Mental health content
        const coreMatters = [
            {
                title: "Understanding Mental Health: A Comprehensive View",
                content: "Mental health encompasses our emotional, psychological, and social well-being, influencing how we think, feel, and act. It's a spectrum, varying throughout life, affected by genetics, experiences, and environment. Prioritizing mental health is crucial for overall wellness, impacting relationships, work, and daily choices. Recognizing that mental health is as important as physical health is key to a balanced life.",
            },
            {
                title: "The Importance of Self-Care: Nurturing Your Well-being",
                content: "Self-care involves deliberate actions to improve physical and mental health. This includes getting adequate sleep (7-9 hours), eating a balanced diet rich in nutrients, engaging in regular physical exercise, and pursuing hobbies or activities that bring joy and relaxation. Recognizing and addressing your needs helps prevent burnout, reduces stress, and promotes overall well-being. Self-care is a necessary practice, not a luxury, and should be integrated into daily routines.",
            },
            {
                title: "Managing Stress and Anxiety: Coping Strategies",
                content: "Stress and anxiety are common responses to life's challenges, but they can be managed effectively. Techniques such as deep breathing exercises, mindfulness meditation, regular physical activity, and time management can help reduce their impact. Identifying personal triggers and developing healthy coping mechanisms are crucial. If stress and anxiety become overwhelming, seeking professional help is advisable. Learning to manage these emotions is key to maintaining mental equilibrium and preventing long-term negative effects.",
            },
            {
                title: "Seeking Support: The Strength in Asking for Help",
                content: "Asking for help is a sign of strength, not weakness. Talking to trusted friends, family members, or mental health professionals can provide valuable support and guidance during challenging times. Support groups and online resources can also offer a sense of community and shared experiences. Remember, you don't have to face your struggles alone. Seeking help early can prevent minor issues from escalating into major problems, fostering a culture where vulnerability is embraced and support is readily available.",
            },
            {
                title: "Building Resilience: Bouncing Back Stronger",
                content: "Resilience is the ability to adapt and thrive in the face of adversity, trauma, tragedy, or significant stress. It involves developing coping strategies, maintaining a positive outlook, and fostering strong social connections. Resilience can be learned and strengthened over time. It's about finding inner strength and using challenging experiences as opportunities for growth and personal development. Cultivating resilience helps you navigate life's challenges with greater ease and confidence and fosters a proactive approach to mental health.",
            },
            {
                title: "The Power of Positive Connections: Social Support",
                content: "Maintaining positive social connections is vital for mental well-being. Supportive relationships provide a sense of belonging, reduce feelings of isolation, and offer emotional support. Cultivating meaningful relationships involves open communication, empathy, and mutual respect. Making time for social activities and connecting with loved ones is essential for fostering a sense of community and belonging, which are crucial for mental and emotional health.",
            },
            {
                title: "Mindfulness and Presence: Living in the Moment",
                content: "Practicing mindfulness helps us to be present in the moment without judgment. It involves cultivating awareness of thoughts, feelings, and sensations as they arise. Mindfulness helps reduce worry, increase self-awareness, and promote overall well-being. Techniques such as meditation, deep breathing, and mindful movement can enhance mindfulness. Practicing mindfulness allows individuals to appreciate life's simple pleasures and navigate its complexities with greater clarity and equanimity.",
            },
            {
                title: "The Impact of Sleep: Restorative Power",
                content: "Good sleep is vital for mental and physical health. Aim for 7-9 hours of quality sleep per night. Proper sleep regulates mood, improves cognitive function, and enhances overall well-being. Establishing a consistent sleep schedule, creating a relaxing bedtime routine, and optimizing your sleep environment are essential for restful sleep. Prioritizing sleep is an investment in mental clarity, emotional stability, and overall vitality.",
            },
            {
                title: "Nutrition's Role in Mental Health: Fueling Your Mind",
                content: "A balanced diet, rich in fruits, vegetables, whole grains, and lean proteins, supports brain health and mood regulation. Limiting processed foods, sugar, and excessive caffeine can prevent mood swings and energy crashes. Staying hydrated and consuming omega-3 fatty acids can also benefit mental health. Nourishing your body with healthy foods is an investment in your mental well-being and overall health.",
            },
            {
                title: "The Benefits of Physical Activity: Moving for Well-being",
                content: "Regular exercise releases endorphins, which have mood-boosting effects. Aim for at least 30 minutes of moderate exercise most days of the week. Activities like walking, jogging, swimming, and yoga can reduce anxiety and depression, improve sleep, boost self-esteem, and enhance overall mental resilience. Finding an enjoyable activity and making it a part of your routine is key to reaping these benefits.",
            },
        ];

        // Display each topic
        coreMatters.forEach(matter => {
            const titleEl = document.createElement('h3');
            titleEl.textContent = matter.title;
            Object.assign(titleEl.style, {
                fontSize: '24px',
                color: '#1a1a1a',
                fontWeight: '700',
                marginTop: '40px',
                marginBottom: '10px',
            });
            mentalHealthSection.appendChild(titleEl);

            const contentEl = document.createElement('p');
            contentEl.textContent = matter.content;
            Object.assign(contentEl.style, {
                fontSize: '17px',
                color: '#333',
                marginBottom: '20px',
            });
            mentalHealthSection.appendChild(contentEl);
        });

        // Closing encouragement
        const encouragement = document.createElement('p');
        encouragement.textContent = "Remember, taking care of your mental health is an ongoing journey. Be patient with yourself, celebrate your progress, and seek support when needed. You are not alone, and your well-being matters.";
        Object.assign(encouragement.style, {
            marginTop: '30px',
            fontSize: '17px',
            fontWeight: '600',
            color: '#111',
        });
        mentalHealthSection.appendChild(encouragement);
    }
});
