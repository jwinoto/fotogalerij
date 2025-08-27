$(document).ready(function() {
    $('#stripImage').on('click','img', function() {
        const source = $(this).attr('src');
        const titel =  $(this).attr('title');

        

        $('#contImage img').fadeOut('500', function() {
         
            $(this).attr('src', source).fadeIn('500');
            $('#divTekst').text(titel);
        })
  
    
    })
})