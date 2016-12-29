function makeid()
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

console.log("Generating foot massage codes\n");
var codes = [];
for (var i = 0; i<=52; i++) {
  var code = [];
  for (var j= 0; j<5;j++) {
    code.push(makeid());
  };
  codes.push(code.join("-"));
  console.log(code.join("-"))
};
//console.log(codes);
