$(document).ready(function() {
    $("#logo-img").click(function(e) {

        e.preventDefault(); 

        let studentNameHTML = '<span class="text-primary fw-bold fs-4 ms-2">66133559</span>';
        
        $(this).replaceWith(studentNameHTML);
        
    });
    
});
