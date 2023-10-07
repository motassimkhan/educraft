const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
const endpoint = 'https://api.openai.com/v1/engines/davinci/completions'; // The API endpoint

const prompt = 'Translate the following English text to French: "{text}"';

fetch(endpoint, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`,
  },
  body: JSON.stringify({
    prompt: prompt,
    max_tokens: 50, // Adjust the desired number of tokens
  }),
})
.then(response => response.json())
.then(data => {
  const generatedText = data.choices[0].text;
  // Handle and display the generated text in your web application
})
.catch(error => {
  console.error('Error:', error);
});
