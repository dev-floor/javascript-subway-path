import { PATH_SEARCH_MANAGER_PAGE_TEMPLATE } from "./view/pathSearchTemplate.js";
import lineStorage from './storage/lineStorage.js';
import Dijkstra from "./utils/Dijkstra.js";


export default function pathSearchManagerPage(contentSectionTag) {
  contentSectionTag.innerHTML = PATH_SEARCH_MANAGER_PAGE_TEMPLATE;
  let lines = lineStorage().getLine();
  console.log(lines)
  
  const dijkstra = new Dijkstra();
  dijkstra.addEdge("교대", "강남", 3);
  dijkstra.addEdge("강남", "역삼", 3);
  const result = dijkstra.findShortestPath("교대", "역삼");
  console.log(result, 11)
}

export {pathSearchManagerPage};