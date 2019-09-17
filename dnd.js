$(function() {

  $('#dropzone').dndupload('./upload.php','./files/',function(result){
    console.log(result);
  });

});
