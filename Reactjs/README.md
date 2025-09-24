React TTS demo

This small React app uses the Web Speech API (built into modern browsers) to perform text-to-speech.

How to run (Windows cmd.exe):

1. From `f:\MERN Course\Reactjs`, install dependencies (this will use the local `package.json`):

   npm install

2. Start the dev server:

   npm run dev

3. Open the URL shown by Vite (usually http://localhost:5173) in a modern browser (Chrome, Edge, or Firefox). The Web Speech API must be supported by the browser for speech to work.

Notes
- The project includes `@google-cloud/text-to-speech` as a dependency — it's optional and not used in the browser app. Server-side usage requires Google Cloud credentials.
- If you want an MP3 export, use server-side TTS (e.g., Google Cloud TTS or a Node gTTS wrapper) and serve the generated file.
