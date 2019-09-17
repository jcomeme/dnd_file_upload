(function( $ ) {
  
  $.fn.dndupload = function(targetpath, filepath, callback) {

    if (typeof(filepath) == "function"){
      callback = filepath;
      filepath = './';
    }
    this.on('drop', function(event) {
      var fls = event.originalEvent.dataTransfer.files;

      var formData = new FormData();

      for (var i = 0; i < fls.length; ++i) {
        formData.append('file' + i, fls[i]);
      }
      formData.append('path', filepath || './')

      $.ajax(targetpath, {
        method: 'POST',
        contentType: false,
        processData: false,
        data:formData,
        error: function(xhr, error) {
          if (callback) {
            callback(error);
          }
        },
        success: function(response) {
          if (callback) {
            callback(response);
          }
        }
      });

      return false;

    }).on('dragover', function(event) {
      return false;
    });
    
  };
})( jQuery );
