const getCookieByName=name=>{
    const cookieString = document.cookie;
    const cookieParts = cookieString.split('; ');
    const cookie = cookieParts.find(c=>c.includes(name))
    if(cookie){
        
    }
}
getCookieByName()



console.log('added')