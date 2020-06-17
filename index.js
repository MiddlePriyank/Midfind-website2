// // $(document).ready(function () {
// //   $("#cf7_controls").on("click", "span", function () {
// //     $("#cf7 img").removeClass("opaque");

// //     var newImage = $(this).index();

// //     $("#cf7 img").eq(newImage).addClass("opaque");

// //     $("#cf7_controls span").removeClass("selected");
// //     $(this).addClass("selected");
// //   });
// // });
// var bgImageArray = ["./images/1.jpg", "./images/2.jpeg", "./images/3.png"],
//   // base = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/full-",
//   secs = 3;
// bgImageArray.forEach(function (img) {
//   new Image().src = img;
//   // caches images, avoiding white flash between background replacements
// });

// function backgroundSequence() {
//   window.clearTimeout();
//   var k = 0;
//   for (i = 0; i < bgImageArray.length; i++) {
//     setTimeout(function () {
//       document.documentElement.style.background =
//         "url(" + base + bgImageArray[k] + ") no-repeat center center fixed";
//       document.documentElement.style.backgroundSize = "cover";
//       if (k + 1 === bgImageArray.length) {
//         setTimeout(function () {
//           backgroundSequence();
//         }, secs * 1000);
//       } else {
//         k++;
//       }
//     }, secs * 1000 * i);
//   }
// }
// backgroundSequence();
$(".carousel").carousel({
  interval: 4000,
  pause: "false",
});
