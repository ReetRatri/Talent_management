$(document).ready(function(){
	$('#print').click(function() {

        getPDF()        
      });
});

function getPDF(){
    var HTML_Width = $(".print_form").width();
    var HTML_Height = $(".print_form").height();
    var top_left_margin = 20;
    var PDF_Width = HTML_Width+(top_left_margin*1);
    var PDF_Height = (PDF_Width*1)+(top_left_margin*1);
    var canvas_image_width = HTML_Width;
    var canvas_image_height = HTML_Height;
    
    var totalPDFPages = Math.ceil(HTML_Height/PDF_Height)-1;
    
    
    
    html2canvas($(".print_form")[0],{allowTaint:true}).then(function(canvas) {
        canvas.getContext('2d');
        
        console.log(canvas.height+"  "+canvas.width);
        
        
        var imgData = canvas.toDataURL("image/jpeg", 1.0);
        var pdf = new jsPDF('p', 'pt',  [PDF_Width +180, PDF_Height]);
        pdf.addImage(imgData, 'JPG', top_left_margin, top_left_margin,canvas_image_width,canvas_image_height);
        pdf.setFontSize(5);
        
        for (var i = 1; i <= totalPDFPages; i++) { 
            pdf.addPage(PDF_Width, PDF_Height);
            pdf.addImage(imgData, 'JPG', top_left_margin, -(PDF_Height*i)+(top_left_margin*8),canvas_image_width,canvas_image_height);
        }
        
        pdf.save("download.pdf");
    });
    };

