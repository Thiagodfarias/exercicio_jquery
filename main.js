$(function() {
    var $form = $('#task-form');
    var $list = $('#task-list');
    
    $form.on('submit', function(event) {
        event.preventDefault(); 
        var newTask = $('#new-task').val();
        var $newListItem = $('<li>').text(newTask);
        $list.append($newListItem);
        $('#new-task').val('');
    });
    
    $list.on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});