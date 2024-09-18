import FileSaver from 'file-saver';
import { surpriseMePrompts } from "../constants";

{/* Helper function: get a random prompt from pre-prepared prompt list*/}
export function getRandomPrompt(prompt) {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPrompt = surpriseMePrompts[randomIndex];
  {/* if the newly selected prompt is strictly equal to the previous one, select again */}
  if (randomPrompt === prompt) return getRandomPrompt(prompt);
  return randomPrompt;
}

{/* Helper function: download image using FileSaver package*/}
export async function downloadImage(_id, photo) {
  FileSaver.saveAs(photo, `download-${_id}.jpg`)
}