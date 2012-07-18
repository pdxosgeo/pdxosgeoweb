<?php
// change all user refs
$name = htmlspecialchars(trim($_POST['name']));
$email = htmlspecialchars(trim($_POST['email']));
$website = htmlspecialchars(trim($_POST['website']));
$place = htmlspecialchars(trim($_POST['place']));
$lat = htmlspecialchars(trim($_POST['lat']));
$lng = htmlspecialchars(trim($_POST['lng']));
$token = mt_rand(100000, 999999);

$db = new PDO('sqlite:leaflet.sqlite');
$db->exec("INSERT INTO users (name, email, website, place, lat, lng, token) VALUES ('$name', '$email', '$website', '$place', '$lat', '$lng', '$token');");
$db = NULL;

$subject = "Thanks for contributing to the PDX OS Geo Map!";
$body = '
<html>
<head>
</head>
<body>
	<p>Thanks for adding your the meeting to the map!</p>
	Your account information:<br>
	-------------------------<br>
	Email: '.$email.'<br>
	Token: '.$token.'<br>
	-------------------------<br><br>
  Looks like you added <strong>'.$name.'</strong> to the map. Should you want to remove <br>
  your information, please visit the map and click on the Remove me button. Enter your email and unique<br>
  token to remove your entry from the database. <br>
  Alternatively, you can also remove it by clicking on this <a href="http://localhost/pdxosgeo/remove_user.php">link.</a><br>
  Feel free to add yourself back to the map at any time!
</body>
</html>
';
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
$headers .= 'From: PDX OSGEO Map <geog.rafa.maps@gmail.com>' . "\r\n";
//replace this eventually with someone else's email!
mail($email, $subject, $body, $headers, "-fgeog.rafa.maps@gmail.com");
?>