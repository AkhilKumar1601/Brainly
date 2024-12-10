export function random(len : number) {
  const options = "lkhlkaghiahgilhnllkvgin";
  const length = options.length;

  let ans = ""
  for(let i : number = 0; i < len; i++) {
     ans += options[Math.floor((Math.random()*length))]
  }

  return ans;
}