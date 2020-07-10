(function() {
    var coreSocialistValues = ["富强", "民主", "文明", "和谐", "自由", "平等", "公正", "法治", "爱国", "敬业", "诚信", "友善"];
    var index = Math.floor(Math.random() * coreSocialistValues.length);
    document.body.addEventListener('click', function(e) {
        if (e.target.tagName == 'A') {
            return;
        }
        var x = e.pageX,
            y = e.pageY,
            span = document.createElement('span');
        span.textContent = coreSocialistValues[index];
        index = (index + 1) % coreSocialistValues.length;
        span.style.cssText = ['z-index: 9999999; position: absolute; font-weight: bold; color: #ff6651; top: ', y - 20, 'px; left: ', x, 'px;'].join('');
        document.body.appendChild(span);
        animate(span);
    });

    function animate(el) {
        var i = 0,
            top = parseInt(el.style.top),
            id = setInterval(frame, 16.7);

        function frame() {
            if (i > 180) {
                clearInterval(id);
                el.parentNode.removeChild(el);
            } else {
                i += 2;
                el.style.top = top - i + 'px';
                el.style.opacity = (180 - i) / 180;
            }
        }
    }
}());


console.log(`%c `, `padding:50px 500px;line-height:200px;background:url('https://upload-images.jianshu.io/upload_images/2848009-d066859cd27cb1aa?imageMogr2/auto-orient/strip|imageView2/2/w/400/format/webp') no-repeat;`)
console.log(`%c两个BUG鸣翠柳\n一行代码上西天\n春宵一刻值千金\n完事起来敲代码\n       ----Mr.Liux`, `color:blue;text-shadow: 0 1px 0 #ccc,0 2px 0 #c9c9c9,0 3px 0 #bbb,0 4px 0 #b9b9b9,0 5px 0 #aaa,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);font-size:5em;`)
console.log(`%c `, `padding:50px 300px;line-height:100px;background:url('https://pic1.zhimg.com/v2-232fc40e9b41f37839137d9a3a1f320c_b.webp') no-repeat;`)