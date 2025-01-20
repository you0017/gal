var posts=["2025/01/20/source/kr/【Ty】灵感满溢的甜蜜创想/","2025/01/20/source/pc/【PC】灵感满溢的甜蜜创想/","2024/09/09/parse/【解析】Butterfly Seeker/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };