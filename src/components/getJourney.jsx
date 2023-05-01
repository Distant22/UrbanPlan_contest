import { getDocs, collection, query, where, limit } from "firebase/firestore"; 
import { getDB } from "../firebase";

export async function getJourney(name) {
  const journeys = collection(getDB(), 'journey2023');
  const journeyQuery = query(journeys, where('Region', '==', name), limit(10));
  const journeySnapShot = await getDocs(journeyQuery);
  const journeyList = journeySnapShot.docs.map(doc => doc.data());
  
  return journeyList;
}
