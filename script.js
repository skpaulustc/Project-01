$("table td").on("click", function(){
    var $this = $(this),
        current = $this.index(),
        len = $("table td").length,
    
        len1=0
    // remove classes
    $("table td").removeClass("odd");
    $("table td").removeClass("even");
    $("table td").removeClass("hover").removeClass("hover-next");
    $("table td").removeClass("hover").removeClass("hover-before");
    // Add class to the current td
    $this.addClass("hover");
    for(var j = len1; j< current; j++){
        $("table td").eq(j).addClass("hover-before")
    }
    
    // Add class to next three tds
    for(var i = current; i<= len; i++){
        $("table td").eq(i+1).addClass("hover-next")
    }
})