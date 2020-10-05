function bounceOff(gobject1,gobject2) { 

    if(gobject1.x - gobject2.x < gobject2.width/2 + gobject1.width/2
      && gobject2.x - gobject1.x < gobject2.width/2 + gobject1.width/2)
    {
      gobject1.velocityX = gobject1.velocityX * (-1)
      gobject2.velocityX = gobject2.velocityX * (-1)
    } 
      if (gobject1.y - gobject2.y < gobject2.height/2 + gobject1.height/2
      && gobject2.y - gobject1.y < gobject2.height/2 + gobject1.height/2) 
      {
        gobject1.velocityY = gobject1.velocityY * (-1)
        gobject2.velocityY = gobject2.velocityY * (-1)
      }
  
  }

  function isTouching(gobject1,gobject2) { 

    if(gobject1.x - gobject2.x < gobject2.width/2 + gobject1.width/2
      && gobject2.x - gobject1.x < gobject2.width/2 + gobject1.width/2
      && gobject1.y - gobject2.y < gobject2.height/2 + gobject1.height/2
      && gobject2.y - gobject1.y < gobject2.height/2 + gobject1.height/2) 
  { 
      return true
  }
    else {return false}
  }