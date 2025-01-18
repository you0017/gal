var posts=["2025/01/18/hello-world/","2024/09/09/gal/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };