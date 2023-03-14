
export function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([null, {}]);
    }, 500);
  });
}
