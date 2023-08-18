<?php 

error_reporting(E_ALL);

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'vendor/autoload.php';

// $post = extract($_POST);

// extract($_POST)
// foreach ($_POST as $key => $value) {
//     $this->$name = $name;
//     $this->$email = $email;
//     $this->$subject = $subject;
//     $this->$message = $message;
// }

//$_POST["name"]
// $inputs = json_decode(file_get_contents("php://input"));
//$inputs->name

//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    $mail->CharSet = 'UTF-8';
    //Server settings
    $mail->SMTPDebug = false;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'mail.pelda.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'sender@pelda.com';                     //SMTP username
    $mail->Password   = 'sender';                               //SMTP password
    $mail->SMTPSecure = 'tls';            //Enable implicit TLS encryption
    $mail->Port       = 587;             //465, 587, 25                        //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
    $mail->setFrom('sender@pelda.com', 'Projekt-Készítő');
    $mail->addAddress('pelda@pelda.com', 'Pelda');     //Add a recipient
    //$mail->addAddress('ellen@example.com');               //Name is optional
    //$mail->addReplyTo('info@example.com', 'Information');
    //$mail->addCC('cc@example.com');
    //$mail->addBCC('bcc@example.com');

    // //Attachments
    // $mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
    // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = $_POST["subject"];
    $mail->Body    = 'Here is the message from /name/: '.$_POST["name"].' /email/: '.$_POST["email"].' /message/: '.$_POST["message"];
    $mail->AltBody = '';

    $mail->send();

    echo json_encode(['status'=>'success', 'message'=>'Message has been sent']);
} catch (Exception $e) {
    echo json_encode(['status'=>'error', 'message'=>"Message could not be sent. Mailer Error: {$mail->ErrorInfo}"]);
}
