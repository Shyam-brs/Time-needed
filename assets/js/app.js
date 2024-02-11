function informEmployees(headID, informTime, manager) {
  const n = informTime.length;
  let maxTime = 0;

  // Define a helper function to recursively calculate the time needed for informing
  function dfs(employeeID, timeSoFar) {
    maxTime = Math.max(maxTime, timeSoFar);

    for (let i = 0; i < n; i++) {
      if (manager[i] === employeeID) {
        dfs(i, timeSoFar + informTime[employeeID]);
      }
    }
  }

  // Start the DFS traversal from the head of the company
  dfs(headID, 0);

  return maxTime;
}

function calculateTime() {
  const nEmployees = parseInt(document.getElementById("nEmployees").value);
  const headID = parseInt(document.getElementById("headID").value);

  // Sample values for informTime and manager arrays
  const informTime = [0, 5, 3, 10, 7]; // Sample informTime array
  const manager = [-1, 0, 0, 1, 1]; // Sample manager array

  if (
    isNaN(nEmployees) ||
    isNaN(headID) ||
    headID >= nEmployees ||
    headID < 0
  ) {
    document.getElementById("result").innerText =
      "Invalid input. Please enter valid values.";
    return;
  }

  const totalTime = informEmployees(headID, informTime, manager);
  document.getElementById(
    "result"
  ).innerText = `Total minutes needed: ${totalTime}`;
}
