$(document).ready(function(){
  var ieold = (/MSIE (\d+\.\d+);/.test(navigator.userAgent));
  var trident = !!navigator.userAgent.match(/Trident\/7.0/);
  var rv=navigator.userAgent.indexOf("rv:11.0");
  if (ieold || navigator.appVersion.indexOf("MSIE 10") != -1 || trident&&rv!=-1){
    window.location = "/error/ie";
  }
});