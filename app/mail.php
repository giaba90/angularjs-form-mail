<?php
// Parse JSON
$data = file_get_contents("php://input");
$objData = json_decode($data);
// insert your email into $to variable
$to      = 'gianlucabarranca@gmail.com';
//this variable are necessary for the sending of e-mail
$from 	 = $objData->email ;
$subject = $objData->subject ;
$message = $objData->message ;
$headers = 'From: '. $from . "\r\n" .
    'Reply-To: '. $from . "\r\n" .
    'X-Mailer: PHP/' . phpversion();
//send e-mail
$result=mail($to, $subject, $message, $headers);
if($result){
	$msg = array('type' => 'success','text' => 'Email sent');
	$jsn=json_encode($msg);
	print_r($jsn);
}
else{
	$msg = array('type' => 'error','text' => 'Email not sent');
	$jsn=json_encode($msg);
	print_r($jsn);
}
?>