function generateAppID()
{   
    var randNum = (Math.floor(Math.random() * 90000) + 10000).toString();
    const appID = "APP" + randNum;
    return appID
    

}

export default generateAppID;