<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="icon" href="https://samueleblanc.com/Pictures/favicon.png">
        <title>Solving RT - V 0.1</title>
        <link rel="stylesheet" href="https://samueleblanc.com/CSS/app.css">
    </head>
    <body>
        <header><a href="https://samueleblanc.com/index-RT-calculator.html"><img src="https://samueleblanc.com/Pictures/website title.png" alt="Solving resistance training" id="home"></a></header>
    <h1>Exercise stimulus calculator</h1><br>

    <!-- either tagName or textContent -->
    <?php
        $dom = new DOMDocument();
        if (isset($_POST["button1"])) {
            $video = $dom->getElementById("video")->tagName;
            $muscle = $dom->getElementById("muscle")->tagName;
            $side = $dom->getElementById("side")->textContent;
            
            $json = file_get_contents("bridge.json");
            $data = json_decode($json, true);
            $data[0] = $video;
        }
    ?>

    <form method="post">
    <input type="file" id="video" name="video" accept="video/*">
    <label for="muscle">Which muscle are you training?</label>
        <select id="muscle" name="muscle">
            <option value="chest">Chest</option>
            <option value="chest">Upper back</option>
            <option value="chest">Lats</option>
            <option value="chest">Delts</option>
            <option value="chest">Biceps</option>
            <option value="chest">Triceps</option>
            <option value="chest">Forearm</option>
            <option value="chest">Quads</option>
            <option value="chest">Hamstring</option>
            <option value="chest">Calves</option>
            <option value="chest">Abs</option>
    </select>
    <label for="side">Which side can we see on the video</label>
        <select id="side" name="side">
            <option id="right">Right</option>
            <option id="left">Left</option>
        </select>
    <input type="submit" class="button" name="button1" value="Submit"> 
    </form>
    </body>
</html>