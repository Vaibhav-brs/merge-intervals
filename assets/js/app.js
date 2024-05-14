function mergeIntervals() {
    const input = document.getElementById("interval").value;
    const intervals = JSON.parse("[" + input + "]");
  
    intervals.sort((a, b) => a[0] - b[0]);
  
    let merged = [intervals[0]];
  
    for (let i = 1; i < intervals.length; i++) {
      let curr = intervals[i];
      let lastMerged = merged[merged.length - 1];
      
      if (curr[0] <= lastMerged[1]) {
        lastMerged[1] = Math.max(lastMerged[1], curr[1]);
      } else {
        merged.push(curr);
      }
    }
  
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "Merged Intervals: " + JSON.stringify(merged);
  }
  