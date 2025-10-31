import React, { useState, useCallback } from 'react';
import { GoogleGenAI, Type } from "@google/genai";
import { fileToBase64 } from '../utils';

interface PizzaIdea {
  name: string;
  ingredients: string[];
}

const PizzaMaker: React.FC = () => {
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [pizzaIdea, setPizzaIdea] = useState<PizzaIdea | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
      setPizzaIdea(null);
      setError(null);
    }
  };

  const handleDrop = useCallback((event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    event.stopPropagation();
    const file = event.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) {
        setImage(file);
        setImagePreview(URL.createObjectURL(file));
        setPizzaIdea(null);
        setError(null);
    }
  }, []);

  const handleDragOver = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const analyzeImage = async () => {
    if (!image) {
      setError("Please upload an image first.");
      return;
    }

    setIsLoading(true);
    setError(null);
    setPizzaIdea(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
      const base64Image = await fileToBase64(image);

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: {
          parts: [
            { text: "You are a creative pizza chef at an artisan brewery. Based on this image of ingredients, invent a catchy, creative name for a new pizza and list its core ingredients. Return ONLY a JSON object with two keys: 'name' (string) and 'ingredients' (an array of strings). Example: {\"name\": \"The Rustic Fig\", \"ingredients\": [\"Fig Jam\", \"Prosciutto\", \"Gorgonzola Cheese\", \"Arugula\", \"Balsamic Glaze\"]}" },
            {
              inlineData: {
                mimeType: image.type,
                data: base64Image,
              },
            },
          ],
        },
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              name: { type: Type.STRING },
              ingredients: {
                type: Type.ARRAY,
                items: { type: Type.STRING },
              },
            },
          },
        },
      });
      
      const resultText = response.text.trim();
      const resultJson = JSON.parse(resultText);
      setPizzaIdea(resultJson);

    } catch (err) {
      console.error(err);
      setError("Sorry, the AI chef is busy. Please try again in a moment.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="pizza-ai" className="py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl sm:text-5xl text-amber-400 mb-4">Pizza Vision AI</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Got an ingredient? Upload a photo and let our AI chef invent a unique artisan pizza for you!
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <label 
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              className="relative block w-full h-80 rounded-lg border-2 border-dashed border-zinc-600 flex flex-col justify-center items-center text-center cursor-pointer hover:border-amber-400 transition-colors"
            >
              {imagePreview ? (
                <img src={imagePreview} alt="Uploaded preview" className="w-full h-full object-cover rounded-lg" />
              ) : (
                <div className="text-zinc-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
                  <span className="mt-2 block font-medium">Drag & drop an image or click to upload</span>
                </div>
              )}
              <input type="file" accept="image/*" onChange={handleImageChange} className="sr-only" />
            </label>
            <button
              onClick={analyzeImage}
              disabled={!image || isLoading}
              className="w-full bg-amber-500 text-zinc-900 font-bold py-3 px-8 rounded-md hover:bg-amber-400 transition-transform duration-300 hover:scale-105 disabled:bg-zinc-600 disabled:cursor-not-allowed disabled:scale-100"
            >
              {isLoading ? 'Creating...' : 'Create My Pizza'}
            </button>
          </div>

          <div className="bg-zinc-800 rounded-lg p-6 min-h-[24rem] flex flex-col justify-center">
            {isLoading && (
               <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-400 mx-auto"></div>
                <p className="mt-4 text-zinc-300">Our AI chef is firing up the oven...</p>
               </div>
            )}
            {error && (
                <div className="text-center text-red-400">
                    <p className="font-bold">An Error Occurred</p>
                    <p>{error}</p>
                </div>
            )}
            {pizzaIdea && (
                <div>
                    <h3 className="text-3xl font-bold text-amber-400 text-center mb-6">"{pizzaIdea.name}"</h3>
                    <ul className="space-y-2">
                        {pizzaIdea.ingredients.map((item, index) => (
                           <li key={index} className="flex items-center text-zinc-200">
                               <svg className="w-5 h-5 mr-3 text-amber-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path></svg>
                               {item}
                           </li>
                        ))}
                    </ul>
                </div>
            )}
            {!isLoading && !error && !pizzaIdea && (
                 <div className="text-center text-zinc-400">
                    <p>Your pizza creation will appear here.</p>
                 </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PizzaMaker;