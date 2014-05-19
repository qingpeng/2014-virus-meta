$([IPython.events]).on('app_initialized.NotebookApp', function(){
    require(['/static/custom/clean_start.js']);
    require(['/static/custom/slidemode/main.js']);
})