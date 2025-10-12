import React, { useState, useEffect, useRef } from 'react'

export default function App(){
  const [text, setText] = useState('Hello, welcome to React Text to Speech!')
  const [rate, setRate] = useState(1)
  const [pitch, setPitch] = useState(1)
  const [volume, setVolume] = useState(1)
  const [voices, setVoices] = useState([])
  const [selectedVoice, setSelectedVoice] = useState('')
  const utterRef = useRef(null)

  useEffect(()=>{
    if(!('speechSynthesis' in window)) return
    function loadVoices(){
      const vs = window.speechSynthesis.getVoices() || []
      setVoices(vs)
      if(vs.length && !selectedVoice) setSelectedVoice(vs[0].name)
    }
    loadVoices()
    window.speechSynthesis.onvoiceschanged = loadVoices
    return ()=>{ window.speechSynthesis.onvoiceschanged = null }
  }, [])

  function speak(){
    if(!('speechSynthesis' in window)){
      alert('SpeechSynthesis not supported in this browser')
      return
    }
    stop()
    const u = new SpeechSynthesisUtterance(text)
    u.rate = rate
    u.pitch = pitch
    u.volume = volume
    if(selectedVoice){
      const v = voices.find(v=>v.name === selectedVoice)
      if(v) u.voice = v
    }
    utterRef.current = u
    window.speechSynthesis.speak(u)
  }

  function stop(){
    if('speechSynthesis' in window){
      window.speechSynthesis.cancel()
      utterRef.current = null
    }
  }

  return (
    <div className="app">
      <header>
        <h1>React Text-to-Speech</h1>
      </header>
      <main>
        <textarea value={text} onChange={e=>setText(e.target.value)} rows={6} />

        <div className="controls">
          <label>Voice
            <select value={selectedVoice} onChange={e=>setSelectedVoice(e.target.value)}>
              {voices.map(v=> <option key={v.name} value={v.name}>{v.name} {v.lang ? `(${v.lang})` : ''}</option>)}
            </select>
          </label>

          <label>Rate
            <input type="range" min="0.5" max="2" step="0.1" value={rate} onChange={e=>setRate(Number(e.target.value))} />
            <span>{rate}</span>
          </label>

          <label>Pitch
            <input type="range" min="0.5" max="2" step="0.1" value={pitch} onChange={e=>setPitch(Number(e.target.value))} />
            <span>{pitch}</span>
          </label>

          <label>Volume
            <input type="range" min="0" max="1" step="0.1" value={volume} onChange={e=>setVolume(Number(e.target.value))} />
            <span>{volume}</span>
          </label>
        </div>

        <div className="actions">
          <button onClick={speak}>Speak</button>
          <button onClick={stop}>Stop</button>
        </div>

        <p className="note">Note: Saving to audio file isn't supported by the Web Speech API in browsers; use server-side TTS or recording tools if you need MP3 export.</p>
      </main>
    </div>
  )
}
