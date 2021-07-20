<?php
$servername = "localhost";
$username = "root";
$password = "";

try {
    $db = new PDO("mysql:host=$servername;dbname=wishlist", $username, $password);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);




    //echo "Connected successfully";
    // $db->exec("CREATE DATABASE wishlist");
    // echo "Database created successfully<br>";

    // $db->exec("CREATE TABLE items (
    //     id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    //     title VARCHAR(50),
    //     price VARCHAR(10),
    //     link VARCHAR(500),
    //     image_link VARCHAR(500)
    //     )");
    // echo "Table created successfully<br>";

    // $db->exec("ALTER TABLE items MODIFY COLUMN link VARCHAR(500)");
    // $db->exec("ALTER TABLE items MODIFY COLUMN image_link VARCHAR(500)");
    // $db->exec('UPDATE items SET image_link="https://filedn.com/ltOdFv1aqz1YIFhf4gTY8D7/ingus-info/BLOGS/Photography-stocks3/stock-photography-slider.jpg" WHERE title="first_item" ');

    // $db->exec('INSERT INTO items (title, price, link, image_link) VALUES ("first_item", "123", "http://localhost/1", "https://filedn.com/ltOdFv1aqz1YIFhf4gTY8D7/ingus-info/BLOGS/Photography-stocks3/stock-photography-slider.jpg")');
    // $db->exec('INSERT INTO items (title, price, link, image_link) VALUES ("second_item", "321", "http://localhost/2", "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png")');
    // $db->exec('INSERT INTO items (title, price, link, image_link) VALUES ("third_item", "9001", "http://localhost/3", "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png")');

    $result = $db->query("SELECT * FROM items")->fetchAll(\PDO::FETCH_ASSOC);
    $result_json = json_encode($result);

    echo $result_json;

} catch(PDOException $e) {
    echo "Error: " . $e->getMessage();
}

$conn = null;

?> 