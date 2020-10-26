$('#miao').on('click',function(){
    $('.log_in').fadeIn
    $('#gtfo').on('click',function(){
        $('.log_in').fadeOut
    })
});

pageTransition(document.querySelectorAll("a"));

function pageTransition(nodeList){
    nodeList.forEach(a => {
        const href = a.getAttribute("href");
        const hash = a.hash ||"tmp";
        
        href && href[0] !== "#" && a.target !== "_blank" && a.href !== '${location.protocol}//${location.hostname}${location.pathname}${hash}' && (
        a.addEventListener("click",e =>{
            e.preventDefault(),
                
                setTimeout(() => {
                body.classList.contains("hidden")&&(
                    location.href = href
                )
            }, 800),
                body.classList.add("hidden")
        }))
    })
};

document.body.classList.add("reveal");
