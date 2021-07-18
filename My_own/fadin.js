document.addEventListener("scroll", function () {
    let pageTop = document.scroll
    let pageBottom = pageTop + window.innerHeight;
    let tags = document.querySelector("figure");

    for ( let i = 0; i < tags.length; i++)
        if ( tags[i].position.top < pageBottom)
            tags[i].addClass("visible");
        else
            tags[i].removeClass("visible");
})