<?php

if(isset($_POST['submit'])){
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $mailFrom = $_POST['mail'];
    $message = $_POST['message'];

    $mailTo = "tarajkristian@gmail.com";
    $headers = "From :".$mailFrom;

    mail($mailTo , $subject , $message, $headers);
    header("Location: index.hmtl?mailsend");
}
?>