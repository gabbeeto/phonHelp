
document.addEventListener("DOMContentLoaded", () => {
    // Select all the vowel buttons
    const buttons = document.querySelectorAll('.vowel-btn');
    
    // Variable to keep track of the currently playing audio
    let currentAudio = null;

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        // 1. Stop the previous audio if it is still playing
        if (currentAudio) {
          currentAudio.pause();
          currentAudio.currentTime = 0;
        }

        // 2. Get the audio file name from the data attribute
        const sound = btn.getAttribute('data-audio');
        
        // 3. Define the path to your audio files
        // IMPORTANT: Make sure this matches your folder structure!
        const audioPath = `audio/vowels/${sound}.mp3`; 
        
        // 4. Create and play the new audio
        currentAudio = new Audio(audioPath);
        
        // Error handling just in case a file is missing or named incorrectly
        currentAudio.onerror = () => {
          console.warn(`Audio file not found: ${audioPath}. Please check the path and filename.`);
        };

        currentAudio.play().catch(e => {
          console.log("Audio playback prevented by browser.");
        });

        // 5. Add visual feedback (the pulse animation from your CSS)
        btn.classList.add('playing');
        
        // Remove the animation class after it finishes (400ms)
        setTimeout(() => {
          btn.classList.remove('playing');
        }, 400); 
      });
    });
  });


  document.addEventListener("DOMContentLoaded", () => {
    // Select all the consonant buttons
    const buttons = document.querySelectorAll('.consonant-btn');
    
    // Variable to keep track of the currently playing audio
    let currentAudio = null;

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        // 1. Stop the previous audio if it is still playing
        if (currentAudio) {
          currentAudio.pause();
          currentAudio.currentTime = 0;
        }

        // 2. Get the audio file name from the data attribute
        const sound = btn.getAttribute('data-audio');
        
        // 3. Define the path to your audio files
        // IMPORTANT: Matches the folder structure we discussed!
        const audioPath = `audio/consonants/${sound}.mp3`; 
        
        // 4. Create and play the new audio
        currentAudio = new Audio(audioPath);
        
        // Error handling just in case a file is missing or named incorrectly
        currentAudio.onerror = () => {
          console.warn(`Audio file not found: ${audioPath}. Please check the path and filename.`);
        };

        currentAudio.play().catch(e => {
          console.log("Audio playback prevented by browser. User needs to interact with the page first.");
        });

        // 5. Add visual feedback (the pulse animation from your CSS)
        btn.classList.add('playing');
        
        // Remove the animation class after it finishes (400ms)
        setTimeout(() => {
          btn.classList.remove('playing');
        }, 400); 
      });
    });
  });
