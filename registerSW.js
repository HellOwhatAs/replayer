if ('serviceWorker'in navigator) {
    window.addEventListener('load', ()=>{
        navigator.serviceWorker.register('/replayer/sw.js', {
            scope: '/replayer/'
        })
    }
    )
}
