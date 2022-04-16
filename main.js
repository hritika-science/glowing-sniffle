var images = ["grandpa.jpg",
"grandma.jpg",
"dad.jpg","mom.jpg","boy.jpg","girl.jpg"];

var names = [ "Grandpa", "Grandma",
 "Dad", "Mom", "Brother", "Me"];

 var i=0;
 function update()
 {
     i++
     var numbers_of_family_member_in_array = 5
     if(i > numbers_of_family_member_in_array)
     {
         i = 0
     }

     var updatedImage = images[i];
     var updatedName = names[i];
     document.getElementById("cover").src = updatedImage;
     document.getElementById("family_member_name").innerHTML = updatedName;
    
   
 }
