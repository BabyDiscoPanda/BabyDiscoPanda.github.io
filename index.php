<?php
include_once "item.php";
?>
<!doctype html>
<html>
    <head>
        <title>SPINDOWN DICE - Main menu</title>
        <!-- bootstrap 5 -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    </head>
    <body>
        <div class="bg-image" style="background-image: url('./img/background/bg.png');background-repeat: no-repeat;background-size: cover;height: 100vh"> 
            <div>
                <h1> <?php echo  $item[0]->getName();?></h1>
                <img <?php echo "src='./".$item[0]->getName()."/img.webp"; ?>/>
            </div>
        </div>
        
        </div>
    </body>
</html>