/**
 * 우선순위 큐나 heap딱히 쓰지 않고 작동원리만 간단히 익힘
 */
function dijkstra(arr, start) {
  const isVisit = new Array(arr.length).fill(false);
  const distance = new Array(arr.length).fill(Number.MAX_SAFE_INTEGER);
  const priorityQueue = [start];
  distance[start] = 0;

  while (priorityQueue.length) {
    const index = priorityQueue.pop();
    if (isVisit[index]) continue;

    isVisit[index] = true;

    for (let i = 0; i < arr[0].length; i += 1) {
      if (distance[i] > distance[index] + arr[index][i]) {
        distance[i] = distance[index] + arr[index][i];
      }
    }

    // 방문하지 않은 노드들 중 가장 작은 값을 가지는 노드를 찾는 과정 > 원래는 우선순위큐를 활용
    let min = Number.MAX_SAFE_INTEGER;
    let minIndex = null;
    for (let i = 0; i < arr[0].length; i += 1) {
      if (!isVisit[i] && distance[i] < min) {
        minIndex = i;
        min = distance[i];
      }
    }

    if (minIndex !== null) {
      priorityQueue.push(minIndex);
    }
  }

  return distance;
}

const INF = Number.MAX_SAFE_INTEGER;
const arr = [
  [0, 10, 30, 15, INF, INF],
  [INF, 0, INF, INF, 20, INF],
  [INF, INF, 0, INF, INF, 5],
  [INF, INF, 5, 0, INF, 20],
  [INF, INF, INF, INF, 0, 20],
  [INF, INF, INF, 20, INF, 0],
];

console.log(dijkstra(arr, 0));
