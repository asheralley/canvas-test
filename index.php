<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

// Instantiation and passing `true` enables exceptions
//$name = $_POST['name'];
//$email = $_POST['email'];
//$message = $_POST['message'];
$msg = '';
if (array_key_exists('email', $_POST)) {
    $mail = new PHPMailer(true);
    //Server settings
    $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                       // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'asherwebdev@gmail.com';                // SMTP username
    $mail->Password   = 'bneaa360';                             // SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 587;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mail->setFrom('ash_knifehand@hotmail.com', 'Mailer');
    $mail->addAddress('asherwebdev@gmail.com', 'Asher Alley');     // Add a recipient
    //$mail->addAddress('ellen@example.com');               // Name is optional
    if ($mail->addReplyTo($_POST['email'], $_POST['name'])){

    //$mail->addCC('cc@example.com');
    //$mail->addBCC('bcc@example.com');

    // Attachments
    //$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
    //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name

    //$body .= $name;
    //$body .= $email;
    //$body = "Email from $name $email \r\n $message";

    // Content
    $mail->isHTML(false);                                  // Set email format to HTML
    $mail->Subject = "Email from website";
    $mail->Body = <<<EOT
Email: {$_POST['email']}
Name: {$_POST['name']}
Message: {$_POST['message']}
EOT;
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

        if (!$mail->send()){
            $msg = 'Sorry, something went wrong. Please try again later.'
        } else {
            $msg = 'Message sent! Thanks for contacting me.';
        }
    }else {
        $msg = 'Invalid email address, message ignored';

    }
}
?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Asher Alley - Front-End Web Developer</title>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Catamaran:wght@300;400;500&display=swap" rel="stylesheet">
    <link rel="shortcut icon" href="img/flavicon-5.png" type="image/x-icon">
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <section class="home">
      <div class="main">
        <nav>
          <div class="container">
            <div class="nav-right">
              <!-- <img class="nav-img" src="img/logo-nav.png" alt=""> -->
              <ul class="nav-list">
                <li><a href="#about">About</a></li>
                <li><a href="#work">Work</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </nav>
        <!-- <div class="nav-center">
          <h2 class="name-nav">Asher Alley</h2>
        </div> -->
        <div class="main-heading">
          <div>
            <img src="img/logo-main.png" alt="">
            <h2 class="name-main">Asher Alley</h2>
          </div>
        </div>
      </div>
      <canvas id="canvas1"></canvas>
    </section>
    <div class="sticky-nav" id="stickyNav">
      <div class="container">
        <ul class="sticky-nav-list">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </div>

    <section id="about" class="about">
      <div class="container">
        <div class="section-heading">
          <h2><span class="header-decoration">//</span>About</h2>
        </div>
        <div class="about-content">
          <div class="profile-img">
            <img src="img/profile-pic-goodangle.jpg" alt="">
          </div>
          <div class="about-blurb">
            <p>Hello, I'm Asher Alley, a front end web developer located in Albany, Auckland. I recently made the switch to web design and development after falling in love with coding and the creation of a website from original concepts to active, user-friendly sites. In late 2016 I completed a 3 month intensive boot camp at Yoobee School of Design in Front-End Web Development and since January of 2017 I have been sub contracting to Veratech Web Solutions. I have worked on several projects since then, for such companies as; REINZ, Dancing with Data and Mainly Books.</p>
            <p>My current areas of focus are HTML, CSS and Javascript, although I am constantly aiming to improve my skills and learn new techniques. I am looking for a full-time job in web development that would allow me to challenge myself, broaden my knowledge and give me the opportunity to create fun, innovative websites that are easy to use.</p>
            <p>Outside of web development I enjoy relaxing with my friends and family, reading, customizing my Linux environment and binge watching the Marvel movies.</p>
            <hr>
          </div>
        </div>
        <div class="tech-images">
          <div class="row">
            <img src="img/html.png" alt="html logo" class="tech-img">
            <img src="img/css.png" alt="css logo" class="tech-img">
            <img src="img/javaScript.png" alt="css logo" class="tech-img">
            <img src="img/sass.png" alt="html logo" class="tech-img">
            <img src="img/gulp.png" alt="css logo" class="tech-img">
            <img src="img/git.png" alt="css logo" class="tech-img">
            <img src="img/csharp.png" alt="html logo" class="tech-img">
            <img src="img/mvc.png" alt="css logo" class="tech-img">
          </div>
        </div>
      </div>
    </section>

    <!-- <hr class="section-divider"> -->
    
    <section id="work" class="work">
      <div class="container">
        <div class="section-heading">
          <h2><span class="header-decoration">//</span>Work</h2>
        </div>
        <div class="row-work">
          <div class="image-group">
            <img class="work-img" src="img/dwd-660.jpg" alt="">
            <div class="overlay">
              <div class="text">
                <p>An informational brochure website for impactresearch.org</p>
                <div class="goto-group">
                  <a class="work-goto" href="http://www.dancingwithdata.org.nz/" target="_blank">Go to site</a>
                </div>
              </div>
            </div>
          </div>
          <div class="image-group">
            <img class="work-img" src="img/reinz.jpg" alt="">
            <div class="overlay">
              <div class="text">
                <p>An online tutorial service for the Real Estate Institute of NZ.</p>
                <div class="goto-group">
                  <p>Site is not available to public, and code is proprietary.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row-work">
          <div class="image-group">
            <img class="work-img" src="img/pops.jpg" alt="">
            <div class="overlay">
              <div class="text">
                <p>Brochure site for a small business located in Albany.</p>
                <div class="goto-group">
                  <a class="work-goto" href="http://www.popsgames.co.nz/" target="_blank">Go to site</a>
                </div>
              </div>
            </div>
          </div>
          <div class="image-group">
            <img class="work-img" src="img/brickandblock.jpg" alt="">
            <div class="overlay">
              <div class="text">
                <p>Brochure site for a brick laying business.</p>
                <div class="goto-group">
                  <a class="work-goto" href="http://www.abrickandblockworkcompany.co.nz/" target="_blank">Go to site</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row-work">
          <div class="image-group">
            <img class="work-img" src="img/mainly-books.jpg" alt="">
            <div class="overlay">
              <div class="text">
                <p>A web site for a second hand book store located in Thames.</p>
                <div class="goto-group">
                  <a class="work-goto" href="https://mainlybooksthames.co.nz/" target="_blank">Go to site</a>
                </div>
              </div>
            </div>
          </div>
          <div class="image-group">
            <img class="work-img" src="img/quizzical.jpg" alt="">
            <div class="overlay">
              <div class="text">
                <p>An Easy To Use HTML Quiz System - Built By Asher Alley & Jared Neems</p>
                <div class="goto-group">
                  <a class="work-goto" href="https://github.com/veratechnz/quizzical-demo" target="_blank">Go to demo repository</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row-work">
          <div class="image-group">
            <img class="work-img" src="img/alliance.jpg" alt="">
            <div class="overlay">
              <div class="text">
                <p>Final project for Web and App Development course at Yoobee.</p>
                <p>Built with C#/asp.net, and Javascript.</p>
                <div class="goto-group">
                  <a class="work-goto" href="https://github.com/asheralley/InsuranceFinalProject" target="_blank">Go to repository</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="contact" class="contact">
      <div class="container dark-bg">
        <div class="section-heading">
          <h2 class="dark"><span class="header-decoration">//</span>Contact</h2>
        </div>
        <!-- Contact form here -->
        <form action="send_message.php" method="post" id="contactForm">
          <div class="contact-form">
            <p class="dark">I'd love to have a chat so feel free to get in touch below</p>
            <p class="dark feedback-msg" id="feedBackMsg"></p>
            <label class="dark" for="name">Your name</label>
            <input type="text" name="name" id="name" required>
            <label class="dark" for="email">Email address</label>
            <input type="email" name="email" id="email" required>
            <label class="dark" for="message">Your message</label>
            <textarea type="text" name="message" id="message" required></textarea>
            <input type="submit" id="submitBtn" value="Send message">
          </div>
        </form>


        <div class="lower-footer">
          <ul class="nav-sprites">
            <li><img class="sprite" src="img/facebook-sprite.svg" alt=""></li>
            <li><img class="sprite" src="img/github-sprite.svg" alt=""></li>
            <li><img class="sprite" src="img/linkedin-sprite.svg" alt=""></li>
          </ul>
        </div>
      </div>
    </section>

    <script src="script.js"></script>
    <script src="custom.js"></script>
  </body>
</html>
