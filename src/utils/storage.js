export const saveToLocal = (name, flowchart) => {
  const flowcharts = JSON.parse(localStorage.getItem("flowcharts") || "{}");
  const id = "flow-" + Date.now();

  flowcharts[id] = {
    id,
    name,
    createdAt: new Date().toISOString(),
    ...flowchart,
  };

  localStorage.setItem("flowcharts", JSON.stringify(flowcharts));
  return id;
};

export const loadFromLocal = (id) => {
  const flowcharts = JSON.parse(localStorage.getItem("flowcharts") || "{}");
  return flowcharts[id] || null;
};

export const getAllFlowcharts = () => {
  return JSON.parse(localStorage.getItem("flowcharts") || "{}");
};

export const exportAsJSON = (flowchart) => {
  const dataStr = JSON.stringify(flowchart, null, 2);
  const dataUri =
    "data:application/json;charset=utf-8," + encodeURIComponent(dataStr);

  return dataUri;
};
