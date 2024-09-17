import FileSaver from 'file-saver';
import { surpriseMePrompts } from "../constants";

{/* get a random prompt from pre-prepared prompt list*/}
export function getRandomPrompt(prompt) {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPrompt = surpriseMePrompts[randomIndex];
  {/* if the newly selected prompt is strictly equal to the previous one, select again */}
  if (randomPrompt === prompt) return getRandomPrompt(prompt);
  return randomPrompt;
}

export async function downloadImage(_id, photo) {
  FileSaver.saveAs(photo, `download-${_id}.jpg`)
}