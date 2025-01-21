import React, { useState } from 'react';
import { Sliders, Copy, RefreshCw, Check } from 'lucide-react';

const LoremGenerator = () => {
  const [wordCount, setWordCount] = useState(100);
  const [text, setText] = useState('');
  const [copied, setCopied] = useState(false);
  const [options, setOptions] = useState({
    specialChars: false,
    numbers: false,
    capitalLetters: false,
    specialLetters: false,
  });

  const baseWords = [
    "lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit",
    "sed", "do", "eiusmod", "tempor", "incididunt", "ut", "labore", "et", "dolore",
    "magna", "aliqua", "enim", "ad", "minim", "veniam", "quis", "nostrud",
    "exercitation", "ullamco", "laboris", "nisi", "aliquip", "ex", "ea", "commodo",
    "consequat", "duis", "aute", "irure", "in", "reprehenderit", "voluptate",
    "velit", "esse", "cillum", "eu", "fugiat", "nulla", "pariatur", "excepteur",
    "sint", "occaecat", "cupidatat", "non", "proident", "sunt", "culpa", "qui",
    "officia", "deserunt", "mollit", "anim", "id", "est", "laborum"
  ];

  const specialLetterWords = [
    "señor", "café", "año", "día", "méxico", "parís", "König", "größe", "français",
    "château", "piñata", "jalapeño", "résumé", "crème", "entrée", "façade"
  ];

  const capitalizeFirst = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  const getNumberWord = () => {
    const numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    const numerals = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    return Math.random() > 0.5 ? 
      numbers[Math.floor(Math.random() * numbers.length)] :
      numerals[Math.floor(Math.random() * numerals.length)];
  };

  // Function to add special characters
  const addSpecialChars = (word) => {
    const specialChars = ["!", "?", ",", ".", ";", ":", "-"];
    return Math.random() > 0.8 ? word + specialChars[Math.floor(Math.random() * specialChars.length)] : word;
  };

  const generateLorem = () => {
    let words = [...baseWords];
    let result = [];

    // Add special letter words if option is selected
    if (options.specialLetters) {
      words = [...words, ...specialLetterWords];
    }

    for (let i = 0; i < wordCount; i++) {
      let word = words[Math.floor(Math.random() * words.length)];

      // Apply transformations based on options
      if (options.capitalLetters && Math.random() > 0.7) {
        word = capitalizeFirst(word);
      }

      if (options.numbers && Math.random() > 0.9) {
        result.push(getNumberWord());
        continue;
      }

      if (options.specialChars) {
        word = addSpecialChars(word);
      }

      result.push(word);
    }

    // Ensure the text starts with "Lorem ipsum"
    if (result.length >= 2) {
      result[0] = "Lorem";
      result[1] = "ipsum";
    }

    result[0] = capitalizeFirst(result[0]);
    const lastWord = result[result.length - 1].replace(/[.,!?;:]$/, '');
    result[result.length - 1] = lastWord + '.';

    for (let i = 3; i < result.length - 1; i++) {
      if (Math.random() > 0.9) {
        result[i] = result[i].replace(/[.,!?;:]$/, '') + '.';
        if (i + 1 < result.length) {
          result[i + 1] = capitalizeFirst(result[i + 1]);
        }
      }
    }

    setText(result.join(' '));
  };

  const handleCheckboxChange = (e) => {
    setOptions({
      ...options,
      [e.target.name]: e.target.checked,
    });
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-[#fdf0d5] min-h-screen">
      <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-[#003049]/10">
        <h1 className="text-4xl font-bold mb-8 text-[#003049] text-center">
          Lorem Ipsum Generator
        </h1>
        
        <div className="mb-8">
          <label className="block text-sm font-medium text-[#003049] mb-2">
            Number of words
          </label>
          <div className="relative">
            <input
              type="range"
              value={wordCount}
              onChange={(e) => setWordCount(e.target.value)}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#2a9d8f]"
              min="1"
              max="2500"
            />
            <input
              type="number"
              value={wordCount}
              onChange={(e) => setWordCount(e.target.value)}
              className="mt-2 p-2 w-24 border rounded-md border-gray-300 text-center mx-auto block"
              min="1"
              max="1000"
            />
          </div>
        </div>

        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Sliders className="w-5 h-5 text-[#2a9d8f]" />
            <h2 className="text-lg font-semibold text-[#003049]">Options</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(options).map(([key, value]) => (
              <label key={key} className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                <input
                  type="checkbox"
                  name={key}
                  checked={value}
                  onChange={handleCheckboxChange}
                  className="w-4 h-4 text-[#2a9d8f] border-gray-300 rounded focus:ring-[#2a9d8f]"
                />
                <span className="text-[#003049]">
                  {key.split(/(?=[A-Z])/).join(" ")}
                </span>
              </label>
            ))}
          </div>
        </div>

        <button
          onClick={generateLorem}
          className="w-full bg-[#003049] text-white py-3 rounded-lg mb-8 flex items-center justify-center gap-2 hover:bg-[#003049]/90 transition-colors"
        >
          <RefreshCw className="w-5 h-5" />
          Generate Lorem Ipsum
        </button>

        {text && (
          <div className="relative group">
            <textarea
              readOnly
              value={text}
              className="w-full p-6 border-2 rounded-lg border-gray-200 h-64 mb-4 focus:border-[#2a9d8f] focus:ring-[#2a9d8f] font-mono text-sm"
            />
            <button
              onClick={copyToClipboard}
              className={`absolute top-4 right-4 ${
                copied ? 'bg-[#2a9d8f]' : 'bg-[#003049]'
              } text-white py-2 px-4 rounded-lg flex items-center gap-2 opacity-90 hover:opacity-100 transition-all`}
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  Copy
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoremGenerator;