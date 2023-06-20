import { NextResponse, NextRequest} from "next/server";
import dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";
import { log } from "console";

dotenv.config();

//OpenAI API Config

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

//OpenAI API Call

const gpt = async (prompt: string) => {
  const chat_completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
  });
  return chat_completion;
};

//Request handler

export const POST = async (request: NextRequest) => {
  const ingredients = await request.json().then(body => body.ingredients);
  console.log("working on it");
  

  let ingredientsString = "";

  for (const ingredient of ingredients){
    ingredientsString += ingredient + " "
  }
  

  let message: any = await gpt(`Give me a recipe for a dish using following ingredients: ` + ingredientsString + `. Don't say anything like "certainly!" in the beginning.`).then(
    (resp) => resp.data.choices[0].message.content
  );

  return NextResponse.json({ message: message });
};
