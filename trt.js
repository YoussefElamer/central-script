$(document).ready(function(){
  $('a[href^="#button-four-Losha-"]').each(function(){
    var _0x1a2b=['replace','split','attr','css','inline-block','none','none','pointer','1000','100%','margin','background-size','background-position','background','text-decoration','border-radius','font-weight','transition','border','cursor','overflow','max-width','hover','scale(1.05)','scale(1)','linear-gradient(90deg, ',' , ','background-position: right center','background-position: left center']; 
    var hrefRemainder=$(this).attr('href').replace('#button-four-Losha-',''), parts=hrefRemainder.split(':'), colorPart=parts[0], baseUrl=parts.slice(1).join(':'), colors=colorPart.split('-'), gradient=colors.length===1?_0x1a2b[24]+colors[0]+', '+colors[0]+')':_0x1a2b[24]+colors.join(', ')+')';

    $(this).attr('href',baseUrl);
    $(this).css({
      'display':_0x1a2b[4],
      'padding':'10px 20px',
      'background':gradient,
      'background-size':_0x1a2b[11],
      'background-position':_0x1a2b[12],
      'color':'#ffffff',
      'text-decoration':_0x1a2b[14],
      'border-radius':_0x1a2b[15],
      'font-weight':_0x1a2b[16],
      'transition':_0x1a2b[17],
      'border':'2px solid '+colors[0],
      'cursor':_0x1a2b[18],
      'z-index':_0x1a2b[8],
      'overflow':_0x1a2b[19],
      'max-width':_0x1a2b[9],
      'margin':_0x1a2b[10]
    });

    $(this).hover(function(){
      $(this).css('background-position','right center');
      $(this).css('transform',_0x1a2b[22]);
    },function(){
      $(this).css('background-position','left center');
      $(this).css('transform',_0x1a2b[23]);
    });
  });
});
