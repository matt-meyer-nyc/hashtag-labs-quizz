//  CODE FOR PRACTICAL #3

window.onload = function() {
  console.log("window onload functioning");



  const visible = function(el) {

  //  method returning size of element and position relative to viewport; assign to checkRectangle
  const checkRectangle = el.getBoundingClientRect();

  //  check for: bottom, top, left and right for visiblity in viewport
  return (
       checkRectangle.bottom >= 0 &&
       checkRectangle.right >= 0 &&
       checkRectangle.top <= (window.innerHeight || document.documentElement.clientHeight) &&
       checkRectangle.left <= (window.innerWidth || document.documentElement.clientWidth)
   );
 };

  // run notifyVisible in 2 second intervals
  const checkVisible = window.setInterval(notifyVisible, 2000);

  //  invoke visible function with #myimage element parameter
  //  print 'visible' to console if element meets 'check for:' criteria
  function notifyVisible() {
    if (visible(document.querySelector("#myimage"))) {
      console.log("visible");
    }
  };

} // end window.onload
