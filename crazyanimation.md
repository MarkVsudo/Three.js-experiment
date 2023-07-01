// Smooth movement variables

constmovementSpeed=0.0015;

letmoveDirection=1;

letinitialYPosition=book?book.position.y:0;

// Circular movement variables

letangle=0;

constradius=0.2;

constrotationSpeed=0.005;

// Cone rotation variables

constconeAngle=Math.PI/6; // 30 degrees

constconeCenter=newTHREE.Vector3(3, 0.1, -1.5);

// Render the scene

functionanimate() {

requestAnimationFrame(animate);

// Smoothly move the book up and down

if (book) {

    book.position.y+=movementSpeed*moveDirection;

    // Check if the book reaches a certain height, then change the moveDirection to reverse the movement

    if (book.position.y>=initialYPosition+0.3) {

    moveDirection=-1;

    } elseif (book.position.y<=initialYPosition) {

    moveDirection=1;

    }

    // Move the book in a circular path

    angle+=rotationSpeed;

    constx=coneCenter.x+Math.cos(angle)*radius*Math.cos(coneAngle);

    consty=

    coneCenter.y+Math.sin(coneAngle) * (radius-Math.cos(angle) *radius);

    constz=coneCenter.z+Math.sin(angle)*radius*Math.cos(coneAngle);

    book.position.set(x, y, z);

    // Rotate the book on the X-axis

    book.rotation.x+=0.01;

}

// Render the scene

renderer.render(scene, camera);

}
