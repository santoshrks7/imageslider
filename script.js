let images = [
  "https://media.istockphoto.com/photos/bandra-worli-sea-link-bridge-mumbai-picture-id1320344786?b=1&k=20&m=1320344786&s=170667a&w=0&h=GxgfscsskjUp5CDa4F27MtCMBVQSD_3_j5JupJ8Ztm8=",
  "https://media.istockphoto.com/photos/hyderabad_buddha-picture-id504693966?b=1&k=20&m=504693966&s=170667a&w=0&h=Z7p3mx-QlEvsf5ef4ma4N1BQrVVd7Im1thXYNKTDmcQ=",
  "https://media.istockphoto.com/photos/india-gate-picture-id510795912?b=1&k=20&m=510795912&s=170667a&w=0&h=XLp6vDILq-QQ3-q3yh6YrGY-jxvWVfBXvs50izSNMzU=",
];
let titles = ["Mumbai", "Hyderabad", "Delhi"];
let descriptions = [
  "Mumbai city of dreams",
  "Hyderabad city of pearls",
  "Delhi city of rallies",
];
let imagePlaceholder = document.querySelector(".first");
let mainTitle = document.querySelector(".main_title");
let subTitle = document.querySelector(".desc");

const left = document.querySelector(".left");
const right = document.querySelector(".right");

imagePlaceholder.style.backgroundImage = `url(${images[0]})`;
mainTitle.textContent = titles[0];
subTitle.textContent = descriptions[0]

let index = 0;
let title = 0;
let subdesc = 0;

right.addEventListener("click", () => {
  index++;
  title++;
  subdesc++;
  if (index > images.length - 1) {
    index = 0;
    title = 0;
    subdesc = 0;
  }
  imagePlaceholder.style.backgroundImage = `url(${images[index]})`;
  mainTitle.textContent = titles[title];
  subTitle.textContent = descriptions[subdesc]
  // console.log("right");
  // console.log(index);
});

left.addEventListener("click", () => {
  index--;
  title--;
  subdesc--;
  if (index < 0) {
    index = images.length - 1;
    title = titles.length - 1;
    subdesc = descriptions.length - 1;
    console.log((title = titles.length - 1));
  }
  mainTitle.textContent = titles[title];
  imagePlaceholder.style.backgroundImage = `url(${images[index]})`;
  subTitle.textContent = descriptions[subdesc]
  // console.log("left");
  // console.log(title)
  // console.log(index);
});
