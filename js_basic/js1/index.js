//this is a comment
        console.log('Puneet kaushikji');




        const apiKey = "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"; // Place your actual API key here

        async function fetchAPI() {
          try {
            const response = await fetch("https://api.openai.com/v1/completions", {
              method: "POST",
              headers: {
                "Authorization": `Bearer ${apiKey}`, // Fixed the syntax for Authorization header
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                model: "gpt-3.5-turpo",
                prompt: "Hello, How are you!!!",
                max_tokens: 9 // Changed 'max tokens' to 'max_tokens' for correct property name
              })
            });
        
            const data = await response.json();
            console.log(data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        }
        
        fetchAPI();
        