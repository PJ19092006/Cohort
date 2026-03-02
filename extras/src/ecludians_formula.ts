let a = 2025,
  b = 207;

function getGcd(a: number, b: number): number {
  let ans = 1;
  while (a > 0) {
    ans = a;
    let r = a % b;
    a = b;
    b = r;
  }

  return ans;
}

console.log(getGcd(a, b));
