var chosenQuote;
var chosenTopic;

$(document).ready(function() {
  
  var quotes = ["We don't know our own history because America has always been a forward-thinking country. Other countries would do well to follow suit", "It seems like nowadays people know more about stuff they're familiar with than stuff they haven't learned yet", "He could have been a great flower painter, but he chose the easy path", 'Interesting how only police officers are allowed to be cops in this "free" country". Thanks Obama', "When I was a kid a dollar was worth ten dollars now a dollar couldn't even buy you fifty cents","Seems that this lonely space meatball wanted to give mother earth a peck on the cheek. Now if only we could get rid of the meatballs in Washington", "The rover would be wise to refrain from sight-seeing and stick to its job", "Good article. As a retired English teacher I would add that folks also have trouble knowing when to use 'versus' verses 'versus'.", "I was lucky enough to mett Harrison Ford at a VHS-signing event in Florida. Who knew that he would go on to star in DVDs", "He'll propably blow it all on food and shelter", "Grandson does yoga", "As a polyatheist he believes MANY gods don't exist instead of the one true non-existent God" ];
  var topic = ["patriotism", "the decline of knowledge", "Hitler", "the tyranny of Obama's America", "inflation", "an asteroid that just missed Earth", "the Mars rover observing an eclipse", "grammer", "an amazing acting career", "a homeless man's honest deed being rewarded with a $16K donation", "his grandson doing yoga", "Stephen Hawking"];
  
  $("#getMessage").on("click", function(){
    
    var number = Math.floor(12*Math.random());
    chosenQuote = quotes[number];
    chosenTopic = topic[number];
    $("#message").html(chosenQuote).append("<br><br> - " + "KenM on " + chosenTopic);
    
  });
  
  $("#twitterButton").on("click", function(){
    window.open("https://twitter.com/intent/tweet?text="+chosenQuote+"%20-KenM");
  });
  
});